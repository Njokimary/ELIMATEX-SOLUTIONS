import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/ui/CtaBanner";
import ProjectCard from "@/components/work/ProjectCard";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="pb-14 pt-12 md:pt-16">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm font-semibold text-muted">
            <Link href="/work" className="hover:text-coral">
              Our Work
            </Link>{" "}
            / <span className="text-ink">{project.client}</span>
          </nav>

          {project.sample && (
            <p className="mb-6 w-fit rounded-xl bg-[#FFE9E2] px-4 py-2 text-sm font-bold text-coral">
              Sample case study — replace with a real project in lib/projects.ts
            </p>
          )}

          <Kicker>{project.industry}</Kicker>
          <h1 className="max-w-4xl text-[2.4rem] font-extrabold sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{project.summary}</p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-bold text-coral hover:underline"
            >
              Visit live site ↗
            </a>
          )}

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border-[1.5px] border-line bg-white p-5">
              <dt className="text-sm font-semibold text-muted">Client</dt>
              <dd className="mt-1 font-bold">{project.client}</dd>
            </div>
            <div className="rounded-2xl border-[1.5px] border-line bg-white p-5">
              <dt className="text-sm font-semibold text-muted">Services</dt>
              <dd className="mt-1 font-bold">{project.tags.join(" · ")}</dd>
            </div>
            <div className="rounded-2xl border-[1.5px] border-line bg-white p-5">
              <dt className="text-sm font-semibold text-muted">Built with</dt>
              <dd className="mt-1 font-bold">{project.stack.slice(0, 3).join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="container-page">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] md:aspect-[21/9]">
          <Image src={project.image} alt={project.imageAlt} fill priority unoptimized className="object-cover" />
        </div>
      </div>

      <section className="py-24 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <Kicker>The challenge</Kicker>
          <p className="text-2xl font-bold leading-snug md:text-[1.75rem]">{project.challenge}</p>

          <Kicker>What we built</Kicker>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.solution.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="flex h-full gap-4 rounded-2xl bg-white p-5">
                  <span className="text-brand-gradient text-2xl font-extrabold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </div>
              </Reveal>
            ))}
          </div>

          <Kicker>The results</Kicker>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.results.map((r) => (
              <div key={r} className="rounded-2xl bg-ink p-6 font-bold text-white">
                <span aria-hidden className="mb-3 block text-sun">
                  ✓
                </span>
                {r}
              </div>
            ))}
          </div>

          <Kicker>Technology</Kicker>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((t) => (
              <span key={t} className="rounded-xl border-[1.5px] border-line bg-white px-4 py-2 font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="container-page">
          <h2 className="mb-8 text-2xl font-extrabold">More projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {more.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Want results like these?" />
    </>
  );
}
