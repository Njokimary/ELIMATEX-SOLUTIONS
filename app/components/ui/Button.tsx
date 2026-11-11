import Link from "next/link";

const styles = {
  primary: "bg-coral text-white shadow-lg shadow-coral/30",
  dark: "bg-ink text-white",
  outline: "border-[1.5px] border-ink/20 text-ink hover:border-coral hover:text-coral",
  light: "bg-white text-ink",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof styles;
};

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold transition hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}