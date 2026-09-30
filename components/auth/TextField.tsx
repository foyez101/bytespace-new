"use client";

import { useId, useState, type ComponentProps } from "react";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type TextFieldProps = Omit<ComponentProps<"input">, "id"> & {
  label: string;
  error?: string;
};

/** Labelled input with inline error text and an optional show/hide toggle for passwords. */
export function TextField({ label, error, type = "text", className, ...props }: TextFieldProps) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-base text-ink-soft">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          type={isPassword && visible ? "text" : type}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "h-[51px] w-full rounded-[14px] border bg-white px-6 text-lg text-ink outline-none transition-colors placeholder:text-[#9b9b9b]",
            "focus:border-brand focus:ring-4 focus:ring-brand/10",
            error ? "border-red-500" : "border-[#dedede]",
            isPassword && "pr-14",
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
            className="absolute top-1/2 right-4 grid size-8 -translate-y-1/2 place-items-center text-muted hover:text-ink"
          >
            {visible ? <EyeOffIcon className="size-5" /> : <EyeIcon className="size-5" />}
          </button>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
