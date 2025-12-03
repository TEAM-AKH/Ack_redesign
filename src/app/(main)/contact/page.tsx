
'use client'
import { useState } from 'react';
import { Calendar, Clock, Globe, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const timeSlots = [
  '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am',
  '12:00pm', '12:30pm', '1:00pm'
];

const ContactCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 11, 4));

  return (
    <div className="bg-black text-white p-6 rounded-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">December 2025</h3>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon"><span className="sr-only">Previous month</span>{'<'}</Button>
              <Button variant="ghost" size="icon"><span className="sr-only">Next month</span>{'>'}</Button>
            </div>
          </div>
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            className="p-0"
            classNames={{
              head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
              cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-primary-foreground first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal rounded-md hover:bg-primary/90",
              day_selected: "bg-white text-black hover:bg-white/90 focus:bg-white focus:text-black",
              day_today: "bg-accent text-accent-foreground",
              day_disabled: "text-muted-foreground opacity-50",
            }}
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">Thu 04</h4>
            <div className="flex items-center gap-2 text-sm">
              <Button variant="ghost" size="sm" className="bg-slate-800">12h</Button>
              <Button variant="ghost" size="sm">24h</Button>
            </div>
          </div>
          <div className="space-y-2 h-80 overflow-y-auto">
            {timeSlots.map(time => (
              <Button key={time} variant="outline" className="w-full justify-center bg-slate-800 border-slate-700 hover:bg-primary hover:text-primary-foreground">
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'form' | 'call'>('call');

  return (
    <div className="bg-black text-white min-h-screen p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-6 bg-primary"></div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Ready to start your next project or have a question for our team? We'd love to hear from you! Fill out the
          form below, email us directly, or give us a call our team will get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="flex mb-8 border border-slate-700 rounded-lg p-1 max-w-xs">
              <Button
                onClick={() => setActiveTab('form')}
                className={cn(
                  "flex-1 justify-center",
                  activeTab === 'form' ? 'bg-slate-700 text-white' : 'bg-transparent text-muted-foreground'
                )}
              >
                Fill Form
              </Button>
              <Button
                onClick={() => setActiveTab('call')}
                className={cn(
                  "flex-1 justify-center",
                  activeTab === 'call' ? 'bg-slate-700 text-white' : 'bg-transparent text-muted-foreground'
                )}
              >
                Book A Call
              </Button>
            </div>

            <div className='mb-12'>
                <h2 className="text-4xl font-bold mb-4">Let's talk ideas</h2>
                <p className="text-muted-foreground">
                    Schedule a call to discuss your project or get expert advice from our team.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-4">Address</h3>
                <p className="text-muted-foreground">
                    Global Acknowledgment Hub, Darga road, Near NIT <br/>
                    Warangal, Telangana 506004, INDIA
                </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {activeTab === 'form' && (
              <form className="space-y-6 bg-slate-900/50 p-8 rounded-lg">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Input
                    placeholder="First Name"
                    className="bg-slate-800 border-slate-700 focus-visible:ring-primary/50"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-slate-800 border-slate-700 focus-visible:ring-primary/50"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-slate-800 border-slate-700 focus-visible:ring-primary/50"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-slate-800 border-slate-700 focus-visible:ring-primary/50"
                />
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
            {activeTab === 'call' && (
                <div className='bg-slate-900 border border-slate-800 rounded-2xl p-4'>
                    <div className='p-4'>
                        <div className='flex items-center gap-4 mb-2'>
                            <div className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center'>
                                <span className='font-bold text-lg'>G</span>
                            </div>
                            <span className='text-muted-foreground'>Team - Global Acknowledgment</span>
                        </div>
                        <h2 className='text-3xl font-bold text-white mb-2'>30 Min Meeting</h2>
                        <div className='space-y-2 text-muted-foreground'>
                            <div className='flex items-center gap-2'>
                                <Clock className='w-4 h-4' />
                                <span>30m</span>
                            </div>
                             <div className='flex items-center gap-2'>
                                <Video className='w-4 h-4' />
                                <span>Cal Video</span>
                            </div>
                             <div className='flex items-center gap-2'>
                                <Globe className='w-4 h-4' />
                                <span>Asia/Kolkata</span>
                            </div>
                        </div>
                    </div>
                     <div className="border-t border-slate-800 mt-4 pt-4">
                        <ContactCalendar />
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
