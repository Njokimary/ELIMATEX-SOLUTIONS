import type { Metadata } from "next";
import Image from "next/image";
import Button, { Arrow } from "@/components/ui/Button";
import Kicker from "@/components/ui/Kicker";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Roadmap from "@/components/home/Roadmap";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elimatex Solutions is a Nairobi software company that designs, builds, hosts and supports technology for growing businesses.",
};

const values = [
  {
    title: "Engineered properly",
    text: "We build with the same standards used on large production platforms — tested, secure and maintainable.",
  },
  {
    title: "Plain language",
    text: "No jargon. You always know what we're doing, why, what it costs and when it will be ready.",
  },
  {
    title: "Here after launch",
    text: "Launch is the start, not the end. We host, monitor, update and improve what we build.",
  },
  {
    title: "Built for Kenya",
    text: "M-Pesa, SMS, mobile-first users and real connectivity conditions are designed in from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About Elimatex"
        title={
          <>
            Technology done right, <span className="text-brand-gradient">by people who stay.</span>
          </>
        }
        intro="Elimatex Solutions is a Nairobi software company. We design, build, host and support the technology businesses run on — so owners can focus on their customers, not their tech."
      >
        <Button href="/contact">
          Work with us <Arrow />
        </Button>
      </PageHeader>

      <section className="pb-24 md:pb-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-[32px]">
              <Image
                src="/illustrations/one-partner.svg"
                alt="Elimatex connecting website, hosting, email, SMS, IoT and support"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Kicker>Our story</Kicker>
            <h2 className="text-4xl font-extrabold md:text-5xl">One partner for the whole journey.</h2>
            <div className="mt-6 space-y-4 text-lg text-muted">
              <p>
                Too many businesses end up with a website from one person, hosting from another, an SMS provider
                somewhere else — and nobody to call when something breaks.
              </p>
              <p>
                Elimatex was founded to change that. We bring websites, custom software, hosting, messaging,
                consulting and IoT together under one accountable team, built by engineers who understand both the
                technology and the realities of doing business in Kenya.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-coral">Mission</p>
                <p className="mt-2 font-semibold">Make dependable technology accessible to every growing business.</p>
              </div>
              <div className="rounded-2xl bg-ink p-5 text-white">
                <p className="text-sm font-bold uppercase tracking-wider text-sun">Vision</p>
                <p className="mt-2 font-semibold">The technology partner Kenyan businesses grow with.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-2 mb-24 rounded-[32px] bg-lilac py-20 sm:mx-4 md:mb-28 md:rounded-[48px] md:py-24">
        <div className="container-page">
          <Kicker>What we stand for</Kicker>
          <h2 className="mb-12 text-4xl font-extrabold md:text-5xl">Our values</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-3xl bg-white p-7">
                  <span className="text-brand-gradient text-3xl font-extrabold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mb-2 mt-4 text-xl font-bold">{v.title}</h3>
                  <p className="text-[0.95rem] text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Roadmap />
      <CtaBanner />
    </>
  );
}
