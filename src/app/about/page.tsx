import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Dr. Evelyn Reed',
    role: 'Founder & CEO',
    avatar: PlaceHolderImages.find((img) => img.id === 'team-1'),
  },
  {
    name: 'Marcus Chen',
    role: 'Chief Technology Officer',
    avatar: PlaceHolderImages.find((img) => img.id === 'team-2'),
  },
  {
    name: 'Alex Rivera',
    role: 'Director of Innovation',
    avatar: PlaceHolderImages.find((img) => img.id === 'team-3'),
  },
  {
    name: 'Jasmine Patel',
    role: 'Lead Product Strategist',
    avatar: PlaceHolderImages.find((img) => img.id === 'team-4'),
  },
];

export default function AboutPage() {
    const missionImage = PlaceHolderImages.find((img) => img.id === 'about-mission');
    const visionImage = PlaceHolderImages.find((img) => img.id === 'about-vision');

  return (
    <div className="flex flex-col">
      <header className="pt-24 pb-12 bg-background">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            About Us
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
            We are a team of innovators, dreamers, and builders dedicated to
            pushing the boundaries of what&apos;s possible.
          </p>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full bg-slate-900 text-slate-50 py-12 md:py-24 lg:py-32">
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center space-y-4">
                {missionImage && (
                    <Image
                        src={missionImage.imageUrl}
                        alt={missionImage.description}
                        width={800}
                        height={600}
                        className="rounded-lg object-cover"
                        data-ai-hint={missionImage.imageHint}
                    />
                )}
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-accent sm:text-4xl">
                  Our Mission
                </h2>
                <p className="text-slate-300 md:text-xl">
                  To empower businesses and individuals through transformative
                  technology, fostering a culture of continuous innovation and
                  growth. We strive to create solutions that are not only
                  powerful but also intuitive and accessible to all.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center space-y-4 lg:order-2">
                {visionImage && (
                     <Image
                        src={visionImage.imageUrl}
                        alt={visionImage.description}
                        width={800}
                        height={600}
                        className="rounded-lg object-cover"
                        data-ai-hint={visionImage.imageHint}
                    />
                )}
            </div>
            <div className="flex flex-col justify-center space-y-4 lg:order-1">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                  Our Vision
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  We envision a future where technology seamlessly integrates
                  with daily life, solving complex challenges and unlocking human
                  potential. Our goal is to be at the forefront of this change,
                  building a smarter, more connected world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet Our Team
                </h2>
                <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The brilliant minds behind our success.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <Card
                  key={member.name}
                  className="text-center bg-slate-800/50 border-slate-700 text-slate-100 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                >
                  <CardHeader>
                    <Avatar className="mx-auto h-24 w-24 border-4 border-primary">
                      {member.avatar && <AvatarImage src={member.avatar.imageUrl} alt={member.name} data-ai-hint={member.avatar.imageHint} />}
                      <AvatarFallback>
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-accent">{member.role}</p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <Link href="#" className="text-slate-400 hover:text-accent">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-slate-400 hover:text-accent">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-slate-400 hover:text-accent">
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
