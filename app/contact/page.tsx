import type { Metadata } from "next";
import Kicker from "@/components/ui/Kicker";
import Faq from "@/components/ui/Faq";
import ContactForm from "@/components/contact/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Elimatex Solutions. Tell us what you need and we'll respond within one business day.",
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: "✉" },
  { label: "WhatsApp", value: "Chat with us", href: whatsappLink(), icon: "💬" },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: "☎" },
];

const faqs = [
  {
    q: "How soon will you respond?",
    a: "Within one business day. For urgent issues with a site we host, WhatsApp is fastest.",
  },
  {
    q: "Is the first consultation free?",
    a: "Yes — the first 30-minute call is free. We'll understand your needs and suggest the simplest way forward.",
  },
  {
    q: "Do you work with clients outside Nairobi?",
    a: "Yes. We work with businesses across Kenya and beyond, mostly remotely, with in-person meetings in Nairobi when helpful.",
  },
];

export default function ContactPage() {
  return (
    <section className="pb-24 pt-14 md:pb-28 md:pt-20">
      <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Kicker>Contact us</Kicker>
          <h1 className="text-[2.4rem] font-extrabold sm:text-5xl">
            Let&apos;s talk about <span className="text-brand-gradient">your project.</span>
          </h1>
          <p className="mt-6 text-lg text-muted">
            Tell us what you&apos;re building or what needs fixing. We&apos;ll come back within one business day with
            ideas, a timeline and a clear quote.
          </p>

          <ul className="mt-10 space-y-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.label === "WhatsApp" ? "_blank" : undefined}
                  rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border-[1.5px] border-line bg-white p-4 transition hover:border-coral"
                >
                  <span aria-hidden className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-xl text-white">
                    {c.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-muted">{c.label}</span>
                    <span className="font-bold">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl bg-ink p-6 text-white">
            <p className="font-bold">{site.location}</p>
            <p className="text-muted-dark">{site.hours}</p>
          </div>
        </div>

        <div>
          <ContactForm />
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-extrabold">Before you ask</h2>
            <Faq items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
