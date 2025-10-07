import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'Quantum Drone',
    description: 'An autonomous drone with AI-powered flight and cinematic capabilities.',
    image: PlaceHolderImages.find((img) => img.id === 'product-1'),
  },
  {
    name: 'HoloWatch',
    description: 'A revolutionary smartwatch featuring a holographic interface and advanced biometrics.',
    image: PlaceHolderImages.find((img) => img.id === 'product-2'),
  },
  {
    name: 'NeuroLink VR',
    description: 'Immersive virtual reality headset with neural feedback for unparalleled realism.',
    image: PlaceHolderImages.find((img) => img.id === 'product-3'),
  },
  {
    name: 'Aura Home Hub',
    description: 'A central smart home hub that learns and adapts to your lifestyle.',
    image: PlaceHolderImages.find((img) => img.id === 'product-4'),
  },
  {
    name: 'Atlas Companion Bot',
    description: 'A personal robotic assistant designed to help with daily tasks and organization.',
    image: PlaceHolderImages.find((img) => img.id === 'product-5'),
  },
  {
    name: 'Volt-X EV',
    description: 'A sleek, all-electric concept car with self-driving technology and a 500-mile range.',
    image: PlaceHolderImages.find((img) => img.id === 'product-6'),
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <header className="pt-24 pb-12 bg-background">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Our Products
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
            Explore our suite of innovative products designed to shape the
            future.
          </p>
        </div>
      </header>

      <main className="flex-1 bg-slate-900 py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.name}
                className="flex flex-col overflow-hidden bg-slate-800/50 border-slate-700 text-slate-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:scale-105"
              >
                 {product.image && (
                    <Image
                        src={product.image.imageUrl}
                        alt={product.image.description}
                        width={600}
                        height={400}
                        className="w-full object-cover aspect-video"
                        data-ai-hint={product.image.imageHint}
                    />
                 )}
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">{product.name}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow"></CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
