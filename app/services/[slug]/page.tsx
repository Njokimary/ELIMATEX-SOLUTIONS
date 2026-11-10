import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button, { Arrow } from "@/components/ui/Button";
import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal";
import Faq from "@/components/ui/Faq";
import CtaBanner from "@/components/ui/CtaBanner";
import { getPillar, pillars } from "@/lib/services";

// Pre-build one page per pillar at build time: /services/build, /services/host-reach, ...
export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) return {};
  return {
    title: pillar.title,
    description: pillar.description,
  };
}

export default async function PillarPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound(); // unknown slug → 404 page

  const others = pillars.filter((p) => p.slug !== pillar.slug);

  return (
    <>
      {/* Header */}
      <section className="pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm font-semibold text-muted">
            <Link href="/services" className="hover:text-coral">
              Services
            </Link>{" "}
            / <span className="text-ink">{pillar.tab}</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Kicker>
                {pillar.number} · {pillar.tab}
              </Kicker>
              <h1 className="text-[2.4rem] font-extrabold sm:text-5xl lg:text-6xl">{pillar.title}</h1>
              <p className="mt-6 max-w-xl text-lg text-muted">{pillar.description}</p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button href="/contact">
                  {pillar.cta} <Arrow />
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[32px_32px_160px_32px]">
              <Image src={pillar.illustration} alt={pillar.illustrationAlt} fill priority unoptimized className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services in this pillar */}
      <section className="mx-2 rounded-[32px] bg-lilac py-20 sm:mx-4 md:rounded-[48px] md:py-24">
        <div className="container-page">
          <Kicker>What&apos;s included</Kicker>
          <h2 className="mb-12 text-4xl font-extrabold md:text-5xl">How we can help</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {pillar.services.map((s, i) => (
              <Reveal key={s.name} delay={i * 100}>
                <article className="h-full rounded-[28px] bg-white p-8 md:p-10">
                  <span
                    aria-hidden
                    className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-lg font-extrabold text-white"
                  >
                    {s.code}
                  </span>
                  <h3 className="text-2xl font-extrabold">{s.name}</h3>
                  <p className="mb-6 mt-2 text-muted">{s.summary}</p>
                  <ul className="space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-sun text-[11px] font-black"
                        >
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for + FAQs */}
      <section className="py-24 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Kicker>Ideal for</Kicker>
            <h2 className="text-3xl font-extrabold md:text-4xl">Who this is for</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {pillar.idealFor.map((item) => (
                <span key={item} className="rounded-xl bg-ink px-4 py-2.5 font-semibold text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Kicker>Questions</Kicker>
            <h2 className="mb-8 text-3xl font-extrabold md:text-4xl">Frequently asked</h2>
            <Faq items={pillar.faqs} />
          </div>
        </div>
      </section>

      {/* Other pillars */}
      <section className="pb-24 md:pb-28">
        <div className="container-page">
          <h2 className="mb-8 text-2xl font-extrabold">Explore our other services</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="group flex items-center justify-between gap-6 rounded-3xl border-[1.5px] border-line bg-white p-7 transition hover:-translate-y-1 hover:border-coral"
              >
                <div>
                  <span className="text-sm font-bold text-coral">
                    {p.number} / {p.tab}
                  </span>
                  <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
                </div>
                <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
