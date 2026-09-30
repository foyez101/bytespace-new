"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email")?.toString() ?? "";
    setStatus(/^\S+@\S+\.\S+$/.test(email) ? "done" : "error");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={() => status !== "idle" && setStatus("idle")}
          className="h-[52px] w-full rounded-full border border-[#cfcfcf] bg-white px-6 text-base text-ink outline-none placeholder:text-ink-soft focus:border-brand sm:max-w-[376px]"
        />
        <Button type="submit" className="self-start sm:self-auto">
          Search
        </Button>
      </div>
      <p className="mt-4 min-h-5 text-sm" aria-live="polite">
        {status === "done" && <span className="text-brand">Thanks! You&apos;re on the list.</span>}
        {status === "error" && <span className="text-red-600">Please enter a valid email address.</span>}
      </p>
    </form>
  );
}
