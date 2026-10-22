"use client";

import { useState } from "react";

export default function DoNotShareForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
    setState("sending");
    try {
      const response = await fetch("/api/do-not-share", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setState("done");
        return;
      }
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setMessage(body?.error ?? "We could not record that just now. Please email info@pandacodegen.com.");
      setState("error");
    } catch {
      setMessage("We could not record that just now. Please email info@pandacodegen.com.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p role="status" className="rounded-xl border border-stone-300 bg-white p-5 text-charcoal">
        Done. We will not share information linked to that email address with advertising platforms, including for
        any enquiry it sends us in future.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <label htmlFor="dns-email" className="block text-sm font-semibold text-charcoal">
        The email address you used with us
      </label>
      <input
        id="dns-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-charcoal"
      />
      <button
        type="submit"
        disabled={state === "sending"}
        className="rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Do not share my information"}
      </button>
      {state === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {message}
        </p>
      )}
    </form>
  );
}
