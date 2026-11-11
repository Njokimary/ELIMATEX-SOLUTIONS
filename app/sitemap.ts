import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { pillars } from "@/lib/services";
import { projects } from "@/lib/projects";

// Generates /sitemap.xml so Google can find every page.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/about", "/contact"];

  return [
    ...pages.map((path) => ({ url: `${site.url}${path}`, priority: path === "" ? 1 : 0.8 })),
    ...pillars.map((p) => ({ url: `${site.url}/services/${p.slug}`, priority: 0.7 })),
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}`, priority: 0.6 })),
  ];
}
