// ------------------------------------------------------------------
// Site-wide settings. Update your real contact details here once —
// they are used in the navbar, footer, contact page and SEO.
// ------------------------------------------------------------------

export const site = {
  name: "Elimatex Solutions",
  shortName: "elimatex",
  url: "https://elimatex.co.ke", // ← change to your live domain
  tagline: "Websites, software, hosting, bulk SMS & email and IoT for Kenyan businesses.",
  description:
    "Elimatex Solutions designs, builds, hosts and supports the technology businesses run on — websites, custom web apps, hosting, bulk SMS & email, technology consulting and IoT. Based in Nairobi, Kenya.",
  email: "marynjoki738@gmail.com", // temporary — switch to hello@elimatex.co.ke once domain email is set up
  phone: "+254 741 243 693", // display format
  whatsapp: "254741243693", // digits only, country code first
  location: "Nairobi, Kenya",
  hours: "Mon – Fri, 8:00 – 17:00",
  social: {
    linkedin: "https://www.linkedin.com/", // ← your company pages
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    x: "https://x.com/",
  },
  founder: {
    name: "Mary Njoki",
    role: "Founder & Lead Engineer",
    photo: "/illustrations/founder-placeholder.svg", // ← replace with /images/founder.jpg
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const whatsappLink = (message = "Hi Elimatex, I'd like to talk about a project.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
