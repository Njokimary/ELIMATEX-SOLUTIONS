import Image from "next/image";

const partners = [
  {
    name: "Premium Farming Feeds",
    logo: "/partners/premium-farming-feeds.png",
  },
  {
    name: "Zerah Ascent",
    logo: "/partners/zerah-ascent.png",
  },
  {
    name: "Uvumbuzi",
    logo: "/partners/uvumbuzi.png",
    href: "https://uvumbuzicn.africa/",
  },
];

export default function Partners() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <p className="text-center font-semibold text-muted">
        Trusted by businesses and organisations across Kenya
      </p>
      <ul className="mt-6 flex flex-wrap justify-center gap-4">
        {partners.map((p) => {
          const card = (
            <>
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-lg object-contain"
              />
              <span className="font-bold text-ink">{p.name}</span>
            </>
          );
          const cls =
            "flex items-center gap-4 rounded-2xl border border-sand bg-white py-3 pl-3 pr-6";
          return (
            <li key={p.name}>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cls} transition hover:border-coral`}
                >
                  {card}
                </a>
              ) : (
                <div className={cls}>{card}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
