"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Logo />

        {/* Desktop links */}
        <nav className="hidden gap-8 font-semibold text-muted lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition hover:text-ink ${active ? "text-ink" : ""}`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded bg-brand-gradient" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-ink px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 sm:inline-block"
          >
            Start a Project
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-ink lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-ink/5 bg-cream px-6 py-5 font-semibold lg:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}