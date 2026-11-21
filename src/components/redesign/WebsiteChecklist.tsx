"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { ArrowRightLeft, BellRing, Calculator, CalendarDays, Check, FilePenLine, Mail, ReceiptText, Search } from "lucide-react";
import { DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import actions from "./SalesActions.module.css";
import WrittenCheckButton, { setChecklistTopics } from "@/components/ui/WrittenCheckButton";

const CHECKLIST = [
  { icon: CalendarDays, topic: "online booking", problem: "Customers call or text to ask if you're free on Tuesday.", answer: "They see live times, then book and pay on your site, day or night." },
  { icon: ReceiptText, topic: "deposits and payments", problem: "You chase deposits and payments.", answer: "Payment is taken when they book, and the receipt goes out on its own." },
  { icon: BellRing, topic: "appointment reminders", problem: "People forget, don't show up, or ask what to bring.", answer: "Confirmations, reminders and follow-ups send themselves, with the date, the venue and what to bring." },
  { icon: Mail, topic: "repetitive emails", problem: "You type the same emails every week.", answer: "Welcome, reminder, certificate and thank-you messages are written once and sent automatically." },
  { icon: Search, topic: "AI search visibility", problem: "Ask ChatGPT who's the best in your field in your city. Did it name you?", answer: "Every build is set up so ChatGPT and Google's AI can read and quote your answers." },
  { icon: Calculator, topic: "bookkeeping", problem: "You copy payments into your books by hand.", answer: "Payments sync to QuickBooks." },
  { icon: FilePenLine, topic: "editing the website", problem: "Changing your website means waiting for a developer.", answer: "You edit your own pages, and your accounts are in your name." },
  // 21 Nov 2026: the migration line, after the 58-buyer test (migration buyers asked how links and rankings are protected).
  { icon: ArrowRightLeft, topic: "moving the website", problem: "Your site is slow or breaks after updates, and moving it feels risky.", answer: "We move it off WordPress, Wix, Squarespace or Shopify with a redirect for every old URL, so your pages, posts and links keep working." },
];

export default function WebsiteChecklist({ children }: { children: ReactNode }) {
  const id = useId();
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => () => setChecklistTopics([]), []);

  function toggle(topic: string, problem: string, checked: boolean) {
    const next = checked ? [...selected, topic] : selected.filter((item) => item !== topic);
    setSelected(next);
    setChecklistTopics(next);
    (window as { gtag?: (...args: unknown[]) => void }).gtag?.("event", "checklist_tick", { problem, checked, count: next.length });
  }

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-12 lg:gap-10">
        {children}
        <div className="max-w-[34rem] self-end lg:col-span-5">
          <p className="text-[17px] leading-[1.6]" style={{ color: T.body }}>
            Tick what happens in your business. Two or more is time and customers your website could be saving you.
          </p>
          <p className="mt-3 text-sm font-semibold tabular-nums" role="status" style={{ fontFamily: MONO, color: T.accentText }}>
            {selected.length} of {CHECKLIST.length} selected
          </p>
          {selected.length > 0 && (
            <WrittenCheckButton location="home_checklist_ticks" className={`${actions.button} ${actions.solid} mt-4 inline-flex min-h-12 items-center px-5 py-3 text-[15px] font-semibold`}>
              Get your free written check for {selected.length === 1 ? "this" : `these ${selected.length}`}
            </WrittenCheckButton>
          )}
        </div>
      </div>

      <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
        {CHECKLIST.map(({ topic, problem, answer, icon: Icon }, index) => {
          const checked = selected.includes(topic);
          const labelId = `${id}-${index}`;

          return (
            <li key={problem} data-selected={checked} className="group relative min-w-0 border p-4 focus-within:outline-2 focus-within:outline-offset-2 sm:p-5"
              style={{ backgroundColor: checked ? `color-mix(in oklch, ${T.accent} 8%, ${T.paperHi})` : T.paperHi, borderColor: checked ? T.accent : T.rule, outlineColor: T.accent }}>
              <input
                type="checkbox"
                aria-labelledby={labelId}
                checked={checked}
                onChange={(event) => toggle(topic, problem, event.currentTarget.checked)}
                className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
              />
              <div className="mb-3 flex items-center justify-between gap-3" aria-hidden="true">
                <span className="flex h-9 w-9 items-center justify-center border motion-safe:transition-transform motion-safe:group-hover:scale-110 motion-safe:group-focus-within:scale-110"
                  style={{ borderColor: checked ? T.accent : T.rule, color: T.accentText }}>
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-[3px] border"
                  style={{ borderColor: checked ? T.accent : T.quiet, backgroundColor: checked ? T.accent : undefined, color: T.paperHi }}>
                  {checked && <Check size={16} strokeWidth={2.5} />}
                </span>
              </div>
              <h3 id={labelId} className="text-[18px] font-bold leading-[1.3] sm:text-[20px]" style={{ fontFamily: DISPLAY_SM, color: T.ink, textWrap: "pretty" }}>
                {problem}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.6] sm:mt-3" style={{ color: T.body }}>
                <strong style={{ fontFamily: MONO, color: T.ink }}>What we build:</strong> {answer}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
