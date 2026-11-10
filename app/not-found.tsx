import Button, { Arrow } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-28 text-center md:py-36">
      <div className="container-page">
        <div aria-hidden className="mx-auto mb-8 h-20 w-40 rounded-t-full bg-brand-gradient" />
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-coral">Error 404</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">This page has set.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to daylight.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <Button href="/">
            Back to home <Arrow />
          </Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
