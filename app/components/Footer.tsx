import Link from "next/link";
import Logo from "./Logo";

const services = [
  "Website Development",
  "Custom Web Apps",
  "Web Hosting",
  "Bulk Email & SMS",
  "Consulting",
  "IoT Solutions",
];

const company = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="pb-9 pt-20 text-[0.94rem]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 border-b border-sand pb-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-muted">
              Websites, custom software, hosting, bulk messaging and IoT for growing businesses. Engineered in Nairobi.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Services</h4>
            <ul className="space-y-2.5 text-muted">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-coral">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Company</h4>
            <ul className="space-y-2.5 text-muted">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="hover:text-coral">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Get in touch</h4>
            <ul className="space-y-2.5 text-muted">
              <li>hello@elimatex.co.ke</li>
              <li>+254 7XX XXX XXX</li>
              <li>Nairobi, Kenya</li>
              <li>Mon – Fri, 8:00 – 17:00</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 pt-6 text-sm text-muted">
          <span>© 2026 Elimatex Solutions. All rights reserved.</span>
          <span>Privacy Policy · Terms</span>
        </div>
      </div>
    </footer>
  );
}