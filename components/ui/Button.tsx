import Link from "next/link";

const variants = {
  primary: "bg-coral text-white shadow-lg shadow-coral/30",
  dark: "bg-ink text-white",
  outline: "border-[1.5px] border-ink/20 text-ink hover:border-coral hover:text-coral",
  light: "bg-white text-ink",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
};

export default function Button({ href, children, variant = "primary", external = false, className = "" }: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold transition hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  // External links (WhatsApp, email) use a normal <a>; internal pages use <Link>
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Arrow() {
  return <span className="transition-transform group-hover:translate-x-1">→</span>;
}
