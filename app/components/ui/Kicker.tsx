type KickerProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export default function Kicker({ children, dark = false }: KickerProps) {
  return (
    <span
      className={`mb-3.5 inline-flex items-center gap-2.5 text-[0.82rem] font-bold uppercase tracking-[0.14em] ${
        dark ? "text-sun" : "text-coral"
      }`}
    >
      <span className="h-[11px] w-[22px] rounded-t-full bg-brand-gradient" />
      {children}
    </span>
  );
}