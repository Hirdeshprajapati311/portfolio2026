"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border/70 bg-surface p-8 sm:p-10">
        <div className="flex size-10 items-center justify-center rounded-full border border-border">
          <Check className="size-4" />
        </div>

        <h2 className="mt-8 text-2xl font-semibold tracking-tight">
          Message received.
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
          Thanks for reaching out. I'll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border/70 bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-sm outline-none placeholder:text-muted-foreground/50 transition-colors focus:border-foreground"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-sm outline-none placeholder:text-muted-foreground/50 transition-colors focus:border-foreground"
          />
        </div>
      </div>

      <div className="mt-8">
        <label
          htmlFor="message"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me what you're building..."
          className="mt-3 w-full resize-none border-b border-border bg-transparent px-0 py-3 text-sm leading-6 outline-none placeholder:text-muted-foreground/50 transition-colors focus:border-foreground"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:-translate-y-1 hover:bg-zinc-200 disabled:pointer-events-none disabled:opacity-60"
      >
        {loading ? (
          <>
            Sending
            <Loader2 className="size-4 animate-spin" />
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
    </form>
  );
}