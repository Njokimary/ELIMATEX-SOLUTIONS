import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-[1.35rem] font-extrabold tracking-tight text-ink">
      <span className="relative h-9 w-9">
        <span className="absolute inset-x-0 bottom-1 h-[18px] rounded-t-full bg-brand-gradient" />
        <span className="absolute inset-x-[3px] bottom-0 h-[3px] rounded bg-ink" />
      </span>
      elimatex
    </Link>
  );
}