import Button, { Arrow } from "./Button";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import { whatsappLink } from "@/lib/site";

type CtaBannerProps = {
  title?: string;
  text?: string;
};

export default function CtaBanner({
  title = "Have an idea? Let's bring it to life.",
  text = "Tell us what you need and we'll come back within one business day with ideas, a timeline and a clear quote.",
}: CtaBannerProps) {
  return (
    <section className="pb-24 md:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-ink px-6 py-16 text-center text-white md:px-16 md:py-20">
            <div
              aria-hidden
              className="absolute bottom-0 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-t-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,159,28,0.55),rgba(255,90,54,0.15)_55%,transparent_70%)]"
            />
            <div className="relative">
              <Kicker dark>Let&apos;s build</Kicker>
              <h2 className="mx-auto max-w-3xl text-4xl font-extrabold md:text-6xl">{title}</h2>
              <p className="mx-auto mb-9 mt-5 max-w-xl text-lg text-muted-dark">{text}</p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <Button href="/contact">
                  Start a Project <Arrow />
                </Button>
                <Button href={whatsappLink()} variant="light" external>
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
