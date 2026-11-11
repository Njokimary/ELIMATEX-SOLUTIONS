import type { Metadata } from "next";
import Image from "next/image";
import Button, { Arrow } from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Process from "@/components/home/Process";
import CtaBanner from "@/components/ui/CtaBanner";
import { pillars } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, custom web apps, web hosting, bulk email & SMS, technology consulting and IoT solutions for Kenyan businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Our services"
        title={
          <>
            Everything your business needs, <span className="text-brand-gradient">under one roof.</span>
          </>
        }
        intro="Eight services, organised into four pillars. Start with one or bring us the whole stack — we make sure it all works together and stays working."
      >
        <Button href="/contact">
          Get a free consultation <Arrow />
        </Button>
      </PageHeader>

      <div className="container-page space-y-8 pb-8">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.slug}>
            <section
              id={pillar.slug}
              className="grid overflow-hidden rounded-[32px] border-[1.5px] border-line bg-white lg:grid-cols-2"
            >
              <div className={`relative min-h-72 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={pillar.illustration} alt={pillar.illustrationAlt} fill unoptimized className="object-cover" />
              </div>
              <div className="p-7 md:p-12">
                <span className="text-sm font-bold text-coral">
                  {pillar.number} / {pillar.tab}
                </span>
                <h2 className="mb-3 mt-2 text-3xl font-extrabold md:text-4xl">{pillar.title}</h2>
                <p className="text-muted">{pillar.description}</p>

                <div className="my-8 grid gap-5 sm:grid-cols-2">
                  {pillar.services.map((s) => (
                    <div key={s.name}>
                      <span
                        aria-hidden
                        className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient font-extrabold text-white"
                      >
                        {s.code}
                      </span>
                      <h3 className="font-bold">{s.name}</h3>
                      <p className="mt-1 text-[0.92rem] text-muted">{s.summary}</p>
                    </div>
                  ))}
                </div>

                <Button href={`/services/${pillar.slug}`} variant="dark">
                  Explore {pillar.tab} <Arrow />
                </Button>
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      <Process />
      <div className="pt-24 md:pt-28">
        <CtaBanner title="Not sure where to start?" text="Book a free 30-minute consultation. We'll listen, then recommend the simplest path to what you need." />
      </div>
    </>
  );
}
