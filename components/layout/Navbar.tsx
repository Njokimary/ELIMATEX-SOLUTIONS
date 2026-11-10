"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/site";

// A link is "active" on its own page and on any page below it
// (e.g. /services/build keeps "Services" highlighted).
function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function DesktopLinks({ pathname }: { pathname: string | null }) {
  return (
    <nav aria-label="Main" className="hidden gap-8 font-semibold text-muted lg:flex">
      {navLinks.map((link) => {
        const active = isActive(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`relative transition hover:text-ink ${active ? "text-ink" : ""}`}
          >
            {link.label}
            {active && <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded bg-brand-gradient" />}
          </Link>
        );
      })}
    </nav>
  );
}

// usePathname must sit inside <Suspense> when Cache Components is on,
// so the links render instantly and the active state fills in.
function ActiveDesktopLinks() {
  const pathname = usePathname();
  return <DesktopLinks pathname={pathname} />;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        <Logo />

        <Suspense fallback={<DesktopLinks pathname={null} />}>
          <ActiveDesktopLinks />
        </Suspense>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-ink px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 sm:inline-block"
          >
            Start a Project
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-xl text-2xl text-ink lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t border-ink/5 bg-cream px-6 pb-6 pt-3 font-semibold lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 hover:bg-lilac"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-coral px-5 py-3 text-center font-bold text-white"
          >
            Start a Project
          </Link>
        </nav>
      )}
    </header>
  );
}
