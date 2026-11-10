// Accessible FAQ using native <details>/<summary> — no JavaScript needed.
type FaqProps = {
  items: { q: string; a: string }[];
};

export default function Faq({ items }: FaqProps) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-3xl border-[1.5px] border-line bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5 md:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-lilac text-ink transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
