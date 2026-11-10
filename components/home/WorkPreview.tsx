import Button, { Arrow } from "@/components/ui/Button";
import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/lib/projects";

export default function WorkPreview() {
  return (
    <section className="py-24 md:py-28">
      <div className="container-page">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>Selected work</Kicker>
            <h2 className="text-4xl font-extrabold md:text-5xl">Built for real businesses.</h2>
          </div>
          <Button href="/work" variant="outline">
            View all projects <Arrow />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
