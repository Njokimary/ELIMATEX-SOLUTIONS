"use client";

import Image from "next/image";
import { useState } from "react";
import Button, { Arrow } from "@/components/ui/Button";
import Kicker from "@/components/ui/Kicker";
import { pillars } from "@/lib/services";

export default function ServiceTabs() {
  // Which tab is open — starts on the first pillar
  const [activeSlug, setActiveSlug] = useState(pillars[0].slug);
  const active = pillars.find((p) => p.slug === activeSlug) ?? pillars[0];

  return (
    <section id="services" className="mx-2 rounded-[32px] bg-lilac py-20 sm:mx-4 md:rounded-[48px] md:py-28">
      <div className="container-page">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-8">
          <div>
            <Kicker>What we do</Kicker>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Three pillars. Everything your business needs.
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted">
            Start with one service or bring us the whole stack — we&apos;ll make sure it all works together.
          </p>
        </div>

        <div role="tablist" aria-label="Service pillars" className="mb-7 flex flex-wrap gap-2.5">
          {pillars.map((p) => {
            const selected = p.slug === activeSlug;
            return (
              <button
                key={p.slug}
                type="button"
                role="tab"
                id={`tab-${p.slug}`}
                aria-selected={selected}
                aria-controls={`panel-${p.slug}`}
                onClick={() => setActiveSlug(p.slug)}
                className={`rounded-full px-5 py-3 text-[0.93rem] font-bold transition ${
                  selected ? "bg-ink text-white" : "bg-white text-muted hover:text-ink"
                }`}
              >
                {p.tab}
              </button>
            );
          })}
        </div>

        {/* key={active.slug} makes React re-mount the panel so the fade animation replays */}
        <div
          key={active.slug}
          role="tabpanel"
          id={`panel-${active.slug}`}
          aria-labelledby={`tab-${active.slug}`}
          className="animate-fade-up grid overflow-hidden rounded-[32px] bg-white lg:grid-cols-2"
        >
          <div className="p-7 md:p-12">
            <span className="text-sm font-bold text-coral">
              {active.number} / {active.tab}
            </span>
            <h3 className="mb-3 mt-2 text-3xl font-extrabold">{active.title}</h3>
            <p className="text-muted">{active.intro}</p>

            <div className="my-8 grid gap-3.5">
              {active.services.map((s) => (
                <div key={s.name} className="flex gap-3.5 rounded-2xl bg-cream p-4">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-brand-gradient font-extrabold text-white"
                  >
                    {s.code}
                  </span>
                  <p>
                    <b className="block">{s.name}</b>
                    <span className="text-[0.92rem] text-muted">{s.summary}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={`/services/${active.slug}`} variant="dark">
                Learn more <Arrow />
              </Button>
              <Button href="/contact" variant="outline">
                {active.cta}
              </Button>
            </div>
          </div>

          <div className="relative min-h-72 lg:min-h-full">
            <Image src={active.illustration} alt={active.illustrationAlt} fill unoptimized className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
