
import { HoverEffect } from '@/components/ui/hover-effect';
import { services } from '@/lib/services';

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-background">
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 text-center bg-black text-white">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Our Services
          </h1>
          <p className="mx-auto max-w-[700px] text-slate-300/80 md:text-xl mt-4">
            Delivering excellence and innovation through our comprehensive range
            of professional services.
          </p>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <HoverEffect items={services.map(s => ({...s, link: `/services/${s.slug}`}))} />
        </div>
      </main>
    </div>
  );
}
