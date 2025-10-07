import Image from 'next/image';
import { ArrowRight, BrainCircuit, Cloud, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const services = [
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your applications.',
    icon: <Cloud className="h-10 w-10 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'service-1'),
  },
  {
    title: 'Cyber Security',
    description: 'Protect your digital assets with our advanced threat detection and prevention services.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'service-2'),
  },
  {
    title: 'AI & Machine Learning',
    description: 'Leverage the power of AI to unlock insights and automate processes.',
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'service-3'),
  },
  {
    title: 'Data Analytics',
    description: 'Turn your data into actionable intelligence with our analytics platforms.',
    image: PlaceHolderImages.find((img) => img.id === 'service-4'),
  },
  {
    title: 'Digital Marketing',
    description: 'Expand your reach and engage your audience with data-driven marketing strategies.',
    image: PlaceHolderImages.find((img) => img.id === 'service-5'),
  },
  {
    title: 'UX/UI Design',
    description: 'Create beautiful, intuitive, and user-centric digital experiences.',
    image: PlaceHolderImages.find((img) => img.id === 'service-6'),
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <header className="pt-24 pb-12 bg-background">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Our Services
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
            Delivering excellence and innovation through our comprehensive range
            of professional services.
          </p>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  {service.image && (
                     <Image
                        src={service.image.imageUrl}
                        alt={service.image.description}
                        width={600}
                        height={400}
                        className="w-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={service.image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
