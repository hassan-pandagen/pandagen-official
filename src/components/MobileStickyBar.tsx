"use client";

import { useState, useEffect, useCallback } from "react";
import { Zap } from "lucide-react";

type BarState = "idle" | "connecting" | "ready";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [chatState, setChatState] = useState<BarState>("idle");

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const handleScroll = () => {
      if (hasScrolled) return;
      if (window.scrollY > 300) {
        setHasScrolled(true);
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const handleChat = useCallback(() => {
    // Already loaded, just open
    const api = (window as any).Tawk_API;
    if (api?.maximize) {
      api.maximize();
      setVisible(false);
      api.onChatMinimized = () => setVisible(true);
      return;
    }

    // Load Tawk on demand
    if (chatState === "connecting") return;
    setChatState("connecting");

    const tawkApi = (window as any).Tawk_API || {};
    (window as any).Tawk_API = tawkApi;

    tawkApi.onLoad = function () {
      setChatState("ready");
      setTimeout(() => {
        tawkApi.maximize();
        setVisible(false);
        tawkApi.onChatMinimized = () => {
          setVisible(true);
          setChatState("ready");
        };
      }, 300);
    };

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/69861ee219d9521c3a42fa82/1jgpuh9j5";
    s0.parentNode?.insertBefore(s1, s0);
  }, [chatState]);

  const goToAudit = useCallback(() => {
    if (window.location.pathname === "/") {
      const el = document.getElementById("audit-widget");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      // Fallback: scroll to top where hero + audit widget are
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // On other pages, navigate to homepage and scroll to audit
      window.location.href = "/#audit-widget";
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[55] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="h-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      <div className="bg-charcoal border-t border-white/5 px-4 py-2.5">
        <div className="flex gap-2.5 max-w-lg mx-auto">

          {/* Chat button */}
          <button
            onClick={handleChat}
            disabled={chatState === "connecting"}
            className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-lg bg-white/[0.07] border border-white/[0.08] transition-all active:scale-[0.97] disabled:opacity-60"
          >
            {chatState === "connecting" ? (
              <svg className="w-4 h-4 text-white/70 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="32" strokeDashoffset="32" strokeLinecap="round">
                  <animate attributeName="stroke-dashoffset" values="32;0" dur="1s" repeatCount="indefinite" />
                </circle>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            )}
            <span className="text-[13px] font-medium text-white/90 tracking-wide">
              {chatState === "idle" && "Need Help?"}
              {chatState === "connecting" && "Connecting..."}
              {chatState === "ready" && "Open Chat"}
            </span>
          </button>

          {/* Audit button */}
          <button
            onClick={goToAudit}
            className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-lg bg-cognac/90 transition-all active:scale-[0.97]"
          >
            <Zap className="w-4 h-4 text-white/90" />
            <span className="text-[13px] font-medium text-white tracking-wide">Free Website Audit</span>
          </button>

        </div>
      </div>
    </div>
  );
}
