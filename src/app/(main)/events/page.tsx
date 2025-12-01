
import Image from 'next/image';
import { Calendar, MapPin, ArrowRight, Star } from 'lucide-react';
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
import { Badge } from '@/components/ui/badge';

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

const pastEvents = [
  {
    title: 'Web 3.0 Conference 2023',
    date: 'August 12, 2023',
    location: 'Austin, TX',
    description: 'An in-depth look at the decentralized web and its future potential.',
    image: PlaceHolderImages.find((img) => img.id === 'service-1')
  },
  {
    title: 'Cybersecurity Workshop',
    date: 'June 5, 2023',
    location: 'Virtual',
    description: 'A hands-on workshop covering the latest in threat detection and prevention.',
    image: PlaceHolderImages.find((img) => img.id === 'service-2')
  },
  {
    title: 'AI in Healthcare Symposium',
    date: 'March 22, 2023',
    location: 'Boston, MA',
    description: 'Exploring the transformative impact of AI on patient care and medical research.',
    image: PlaceHolderImages.find((img) => img.id === 'service-3')
  }
];


const featuredEvent = events[0];
const otherEvents = events.slice(1);

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      <header className="py-32 md:py-48 bg-black">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Upcoming Events
          </h1>
          <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl mt-4">
            Join us at our events to learn, network, and be inspired.
          </p>
        </div>
      </header>
      <main className="flex-1 bg-background py-12 md:py-24 lg:py-32">
        <div className="container">
          {/* Featured Event Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary text-center mb-8">
                Featured Event
            </h2>
            <Card className="bg-black border-slate-800 text-slate-100 grid md:grid-cols-2 overflow-hidden shadow-2xl shadow-primary/10">
                <div className="relative">
                  {featuredEvent.image && (
                      <Image
                          src={featuredEvent.image.imageUrl}
                          alt={featuredEvent.image.description}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover"
                          data-ai-hint={featuredEvent.image.imageHint}
                      />
                  )}
                  <Badge variant="destructive" className="absolute top-4 left-4 flex items-center gap-1 bg-primary text-primary-foreground border-primary-foreground/50">
                      <Star className="h-4 w-4" />
                      Featured
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                    <CardHeader>
                        <CardTitle className="text-3xl text-white">
                        {featuredEvent.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-300">
                            <Calendar className="h-5 w-5" />
                            <span>{featuredEvent.date}</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <MapPin className="h-5 w-5" />
                            <span>{featuredEvent.location}</span>
                        </div>
                        <p className="text-slate-400 text-lg">{featuredEvent.description}</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="#">
                            Register Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        </Button>
                    </CardFooter>
                </div>
            </Card>
          </section>

          {/* Other Events Section */}
          <section>
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary text-center mb-12">
                More Upcoming Events
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherEvents.map((event) => (
                <Card
                  key={event.title}
                  className="bg-black border-slate-800 text-slate-100 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 flex flex-col"
                >
                  {event.image && (
                     <Image
                        src={event.image.imageUrl}
                        alt={event.image.description}
                        width={600}
                        height={338}
                        className="w-full rounded-t-lg object-cover aspect-video"
                        data-ai-hint={event.image.imageHint}
                    />
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-white">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 p-0 flex-grow">
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
                    <CardFooter className="p-0 mt-6">
                      <Button asChild variant="secondary" className="bg-slate-800 text-slate-100 hover:bg-slate-700 w-full">
                        <Link href="#">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Past Events Section */}
          <section className="mt-16 md:mt-24">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary text-center mb-12">
                Past Events
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <Card
                  key={event.title}
                  className="bg-black border-slate-800 text-slate-100 flex flex-col opacity-75 grayscale"
                >
                  {event.image && (
                     <Image
                        src={event.image.imageUrl}
                        alt={event.image.description}
                        width={600}
                        height={338}
                        className="w-full rounded-t-lg object-cover aspect-video"
                        data-ai-hint={event.image.imageHint}
                    />
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-white">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 p-0 flex-grow">
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
                    <CardFooter className="p-0 mt-6">
                      <Button asChild variant="secondary" className="bg-slate-800 text-slate-100 w-full" disabled>
                        <Link href="#">
                          Archived
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
