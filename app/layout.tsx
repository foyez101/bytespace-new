import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted (Poppins for headings, Figtree for body copy) so builds never depend on a network fetch.
const heading = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    { path: "./fonts/poppins-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/poppins-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/poppins-latin-700-normal.woff2", weight: "700" },
    { path: "./fonts/poppins-latin-800-normal.woff2", weight: "800" },
  ],
});

const body = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "./fonts/figtree-latin-300-normal.woff2", weight: "300" },
    { path: "./fonts/figtree-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/figtree-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/figtree-latin-600-normal.woff2", weight: "600" },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "ByteSpace | Get Access to Hundreds of Courses",
    template: "%s | ByteSpace",
  },
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of courses.",
  icons: { icon: "/images/brands/logo-mark.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
