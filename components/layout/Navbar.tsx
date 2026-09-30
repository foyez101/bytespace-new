"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { BagIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-30">
      <Container className="flex h-[88px] items-center justify-between lg:h-[120px]">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map(({ label, href }) => {
              const active = href === pathname;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={cn(
                      "text-base transition-colors",
                      active ? "font-medium text-white" : "text-white/85 hover:text-white",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center md:flex">
          <Link href="/login" className="pr-3 text-base text-white/85 hover:text-white">
            Sign In
          </Link>
          <span className="h-6 w-px bg-white/25" aria-hidden />
          <Link href="/register" className="pl-3 text-base text-white/85 hover:text-white">
            Join Us
          </Link>
          <button type="button" aria-label="Cart" className="ml-7 text-white hover:text-lime">
            <BagIcon className="size-5" />
          </button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-4 top-[80px] rounded-2xl bg-white p-4 shadow-xl md:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-ink hover:bg-chip">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-3 border-t border-chip pt-4">
            <Link href="/login" className="rounded-full border border-line py-2.5 text-center text-ink">
              Sign In
            </Link>
            <Link href="/register" className="rounded-full bg-lime py-2.5 text-center text-ink">
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
