import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border-[1.5px] border-line bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10"
    >
      <div className={`relative ${featured ? "min-h-80 flex-1" : "aspect-[16/10]"}`}>
        <Image src={project.image} alt={project.imageAlt} fill unoptimized className="object-cover" />
        {project.sample && (
          <span className="absolute left-4 top-4 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-bold text-coral">
            Sample project
          </span>
        )}
      </div>
      <div className="px-7 pb-7 pt-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-lilac px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-ink-3"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-1.5 text-xl font-bold">{project.title}</h3>
        <p className="text-[0.95rem] text-muted">{project.summary}</p>
        <span className="mt-4 inline-block font-bold text-coral">
          Read case study <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
