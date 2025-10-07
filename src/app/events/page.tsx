import Image from 'next/image';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const events = [
  {
    title: 'Future of AI Summit',
    date: 'October 26, 2024',
    location: 'Virtual Event',
    description:
      'Join industry leaders to discuss the future of artificial intelligence and its impact on various sectors.',
    image: PlaceHolderImages.find((img) => img.id === 'event-1'),
  },
  {
    title: 'Innovate & Create Hackathon',
    date: 'November 15-17, 2024',
    location: 'Tech Hub, Silicon Valley',
    description:
      'A 48-hour hackathon to build innovative solutions for real-world problems. Prizes and networking opportunities await.',
    image: PlaceHolderImages.find((img) => img.id === 'event-3'),
  },
  {
    title: 'Product Launch: The Next Generation',
    date: 'December 5, 2024',
    location: 'Live Streamed Globally',
    description:
      'Be the first to witness the unveiling of our groundbreaking new product that will redefine the industry.',
    image: PlaceHolderImages.find((img) => img.id === 'event-4'),
  },
  {
    title: 'Global Tech Networking Night',
    date: 'January 20, 2025',
    location: 'Metropolis Convention Center',
    description:
      'An exclusive evening for tech professionals to connect, collaborate, and share ideas over cocktails.',
    image: PlaceHolderImages.find((img) => img.id === 'event-2'),
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      <header className="pt-24 pb-12 bg-background">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Upcoming Events
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
            Join us at our events to learn, network, and be inspired.
          </p>
        </div>
      </header>
      <main className="flex-1 bg-slate-900 py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="relative">
            <div
              className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20"
              aria-hidden="true"
            ></div>
            <div className="space-y-16">
              {events.map((event, index) => (
                <div
                  key={event.title}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="hidden md:flex w-5/12"></div>
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <div className="h-6 w-6 rounded-full bg-primary ring-4 ring-background shadow-md"></div>
                  </div>
                  <div className="w-full md:w-5/12">
                    <Card className="bg-slate-800/50 border-slate-700 text-slate-100 transform transition-transform duration-500 group-hover:scale-105">
                      {event.image && (
                         <Image
                            src={event.image.imageUrl}
                            alt={event.image.description}
                            width={600}
                            height={338}
                            className="w-full rounded-t-lg object-cover"
                            data-ai-hint={event.image.imageHint}
                        />
                      )}
                      <CardHeader>
                        <CardTitle className="text-2xl text-accent">
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <p className="text-slate-400">{event.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="secondary" className="bg-accent/20 text-accent hover:bg-accent/30">
                          <Link href="#">
                            Register Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
