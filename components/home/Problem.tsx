import Image from "next/image";
import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal";

const usual = [
  "Generic template websites",
  "No support after launch",
  "Hosting & email from strangers",
  "Messaging through yet another vendor",
];

const ours = [
  "A site designed to convert",
  "Ongoing care and updates",
  "Managed hosting, SSL & email",
  "SMS & email built right in",
];

export default function Problem() {
  return (
    <section className="py-24 md:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="relative aspect-[16/11] overflow-hidden rounded-3xl lg:aspect-[4/5]">
            <Image
              src="/illustrations/one-partner.svg"
              alt="Elimatex at the centre, connecting website, hosting, email, SMS, IoT and support"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Kicker>The problem we solve</Kicker>
          <h2 className="text-4xl font-extrabold md:text-5xl">Most businesses get a website. Few get a partner.</h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            A template site, a hosting company that never picks up, and a separate SMS vendor — it adds up to wasted
            money and missed customers. We bring it all under one roof.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-sand p-6">
              <h3 className="mb-3 font-bold text-muted">What businesses usually get</h3>
              <ul>
                {usual.map((item) => (
                  <li key={item} className="flex gap-2.5 border-t border-ink/10 py-2.5 text-[0.95rem]">
                    <span aria-hidden className="font-extrabold text-[#B07B6A]">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-ink p-6 text-white">
              <h3 className="mb-3 font-bold">What Elimatex delivers</h3>
              <ul>
                {ours.map((item) => (
                  <li key={item} className="flex gap-2.5 border-t border-white/10 py-2.5 text-[0.95rem]">
                    <span aria-hidden className="font-extrabold text-sun">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
