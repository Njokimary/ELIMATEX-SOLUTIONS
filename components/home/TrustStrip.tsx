import Image from "next/image";
import Link from "next/link";

// Client logos. Add a client by dropping its logo in /public/clients
// and adding an entry here (only with the client's permission).
const clients = [
  {
    name: "Premium Farming Feeds",
    logo: "/clients/premium-farming-feeds.jpg",
    href: "/work/premium-farming-feeds",
  },
  {
    name: "Zerah Ascent",
    logo: "/clients/zerah-ascent.png",
    href: "/work/zerah-ascent",
  },
  {
    name: "Uvumbuzi Community Network",
    logo: "/clients/uvumbuzi-community-network.jpg",
    href: "https://uvumbuzicn.africa/",
  },
];

export default function TrustStrip() {
  return (
    <div className="container-page">
      <p className="mb-5 text-center text-sm font-semibold text-muted">
        Trusted by businesses and organisations across Kenya
      </p>
      <ul className="flex flex-wrap justify-center gap-4">
        {clients.map((c) => (
          <li key={c.name}>
            <Link
              href={c.href}
              {...(c.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-16 items-center gap-3 rounded-xl border-[1.5px] border-line bg-white py-2 pl-2 pr-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/10"
            >
              <Image
                src={c.logo}
                alt={`${c.name} logo`}
                width={48}
                height={48}
                unoptimized
                className="h-12 w-12 rounded-lg object-cover"
              />
              <span className="text-sm font-bold text-ink">{c.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
