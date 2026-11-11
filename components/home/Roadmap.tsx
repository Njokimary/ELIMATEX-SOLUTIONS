import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal";

const roadmap = [
  { live: true, title: "Websites & Custom Apps", text: "Company sites, e-commerce, portals and business systems." },
  { live: true, title: "Hosting, Email & SMS", text: "Managed hosting, business email and bulk messaging." },
  { live: true, title: "Consulting & IoT", text: "Technology advice and connected-device solutions." },
  { live: false, title: "Client Portal & AI", text: "Self-service billing, SMS credits and AI chat assistants for your website." },
];

export default function Roadmap() {
  return (
    <section className="pb-24 md:pb-28">
      <div className="container-page">
        <Kicker>Where we&apos;re going</Kicker>
        <h2 className="text-4xl font-extrabold md:text-5xl">Growing with our clients.</h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          We start with the essentials and keep adding the tools Kenyan businesses ask us for.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div
                className={`flex h-full flex-col rounded-3xl p-7 ${
                  item.live ? "border-[1.5px] border-line bg-white" : "bg-ink text-white"
                }`}
              >
                <span
                  className={`self-start rounded-full px-3 py-1 text-xs font-extrabold tracking-wide ${
                    item.live ? "bg-mint text-mint-ink" : "bg-butter text-[#8A6400]"
                  }`}
                >
                  {item.live ? "● Live now" : "◐ Coming soon"}
                </span>
                <h3 className="mb-2 mt-4 text-lg font-bold">{item.title}</h3>
                <p className={`text-[0.93rem] ${item.live ? "text-muted" : "text-muted-dark"}`}>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
