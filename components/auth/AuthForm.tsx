"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { FacebookIcon, GoogleIcon } from "@/components/ui/icons";
import { TextField } from "./TextField";

type Field = { name: string; label: string; type: string; placeholder: string; autoComplete: string };

const fields: Record<"login" | "register", Field[]> = {
  login: [
    { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
    { name: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "current-password" },
  ],
  register: [
    { name: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
    { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
    { name: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "new-password" },
  ],
};

function validate(values: Record<string, string>) {
  const errors: Record<string, string> = {};
  if ("name" in values && values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.password.length < 8) errors.password = "Password must be at least 8 characters.";
  return errors;
}

/**
 * Login / Register form with client-side validation.
 * There is no backend in this assessment, so a valid submit shows a success message.
 */
export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-lime/25 px-6 py-8 text-center">
        <p className="font-display text-xl font-semibold text-ink">
          {mode === "login" ? "Signed in successfully!" : "Your account is ready!"}
        </p>
        <p className="mt-2 text-muted">This is a front-end demo, so no data was sent anywhere.</p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-lime px-6 py-3 text-ink">
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="flex flex-col gap-6">
        {fields[mode].map((f) => (
          <TextField
            key={f.name}
            name={f.name}
            label={f.label}
            type={f.type}
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            error={errors[f.name]}
            onChange={() => errors[f.name] && setErrors((prev) => ({ ...prev, [f.name]: "" }))}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Button type="submit" disabled={status === "loading"} className="h-[46px] min-w-[104px] px-6 text-lg">
          {status === "loading" ? "Please wait..." : mode === "login" ? "Sign In" : "Continue"}
        </Button>
      </div>

      {mode === "login" && (
        <>
          <div className="mt-20 flex items-center gap-4 text-lg text-muted" role="separator">
            <span className="h-px flex-1 bg-[#d9d9d9]" /> or <span className="h-px flex-1 bg-[#d9d9d9]" />
          </div>
          <div className="mt-12 flex justify-center gap-4">
            {[
              { label: "Continue with Facebook", Icon: FacebookIcon },
              { label: "Continue with Google", Icon: GoogleIcon },
            ].map(({ label, Icon }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="grid size-[72px] place-items-center rounded-[20px] border border-[#d9d9d9] text-ink transition-colors hover:border-ink"
              >
                <Icon className="size-8" />
              </button>
            ))}
          </div>
        </>
      )}
    </form>
  );
}
