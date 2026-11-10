import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { pillars } from "@/lib/services";

const company = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

// The year is cached at build time ("use cache"), so it refreshes on each deploy.
async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getYear();

  return (
    <footer className="pb-9 pt-4 text-[0.94rem]">
      <div className="container-page">
        <div className="grid gap-10 border-b-[1.5px] border-line pb-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-muted">
              Websites, custom software, hosting, bulk messaging and IoT for growing businesses. Engineered in Nairobi.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold">Services</h2>
            <ul className="space-y-2.5 text-muted">
              {pillars.flatMap((p) =>
                p.services.map((s) => (
                  <li key={s.name}>
                    <Link href={`/services/${p.slug}`} className="hover:text-coral">
                      {s.name}
                    </Link>
                  </li>
                )),
              )}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold">Company</h2>
            <ul className="space-y-2.5 text-muted">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="hover:text-coral">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold">Get in touch</h2>
            <ul className="space-y-2.5 text-muted">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-coral">
                  {site.email}
                </a>
              </li>
              <li>{site.phone}</li>
              <li>{site.location}</li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 pt-6 text-sm text-muted">
          <span>© {year} {site.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
