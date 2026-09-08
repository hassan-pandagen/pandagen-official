"use client";

import { Fragment, useEffect, useRef, useState, useCallback } from "react";
import { Search, X, Loader2 } from "lucide-react";
import Link from "next/link";

// Pagefind is loaded dynamically from /_pagefind/pagefind.js at runtime.
// It's a small (~10 KB) JS file that loads a fragmented index on-demand.
// Only loads when the user opens the search, so zero LCP impact.

type PagefindResult = {
    id: string;
    score: number;
    data: () => Promise<{
        url: string;
        excerpt: string;
        meta: {
            title: string;
            image?: string;
        };
        content: string;
    }>;
};

type PagefindSearchResults = {
    results: PagefindResult[];
};

type PagefindAPI = {
    search: (query: string) => Promise<PagefindSearchResults>;
    preload?: (query: string) => Promise<void>;
};

declare global {
    interface Window {
        pagefind?: PagefindAPI;
    }
}

type HydratedResult = {
    id: string;
    url: string;
    title: string;
    excerpt: string;
};

// Pagefind wraps matching terms in <mark>. Render those highlights as React
// elements and discard every other tag so indexed content can never inject HTML.
function renderHighlightedExcerpt(excerpt: string) {
    const parts = excerpt.split(/(<\/?mark(?:\s[^>]*)?>|<[^>]*>)/gi);
    let isHighlighted = false;

    return parts.map((part, index) => {
        if (/^<mark(?:\s[^>]*)?>$/i.test(part)) {
            isHighlighted = true;
            return null;
        }

        if (/^<\/mark>$/i.test(part)) {
            isHighlighted = false;
            return null;
        }

        if (!part || /^<[^>]*>$/.test(part)) return null;

        return isHighlighted
            ? <mark key={index}>{part}</mark>
            : <Fragment key={index}>{part}</Fragment>;
    });
}

