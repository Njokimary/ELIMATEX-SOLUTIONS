import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/services";

export default function Process() {
  return (
    <section className="relative mt-24 overflow-hidden bg-ink py-24 text-white md:mt-28 md:py-28">
      <div
        aria-hidden
        className="absolute -right-32 bottom-0 h-64 w-[520px] rounded-t-full border-[60px] border-b-0 border-tangerine/10"
      />

      <div className="container-page relative">
        <Kicker dark>How we work</Kicker>
        <h2 className="text-4xl font-extrabold md:text-5xl">From idea to live in four clear steps.</h2>
        <p className="mt-4 max-w-xl text-lg text-muted-dark">
          No jargon, no disappearing acts. You see progress at every stage and approve before we move on.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="h-full rounded-3xl bg-ink-2 p-7 transition hover:-translate-y-1 hover:bg-ink-3">
                <div className="text-brand-gradient text-[2.6rem] font-extrabold leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2 mt-5 text-xl font-bold">{step.title}</h3>
                <p className="text-[0.94rem] text-muted-dark">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
