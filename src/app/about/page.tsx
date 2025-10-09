import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Target, Eye, Heart } from 'lucide-react';

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

const values = [
    {
        icon: <Target className="h-10 w-10 text-primary" />,
        title: "Our Mission",
        description: "To empower businesses and individuals through transformative technology, fostering a culture of continuous innovation and growth. We strive to create solutions that are not only powerful but also intuitive and accessible to all."
    },
    {
        icon: <Eye className="h-10 w-10 text-primary" />,
        title: "Our Vision",
        description: "We envision a future where technology seamlessly integrates with daily life, solving complex challenges and unlocking human potential. Our goal is to be at the forefront of this change, building a smarter, more connected world."
    },
    {
        icon: <Heart className="h-10 w-10 text-primary" />,
        title: "Our Passion",
        description: "Our passion lies in problem-solving and creating elegant, efficient, and impactful solutions. We are driven by the desire to make a difference and contribute to a better technological landscape for everyone."
    }
]

export default function AboutPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'about-vision');

  return (
    <div className="flex flex-col bg-background">
      <header className="h-[80vh] flex items-center justify-center text-center bg-black">
        <div className="container">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-gradient">
            We are Acknowledgement Hub
          </h1>
          <p className="mx-auto max-w-[700px] text-slate-300/80 md:text-xl mt-4">
            Innovators, dreamers, and builders dedicated to pushing the boundaries of what&apos;s possible.
          </p>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value) => (
                    <div key={value.title} className="text-center flex flex-col items-center">
                        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                            {value.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-primary">{value.title}</h3>
                        <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Meet Our Team
                </h2>
                <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The brilliant minds behind our success. We are a collective of passionate individuals committed to excellence.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="group relative overflow-hidden rounded-lg text-center">
                   {member.avatar && (
                     <Image
                        src={member.avatar.imageUrl}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={member.avatar.imageHint}
                    />
                   )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                    <div className="mt-4 flex justify-center space-x-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Link href="#" className="text-slate-300 hover:text-accent">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-slate-300 hover:text-accent">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-slate-300 hover:text-accent">
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
