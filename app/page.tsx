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
    </>
  );
}
