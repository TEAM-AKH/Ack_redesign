
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
        description: "To empower businesses and individuals through transformative technology, fostering a culture of continuous innovation and growth. We strive to create solutions that are not only powerful but also intuitive and accessible to all.",
        image: PlaceHolderImages.find((img) => img.id === 'service-4')
    },
    {
        icon: <Eye className="h-10 w-10 text-primary" />,
        title: "Our Vision",
        description: "We envision a future where technology seamlessly integrates with daily life, solving complex challenges and unlocking human potential. Our goal is to be at the forefront of this change, building a smarter, more connected world.",
        image: PlaceHolderImages.find((img) => img.id === 'about-vision')
    },
    {
        icon: <Heart className="h-10 w-10 text-primary" />,
        title: "Our Passion",
        description: "Our passion lies in problem-solving and creating elegant, efficient, and impactful solutions. We are driven by the desire to make a difference and contribute to a better technological landscape for everyone.",
        image: PlaceHolderImages.find((img) => img.id === 'feature-products')
    }
];

const storyImage = PlaceHolderImages.find(img => img.id === 'feature-services');

export default function AboutPage() {
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
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                    Our Story
                  </h2>
                  <p className="max-w-prose text-muted-foreground md:text-xl/relaxed">
                    Founded in a small garage in 2018, Acknowledgement Hub started with a simple yet powerful idea: to revolutionize the way we interact with technology. Our founders, a group of passionate engineers and designers, believed that technology should be a seamless extension of human capability, not a barrier.
                  </p>
                  <p className="max-w-prose text-muted-foreground md:text-xl/relaxed">
                    From our humble beginnings, we&apos;ve grown into a global team of innovators, thinkers, and creators. We&apos;ve stayed true to our core mission of building intuitive and powerful solutions that empower people and businesses across the globe. Our journey is one of relentless innovation and a deep-seated commitment to our users.
                  </p>
                </div>
              </div>
              {storyImage && (
                <Image
                  src={storyImage.imageUrl}
                  alt="Our Story"
                  width={800}
                  height={600}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  data-ai-hint={storyImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 text-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Our Values
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide our every decision and define our character.
                </p>
            </div>
             <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="bg-black border-slate-800 flex flex-col items-center text-center p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <div className="mb-4 inline-block rounded-full bg-primary/10 p-4 border-2 border-primary/20">
                    {value.icon}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Meet Our Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The brilliant minds behind our success. We are a collective of passionate individuals committed to excellence.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="group relative text-center">
                  <div className="overflow-hidden rounded-lg">
                    {member.avatar && (
                      <Image
                        src={member.avatar.imageUrl}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={member.avatar.imageHint}
                      />
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <div className="mt-2 flex justify-center space-x-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
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
