import Link from "next/link";

// Elimatex logo — "The Sun e" (Concept 4).
// The lowercase e is a sun ring; its crossbar is a horizon that reaches
// past the letter to a connection node.
// To use a different logo later, only this file needs to change.

type LogoProps = {
  dark?: boolean; // white version for dark backgrounds
};

export function LogoMark({ dark = false, className = "h-9 w-auto" }: { dark?: boolean; className?: string }) {
  const ink = dark ? "#FFFFFF" : "#1E1B4B";
  return (
    <svg viewBox="10 16 108 88" className={className} aria-hidden>
      <defs>
        <linearGradient id="elimatex-sun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF5A36" />
          <stop offset="1" stopColor="#FF9F1C" />
        </linearGradient>
      </defs>
      <path
        d="M 88 60 A 34 34 0 1 0 80.05 81.86"
        fill="none"
        stroke="url(#elimatex-sun)"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <line x1="22" y1="60" x2="98" y2="60" stroke={ink} strokeWidth="11" strokeLinecap="round" />
      <circle cx="106" cy="60" r="9" fill={ink} />
    </svg>
  );
}

export default function Logo({ dark = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Elimatex Solutions — home"
      className={`flex items-center gap-2.5 text-[1.4rem] font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}
    >
      <LogoMark dark={dark} className="h-8 w-auto" />
      elimatex
    </Link>
  );
}
