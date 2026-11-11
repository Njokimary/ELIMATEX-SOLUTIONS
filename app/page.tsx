<<<<<<< HEAD
import Button from "@/app/components/ui/Button";
import Partners from "@/app/components/home/Partners";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-coral">
          Software studio · Nairobi
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold md:text-7xl">
          Your business, online and running —{" "}
          <span className="text-brand-gradient">
            without the tech headaches.
          </span>
        </h1>
        <div className="mt-10">
          <Button href="/contact">Start a Project →</Button>
        </div>
      </main>
      <Partners />
=======
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Problem from "@/components/home/Problem";
import ServiceTabs from "@/components/home/ServiceTabs";
import Process from "@/components/home/Process";
import WorkPreview from "@/components/home/WorkPreview";
import Testimonial from "@/components/home/Testimonial";
import Roadmap from "@/components/home/Roadmap";
import CtaBanner from "@/components/ui/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <ServiceTabs />
      <Process />
      <WorkPreview />
      <Testimonial />
      <Roadmap />
      <CtaBanner />
>>>>>>> 9e8fc93eba2a1a38255ed51cceaebc3ceb8e1639
    </>
  );
}
