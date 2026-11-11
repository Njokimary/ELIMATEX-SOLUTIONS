import Image from "next/image";
import Button, { Arrow } from "@/components/ui/Button";
import Kicker from "@/components/ui/Kicker";

const promises = [
  "One partner, end to end",
  "Built by software engineers",
  "Local, responsive support",
  "M-Pesa & API integrations",
];

type ChipProps = {
  icon: string;
  iconBg: string;
  title: string;
  sub: string;
  className: string;
};

function Chip({ icon, iconBg, title, sub, className }: ChipProps) {
  return (
    <div
      className={`absolute flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm font-bold shadow-xl shadow-ink/15 ${className}`}
    >
      <span aria-hidden className={`grid h-10 w-10 place-items-center rounded-xl ${iconBg}`}>
        {icon}
      </span>
      <div>
        {title}
        <small className="block font-medium text-muted">{sub}</small>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="overflow-hidden pb-20 pt-14 md:pb-24 md:pt-20">
      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Kicker>Software studio · Nairobi</Kicker>
          <h1 className="text-[2.6rem] font-extrabold sm:text-6xl lg:text-[4.2rem]">
            Your business, online and running —{" "}
            <span className="text-brand-gradient">without the tech headaches.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Elimatex designs, builds, hosts and supports the technology your business runs on — from your website to
            custom systems, bulk messaging and smart IoT devices.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href="/contact">
              Start a Project <Arrow />
            </Button>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>

          <ul className="mt-10 grid max-w-lg gap-3 sm:grid-cols-2">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-2.5 font-semibold">
                <span aria-hidden className="grid h-5 w-5 place-items-center rounded-full bg-sun text-[11px] font-black">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute -right-16 -top-12 -z-10 h-32 w-64 rounded-t-full border-[28px] border-b-0 border-sun opacity-90"
          />
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-[32px_32px_200px_32px]">
            <Image
              src="/illustrations/hero.svg"
              alt="A shop's website on a laptop and customer SMS updates on a phone"
              fill
              priority
              unoptimized
              className="object-cover"
            />
          </div>
          <Chip
            className="right-2 top-12 sm:-right-5"
            icon="🌐"
            iconBg="bg-mint"
            title="Site is live"
            sub="Fast, secure, mobile-ready"
          />
          <Chip
            className="bottom-16 left-2 sm:-left-8"
            icon="💬"
            iconBg="bg-butter"
            title="SMS campaign sent"
            sub="Delivery report ready"
          />
        </div>
      </div>
    </section>
  );
}
