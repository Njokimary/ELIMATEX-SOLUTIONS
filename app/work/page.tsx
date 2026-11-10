import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/ui/CtaBanner";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Websites, web apps, hosting, messaging and IoT projects built by Elimatex Solutions.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        kicker="Our work"
        title={
          <>
            Built for real businesses, <span className="text-brand-gradient">measured by results.</span>
          </>
        }
        intro="A look at the problems we solve and how we solve them — from booking systems with M-Pesa to IoT monitoring with SMS alerts."
      />

      <section className="pb-24 md:pb-28">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner title="Your project could be next." />
    </>
  );
}
