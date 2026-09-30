import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, legalLinks } from "@/data/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-[#e3e3e3] bg-white">
      <Container className="pt-[70px]">
        <div className="grid gap-12 lg:grid-cols-[505px_1fr] lg:gap-[115px]">
          <div>
            <Logo tone="dark" />
            <p className="mt-4 text-sm text-ink-soft">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm />
            <p className="max-w-[470px] text-xs leading-[1.6] text-ink-soft">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 pt-[50px] sm:grid-cols-3">
            {footerColumns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-[22px]">
                {column.map((link) => (
                  <li key={link}>
                    <Link href="/" className="text-sm text-ink-soft transition-colors hover:text-brand">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-[#dcdcdc] py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link}>
                <Link href="/" className="hover:text-brand">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
