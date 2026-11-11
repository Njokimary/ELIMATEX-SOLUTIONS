import Button, { Arrow } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Testimonial() {
  return (
    <section className="pb-24 md:pb-28">
      <div className="container-page">
        <Reveal>
          {/* Draft testimonial — confirm the wording with Premium Farming Feeds before going live */}
          <div className="grid items-center gap-8 rounded-[36px] bg-brand-gradient p-8 text-white md:grid-cols-[1fr_auto] md:p-14">
            <div>
              <p className="text-xl font-bold leading-relaxed md:text-2xl">
                “Elimatex built our online shop and the POS we use at the counter. Farmers from all over Kenya
                can now order from us online, and our in-store sales are faster and easier to track.”
              </p>
              <small className="mt-4 block text-[0.95rem] font-semibold opacity-90">
                Paul Mbua — Founder &amp; CEO, Premium Farming Feeds, Kiambu
              </small>
            </div>
            <Button href="/work/premium-farming-feeds" variant="light">
              See their project <Arrow />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