export default function BlogSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<HydratedResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isPagefindLoaded, setIsPagefindLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Lazy-load pagefind only when user focuses or types in the search box
    const loadPagefind = useCallback(async () => {
        if (window.pagefind) {
            setIsPagefindLoaded(true);
            return;
        }
        try {
            // @ts-expect-error - dynamic import of built artifact
            const pagefind = await import(/* webpackIgnore: true */ "/_pagefind/pagefind.js");
            window.pagefind = pagefind;
            setIsPagefindLoaded(true);
        } catch (err) {
            console.warn("Pagefind failed to load, search disabled", err);
        }
    }, []);

    const handleClose = useCallback(() => {
        const focusTarget = previouslyFocusedRef.current ?? triggerRef.current;

        setIsOpen(false);
        setQuery("");
        setResults([]);
        previouslyFocusedRef.current = null;

        window.requestAnimationFrame(() => focusTarget?.focus());
    }, []);

    const handleOpen = useCallback(() => {
        previouslyFocusedRef.current = document.activeElement instanceof HTMLElement
            ? document.activeElement
            : triggerRef.current;
        setIsOpen(true);
        void loadPagefind();
    }, [loadPagefind]);

    useEffect(() => {
        if (!isOpen) return;

        const animationFrame = window.requestAnimationFrame(() => inputRef.current?.focus());
        return () => window.cancelAnimationFrame(animationFrame);
    }, [isOpen]);

    // Keyboard shortcut, dismissal, and modal focus containment.
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                if (isOpen) {
                    inputRef.current?.focus();
                } else {
                    handleOpen();
                }
                return;
            }

            if (e.key === "Escape" && isOpen) {
                e.preventDefault();
                handleClose();
                return;
            }

            if (e.key === "Tab" && isOpen && dialogRef.current) {
                const focusableElements = Array.from(
                    dialogRef.current.querySelectorAll<HTMLElement>(
                        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    )
                );

                if (focusableElements.length === 0) {
                    e.preventDefault();
                    dialogRef.current.focus();
                    return;
                }

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleClose, handleOpen, isOpen]);

    // Search on query change (debounced)
    useEffect(() => {
        if (!isPagefindLoaded || !window.pagefind) return;
        if (!query.trim()) {
            setResults([]);
            setIsLoading(false);
            return;
        }

        if (debounceRef.current) clearTimeout(debounceRef.current);
        setIsLoading(true);

        debounceRef.current = setTimeout(async () => {
            if (!window.pagefind) return;
            try {
                const search = await window.pagefind.search(query);
                const hydrated = await Promise.all(
                    search.results.slice(0, 8).map(async (r) => {
                        const data = await r.data();
                        return {
                            id: r.id,
                            url: data.url.replace(/\.html$/, "").replace(/\/index$/, ""),
                            title: data.meta.title || "Untitled",
                            excerpt: data.excerpt,
                        };
                    })
                );
                setResults(hydrated);
            } catch (err) {
                console.warn("Pagefind search error", err);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        }, 150);

        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [query, isPagefindLoaded]);

    const handleFocus = () => {
        loadPagefind();
    };

    return (
        <>
            {/* Trigger button that looks like a search input but opens the modal */}
            <button
                ref={triggerRef}
                type="button"
                onClick={handleOpen}
                className="w-full md:w-96 flex items-center gap-3 pl-12 pr-4 py-3 bg-white border border-stone-300 rounded-full text-left text-stone-600 hover:border-stone-400 transition-colors relative"
                aria-label="Search blog articles"
            >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-600" />
                <span className="flex-1 text-sm">Search articles...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-stone-300 bg-stone-50 text-[10px] font-bold text-stone-600">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-20 bg-charcoal/60 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    <div
                        ref={dialogRef}
                        className="w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Search blog articles"
                        tabIndex={-1}
                    >
                        {/* Input */}
                        <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-200">
                            <Search className="w-5 h-5 text-stone-600 shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onFocus={handleFocus}
                                placeholder="Search articles..."
                                aria-label="Search blog articles"
                                className="flex-1 bg-transparent text-charcoal placeholder:text-stone-600 text-base outline-none"
                                autoFocus
                            />
                            {isLoading && <Loader2 className="w-4 h-4 text-stone-600 animate-spin shrink-0" />}
                            <button
                                onClick={handleClose}
                                className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-stone-100 transition-colors"
                                aria-label="Close search"
                            >
                                <X className="w-5 h-5 text-stone-600" />
                            </button>
                        </div>

                        {/* Results */}
                        <div data-lenis-prevent className="max-h-[60vh] overflow-y-auto">
                            {!query.trim() && (
                                <div className="px-5 py-10 text-center text-stone-600 text-sm">
                                    <p>Start typing to search articles</p>
                                    <p className="mt-2 text-xs">Press <kbd className="px-1.5 py-0.5 bg-stone-100 border border-stone-200 rounded text-[10px] font-bold">Esc</kbd> to close</p>
                                </div>
                            )}

                            {query.trim() && results.length === 0 && !isLoading && (
                                <div className="px-5 py-10 text-center text-stone-600 text-sm">
                                    <p>No articles found for &ldquo;{query}&rdquo;</p>
                                </div>
                            )}

                            {results.length > 0 && (
                                <ul className="divide-y divide-stone-100">
                                    {results.map((r) => (
                                        <li key={r.id}>
                                            <Link
                                                href={r.url}
                                                onClick={handleClose}
                                                className="block px-5 py-4 hover:bg-stone-50 transition-colors group"
                                            >
                                                <h3 className="text-charcoal font-bold text-base mb-1 group-hover:text-cognac transition-colors line-clamp-1">
                                                    {r.title.replace(" | PandaCodeGen", "")}
                                                </h3>
                                                <p className="text-stone-600 text-xs leading-relaxed line-clamp-2 [&_mark]:bg-cognac/10 [&_mark]:text-cognac [&_mark]:font-semibold [&_mark]:rounded [&_mark]:px-0.5">
                                                    {renderHighlightedExcerpt(r.excerpt)}
                                                </p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between px-5 py-3 border-t border-stone-200 bg-stone-50 text-[10px] font-semibold uppercase tracking-wider text-stone-600">
                            <span>Powered by Pagefind</span>
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 bg-white border border-stone-200 rounded">↵</kbd>
                                    Open
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 bg-white border border-stone-200 rounded">Esc</kbd>
                                    Close
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
