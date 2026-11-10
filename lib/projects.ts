// ------------------------------------------------------------------
// Case studies. Each project gets its own page at /work/[slug].
// Set `sample: true` on a project to show a "Sample project" badge.
// ------------------------------------------------------------------

export type Project = {
  slug: string;
  sample: boolean;
  title: string;
  client: string;
  industry: string;
  tags: string[];
  summary: string;
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string[];
  results: string[];
  stack: string[];
  /** Optional link to the live product. */
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "premium-farming-feeds",
    sample: false,
    title: "Online store & POS for a livestock feeds supplier",
    client: "Premium Farming Feeds",
    industry: "Agriculture",
    tags: ["E-commerce", "POS", "Web App"],
    summary:
      "An online shop where farmers across Kenya can browse and order feeds, plus a point-of-sale system for walk-in sales at the shop in Kiambu.",
    image: "/illustrations/case-premium-farming-feeds.svg",
    imageAlt: "A livestock feeds online store next to a point-of-sale screen",
    challenge:
      "Farmers outside Kiambu had no easy way to see the full range of feeds and supplies or to order them, and in-store sales and stock were tracked by hand.",
    solution: [
      "Product catalogue covering poultry, dairy, pig, goat, rabbit and dog feeds, as well as animal health products, seeds and equipment",
      "Shopping cart, checkout and a 'My Orders' page so customers can track their orders",
      "Point-of-sale system for fast counter sales in the shop",
      "Customer reviews and WhatsApp, phone and email contact built into the site",
    ],
    results: [
      "Farmers can order online from anywhere in Kenya",
      "Online and in-store sales run on one platform",
      "Faster checkout at the counter",
    ],
    stack: ["Laravel", "Nginx", "Ubuntu VPS"],
    url: "https://premiumfarmingfeeds.com/",
  },
  {
    slug: "zerah-ascent",
    sample: false,
    title: "Coaching & advisory platform with bookings and paid events",
    client: "Zerah Ascent",
    industry: "Coaching & personal development",
    tags: ["Web App", "Bookings", "M-Pesa"],
    summary:
      "A website for a personal-growth and advisory practice: programs, one-on-one session booking, and event registration with M-Pesa payment for paid events.",
    image: "/illustrations/case-zerah-ascent.svg",
    imageAlt: "A coaching website with program cards and an event registration form paid by M-Pesa",
    challenge:
      "The practice needed one professional home for its programs, covering personal growth, financial protection, legacy planning, career skills and faith-based guidance, plus an easy way for people to book sessions and sign up for events.",
    solution: [
      "Program pages explaining each pillar and who it is for",
      "Consultation booking through an embedded calendar, with Google Meet invites sent automatically",
      "Event registration with M-Pesa transaction code capture for paid events",
      "Admin area to manage events and review registrations",
    ],
    results: [
      "Clients book sessions without back-and-forth messages",
      "Event sign-ups and payments collected in one place",
      "A clear, credible online presence for the brand",
    ],
    stack: ["React", "Vite", "Supabase", "Calendly", "Vercel"],
    url: "https://zerah-ascent.vercel.app/",
  },
  {
    slug: "booking-portal",
    sample: false,
    title: "Online booking portal with M-Pesa checkout",
    client: "Wellness spa",
    industry: "Health & wellness",
    tags: ["Web App", "M-Pesa"],
    summary:
      "A booking system that lets customers pick a service and time, pay via M-Pesa and get an SMS confirmation instantly.",
    image: "/illustrations/case-booking-portal.svg",
    imageAlt: "A booking portal with a mobile checkout paying by M-Pesa",
    challenge:
      "Bookings were taken by phone and WhatsApp, leading to double-bookings, no-shows and hours spent confirming payments manually.",
    solution: [
      "Customer booking flow showing live availability per therapist",
      "M-Pesa STK Push checkout with automatic payment confirmation",
      "SMS confirmations and day-before reminders",
      "Admin dashboard for schedules, payments and reports",
    ],
    results: ["Bookings available 24/7", "Payments reconciled automatically", "Fewer no-shows with SMS reminders"],
    stack: ["Next.js", "NestJS", "PostgreSQL", "M-Pesa Daraja", "SMS API"],
  },
  {
    slug: "lodge-website",
    sample: false,
    title: "Responsive website & hosting for a lodge",
    client: "Lakeside lodge",
    industry: "Hospitality",
    tags: ["Website", "Hosting"],
    summary:
      "A fast, mobile-friendly website with room and conference enquiries, managed hosting and professional email.",
    image: "/illustrations/case-lodge-website.svg",
    imageAlt: "A lodge website shown on a laptop and a phone",
    challenge:
      "An outdated site that was slow on phones, hard to update and not showing up on Google for local searches.",
    solution: [
      "New mobile-first design with photo galleries for rooms and venues",
      "Enquiry forms and WhatsApp chat that go straight to reception",
      "On-page SEO and Google Business Profile setup",
      "Managed hosting, SSL and branded email accounts",
    ],
    results: ["Much faster on mobile", "Enquiries arrive directly to the team", "Easier to find on Google"],
    stack: ["Next.js", "Tailwind CSS", "Vercel", "Google Workspace"],
  },
  {
    slug: "warehouse-iot",
    sample: false,
    title: "IoT monitoring for a warehouse",
    client: "Distribution company",
    industry: "Logistics",
    tags: ["IoT", "SMS Alerts"],
    summary:
      "Wireless sensors that track temperature, humidity and door status, with a live dashboard and instant SMS alerts.",
    image: "/illustrations/case-warehouse-iot.svg",
    imageAlt: "An IoT warehouse monitoring dashboard with temperature, humidity and door sensors",
    challenge:
      "Stock was being damaged by heat and humidity, and the team only found out after the fact during manual checks.",
    solution: [
      "Temperature, humidity and door sensors across storage zones",
      "Live web dashboard with history and trends",
      "SMS alerts to the manager when readings go out of range",
      "Monthly reports for compliance and planning",
    ],
    results: ["Problems spotted in minutes, not days", "Less damaged stock", "Clear records for audits"],
    stack: ["ESP32", "MQTT", "Node.js", "PostgreSQL", "SMS API"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
