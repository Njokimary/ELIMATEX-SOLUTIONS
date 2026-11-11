import Kicker from "./Kicker";

// The intro block at the top of inner pages (Services, Work, About, Contact).
type PageHeaderProps = {
  kicker: string;
  title: React.ReactNode;
  intro: string;
  children?: React.ReactNode;
};

export default function PageHeader({ kicker, title, intro, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 md:pb-20 md:pt-24">
      <div
        aria-hidden
        className="absolute -right-24 -top-10 h-40 w-80 rounded-t-full border-[34px] border-b-0 border-sun/70"
      />
      <div className="container-page relative">
        <Kicker>{kicker}</Kicker>
        <h1 className="max-w-4xl text-[2.4rem] font-extrabold sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3.5">{children}</div>}
      </div>
    </section>
  );
}
