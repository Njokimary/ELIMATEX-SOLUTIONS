// ------------------------------------------------------------------
// The three service pillars. Each pillar gets its own page at
// /services/[slug] automatically — add or edit content here.
// ------------------------------------------------------------------

export type Service = {
  code: string; // letter shown in the gradient badge
  name: string;
  summary: string;
  features: string[];
};

export type Pillar = {
  slug: string;
  number: string;
  tab: string;
  title: string;
  intro: string;
  description: string;
  illustration: string;
  illustrationAlt: string;
  cta: string;
  services: Service[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
};

export const pillars: Pillar[] = [
  {
    slug: "build",
    number: "01",
    tab: "Build",
    title: "Websites & custom software",
    intro: "From a polished company website to the system your team runs on every day.",
    description:
      "We design and engineer fast, secure websites and web applications around how your business actually works — with M-Pesa, SMS and the tools you already use built in.",
    illustration: "/illustrations/build.svg",
    illustrationAlt: "A custom e-commerce website in a browser with a code editor alongside",
    cta: "Discuss your build",
    services: [
      {
        code: "W",
        name: "Website Development",
        summary: "Responsive, fast and SEO-ready sites that turn visitors into customers.",
        features: [
          "Mobile-first, custom design — no generic templates",
          "On-page SEO and Google Business setup",
          "Contact forms, WhatsApp chat and maps",
          "Content you can update yourself",
        ],
      },
      {
        code: "C",
        name: "Custom Websites & Web Apps",
        summary: "Portals, booking systems and dashboards built around your workflow.",
        features: [
          "Customer portals, booking and ordering systems",
          "M-Pesa (Daraja) and card payment integration",
          "Role-based logins, admin dashboards and reports",
          "APIs and integrations with your existing tools",
        ],
      },
    ],
    idealFor: ["SMEs getting online", "Shops & e-commerce", "Clinics & schools", "Saccos & membership groups"],
    faqs: [
      {
        q: "How long does a website take?",
        a: "A standard company website usually takes 2–4 weeks from approved content. Custom web apps are scoped together and delivered in phases so you see progress early.",
      },
      {
        q: "Can I update the content myself?",
        a: "Yes. We can set up an easy editing area for news, products or team updates, and we train you on it at launch.",
      },
      {
        q: "Do you integrate M-Pesa?",
        a: "Yes — STK Push, Paybill and Till payments through Safaricom's Daraja API, with confirmations and receipts.",
      },
    ],
  },
  {
    slug: "host-reach",
    number: "02",
    tab: "Host & Reach",
    title: "Hosting, bulk email & SMS",
    intro: "Keep your business online and your customers in the loop.",
    description:
      "Reliable managed hosting, domains and professional email, plus bulk SMS and email campaigns that reach your customers instantly — all with one point of contact.",
    illustration: "/illustrations/host-reach.svg",
    illustrationAlt: "A hosting server marked online and a phone receiving bulk SMS messages",
    cta: "Get set up",
    services: [
      {
        code: "H",
        name: "Web Hosting",
        summary: "Managed hosting, domains, SSL, backups and professional email.",
        features: [
          ".co.ke and .com domain registration",
          "Free SSL certificate and daily backups",
          "Professional email (you@yourbusiness.co.ke)",
          "Uptime monitoring and updates handled for you",
        ],
      },
      {
        code: "M",
        name: "Bulk Email & SMS",
        summary: "Promotions, reminders, OTPs and alerts — with delivery reports.",
        features: [
          "Branded sender ID for SMS",
          "Contact lists, personalisation and scheduling",
          "Transactional SMS & OTPs via API",
          "Delivery reports so you know what landed",
        ],
      },
    ],
    idealFor: ["Retail & promotions", "Saccos & chamas", "Schools & churches", "Clinics & pharmacies"],
    faqs: [
      {
        q: "Can you move my existing website and email?",
        a: "Yes. We migrate your site, email and domain with minimal downtime and handle the technical setup.",
      },
      {
        q: "How are SMS credits charged?",
        a: "You buy credits in bundles and only pay for what you send. We'll recommend a bundle based on your list size and campaign plans.",
      },
      {
        q: "Can SMS be sent automatically from my system?",
        a: "Yes — order updates, reminders and OTPs can be triggered automatically from your website or app through our API integration.",
      },
    ],
  },
  {
    slug: "advise-connect",
    number: "03",
    tab: "Advise & Connect",
    title: "Consulting & IoT solutions",
    intro: "Clear direction on your technology, and smart devices that work for you.",
    description:
      "Practical technology advice you can act on, and connected sensors that monitor, automate and alert — from farms and cold rooms to warehouses and offices.",
    illustration: "/illustrations/advise-connect.svg",
    illustrationAlt: "An IoT sensor on a farm reporting soil moisture and sending an SMS alert",
    cta: "Book a consultation",
    services: [
      {
        code: "T",
        name: "Technology Consulting",
        summary: "System audits, digital strategy and vendor selection you can act on.",
        features: [
          "Technology and website audits",
          "Digital transformation roadmaps",
          "Software and vendor selection",
          "Data protection (Kenya DPA) readiness guidance",
        ],
      },
      {
        code: "I",
        name: "IoT Solutions",
        summary: "Sensors and automation for farms, cold rooms, warehouses and energy.",
        features: [
          "Temperature & humidity monitoring for cold chain",
          "Soil moisture and water-tank level sensing",
          "Asset tracking and door/security sensors",
          "Live dashboards with SMS alerts",
        ],
      },
    ],
    idealFor: ["Agribusiness & farms", "Dairy & cold chain", "Warehouses & logistics", "Growing organisations"],
    faqs: [
      {
        q: "What does a consultation involve?",
        a: "We start with a free 30-minute call to understand your goals, then propose a focused audit or roadmap with clear recommendations and costs.",
      },
      {
        q: "Do IoT systems need constant internet?",
        a: "Devices can work over Wi-Fi or mobile data and store readings during outages, syncing once they reconnect. Critical alerts can go out by SMS.",
      },
      {
        q: "Can you start with a small pilot?",
        a: "Absolutely — we recommend piloting with a few sensors first, proving the value, then scaling up.",
      },
    ],
  },
  {
    slug: "ai-insurance",
    number: "04",
    tab: "AI & Insurance",
    title: "AI integration & insurance solutions",
    intro: "Put AI to work in your business, and run your insurance operations on one system.",
    description:
      "We integrate practical AI into the tools you already use — chat assistants, document processing and smart automation — and build insurance systems that handle quotes, policies, renewals, claims and M-Pesa premium payments.",
    illustration: "/illustrations/ai-insurance.svg",
    illustrationAlt: "An AI chat assistant answering a customer next to an insurance policy renewal dashboard",
    cta: "Talk to us about AI",
    services: [
      {
        code: "A",
        name: "AI Integration for Business",
        summary: "AI assistants and automation built into your website, WhatsApp and systems.",
        features: [
          "AI chat assistants for your website and WhatsApp",
          "Document reading — IDs, invoices, logbooks and forms",
          "Automated reports, summaries and email drafting",
          "AI added to your existing software through APIs",
        ],
      },
      {
        code: "S",
        name: "Insurance Solutions",
        summary: "Systems for agencies and brokers: policies, renewals, claims and payments.",
        features: [
          "Quotes, policy records and client management",
          "Automatic renewal reminders by SMS and email",
          "Claims logging and status tracking",
          "M-Pesa premium payments, commissions and reports",
        ],
      },
    ],
    idealFor: ["Insurance agencies & brokers", "Saccos & microfinance", "Customer service teams", "Growing SMEs"],
    faqs: [
      {
        q: "What can AI realistically do for my business?",
        a: "Most businesses start with an assistant that answers common customer questions, or with automating repetitive paperwork such as reading forms and preparing reports. We begin with one clear use case, measure the time saved, then expand.",
      },
      {
        q: "Is our customer data safe when using AI?",
        a: "We design every integration with the Kenya Data Protection Act in mind — limiting what data the AI sees, keeping records on secure servers and giving you control over what is stored.",
      },
      {
        q: "Can the insurance system work with our existing underwriters?",
        a: "Yes. We build around your current workflow and products, and can import your existing client and policy records so nothing is lost when you switch.",
      },
    ],
  },
];

export const getPillar = (slug: string) => pillars.find((p) => p.slug === slug);

export const allServices = pillars.flatMap((p) =>
  p.services.map((s) => ({ ...s, pillarSlug: p.slug })),
);

export const processSteps = [
  { title: "Discover", text: "We learn your goals, customers and constraints, then agree on scope and budget." },
  { title: "Design", text: "Wireframes and visuals you can click through and approve before any build starts." },
  { title: "Build", text: "Clean, tested code delivered in short cycles with regular check-ins." },
  { title: "Launch & Support", text: "We go live, train your team, then host, monitor and keep improving." },
];
