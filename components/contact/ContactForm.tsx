"use client";

import { useState } from "react";
import { allServices } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

const budgets = ["Not sure yet", "Under KES 50,000", "KES 50,000 – 150,000", "KES 150,000 – 500,000", "Above KES 500,000"];

const inputClass =
  "w-full rounded-xl border-[1.5px] border-line bg-cream px-4 py-3 text-ink outline-none transition placeholder:text-muted/70 focus:border-coral focus:bg-white";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser from reloading the page
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)); // { name: "...", email: "...", ... }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) throw new Error(result.error ?? "Something went wrong.");

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-[28px] bg-ink p-10 text-center text-white">
        <span aria-hidden className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-sun text-2xl text-ink">
          ✓
        </span>
        <h2 className="text-2xl font-extrabold">Thank you — message received!</h2>
        <p className="mt-3 text-muted-dark">We&apos;ll get back to you within one business day.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-xl bg-white px-5 py-3 font-bold text-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border-[1.5px] border-line bg-white p-6 md:p-10" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold">Your name *</span>
          <input name="name" required minLength={2} autoComplete="name" className={inputClass} placeholder="Jane Wanjiku" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold">Company</span>
          <input name="company" autoComplete="organization" className={inputClass} placeholder="Business name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold">Email *</span>
          <input name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@company.co.ke" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold">Phone / WhatsApp</span>
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="07XX XXX XXX" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold">What do you need?</span>
          <select name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            {allServices.map((s) => (
              <option key={s.name}>{s.name}</option>
            ))}
            <option>Something else</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold">Budget</span>
          <select name="budget" className={inputClass} defaultValue="Not sure yet">
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-bold">Tell us about your project *</span>
          <textarea
            name="message"
            required
            minLength={10}
            rows={5}
            className={inputClass}
            placeholder="What are you looking to build or improve?"
          />
        </label>

        {/* Honeypot: hidden from people, bots fill it in and get ignored */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-xl bg-[#FFE9E2] px-4 py-3 text-sm font-semibold text-coral">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-coral px-6 py-4 font-bold text-white shadow-lg shadow-coral/30 transition hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
