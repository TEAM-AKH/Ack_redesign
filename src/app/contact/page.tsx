
import Image from 'next/image';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function ContactPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'contact-hero');

  return (
    <div className="flex flex-col">
      <header className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-black">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Contact Us
          </h1>
          <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl mt-4">
            We&apos;d love to hear from you. Reach out with any questions,
            comments, or partnership inquiries.
          </p>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Input
                    placeholder="First Name"
                    className="focus-visible:ring-primary/50 focus-visible:shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
                  />
                  <Input
                    placeholder="Last Name"
                    className="focus-visible:ring-primary/50 focus-visible:shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="focus-visible:ring-primary/50 focus-visible:shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="focus-visible:ring-primary/50 focus-visible:shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
                />
                <Button type="submit" size="lg" className="w-full">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            <div className="space-y-8 rounded-lg bg-black p-8 text-slate-50 lg:p-12">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Our Address</h4>
                    <p className="text-slate-300">
                      123 Innovation Drive, Tech City, 54321
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email Us</h4>
                    <Link href="mailto:contact@acknowledgementhub.com" className="text-purple-400 hover:underline">
                      contact@acknowledgementhub.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Call Us</h4>
                    <Link href="tel:+1234567890" className="text-purple-400 hover:underline">
                      (123) 456-7890
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
