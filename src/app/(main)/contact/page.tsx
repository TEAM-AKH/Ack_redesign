'use client'
import { useState } from 'react';
import { Calendar, Clock, Globe, Video, User, Mail, Plus, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

const timeSlots = [
  '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am',
  '12:00pm', '12:30pm', '1:00pm'
];

const ContactCalendar = ({ onSelectTime, selectedDate, onDateChange }: { onSelectTime: (time: string) => void, selectedDate: Date | undefined, onDateChange: (date: Date | undefined) => void }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleMonthChange = (month: Date) => {
    setCurrentMonth(month);
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{format(currentMonth, 'MMMM yyyy')}</h3>
          </div>
          <CalendarComponent
            mode="single"
            selected={selectedDate}
            onSelect={onDateChange}
            month={currentMonth}
            onMonthChange={handleMonthChange}
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
            <h4 className="font-semibold">{selectedDate ? format(selectedDate, 'EEE dd') : 'Select a date'}</h4>
            <div className="flex items-center gap-2 text-sm">
              <Button variant="ghost" size="sm" className="bg-slate-800">12h</Button>
              <Button variant="ghost" size="sm">24h</Button>
            </div>
          </div>
          <div className="space-y-2 h-80 overflow-y-auto">
            {timeSlots.map(time => (
              <Button
                key={time}
                variant="outline"
                className="w-full justify-center bg-slate-800 border-slate-700 hover:bg-primary hover:text-primary-foreground"
                onClick={() => onSelectTime(time)}
                disabled={!selectedDate}
              >
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
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'form' | 'call'>('call');
  const [step, setStep] = useState<'select-time' | 'enter-details' | 'confirmed'>('select-time');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // State for contact form
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // State for booking form
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    notes: ''
  });

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('enter-details');
  };
  
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = 'venubull07ff@gmail.com';
    const subject = 'New Meeting Booking';
    const body = `
      New booking request:
      Name: ${bookingForm.name}
      Email: ${bookingForm.email}
      Date: ${selectedDate ? format(selectedDate, 'PPP') : 'Not selected'}
      Time: ${selectedTime}
      Notes: ${bookingForm.notes}
    `;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStep('confirmed');
    setBookingForm({ name: '', email: '', notes: '' }); // Reset form
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = 'venubull07ff@gmail.com';
    const subject = 'New Contact Form Submission';
    const body = `
      New message from your website:
      Name: ${contactForm.firstName} ${contactForm.lastName}
      Email: ${contactForm.email}
      Message:
      ${contactForm.message}
    `;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast({
        title: "Form submitted",
        description: "Your default email client has been opened to send the message.",
    });
    setContactForm({ firstName: '', lastName: '', email: '', message: '' }); // Reset form
  }

  const handleBack = () => {
    setStep('select-time');
  }

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
                onClick={() => {
                  setActiveTab('call');
                  setStep('select-time'); // Reset booking flow
                  setSelectedTime(null);
                }}
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
              <form onSubmit={handleContactFormSubmit} className="space-y-6 bg-slate-900/50 p-8 rounded-lg">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Input
                    placeholder="First Name"
                    className="bg-slate-800 border-slate-700 focus-visible:ring-primary/50"
                    value={contactForm.firstName}
                    onChange={(e) => setContactForm({...contactForm, firstName: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-slate-800 border-slate-700 focus-visible:ring-primary/50"
                    value={contactForm.lastName}
                    onChange={(e) => setContactForm({...contactForm, lastName: e.target.value})}
                    required
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-slate-800 border-slate-700 focus-visible:ring-primary/50"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-slate-800 border-slate-700 focus-visible:ring-primary/50"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  required
                />
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
            {activeTab === 'call' && (
                <div className='bg-slate-900 border border-slate-800 rounded-2xl p-4'>
                    {step === 'select-time' && (
                        <>
                           <div className='p-4'>
                                <div className='flex items-center gap-4 mb-2'>
                                     <Avatar>
                                        <AvatarFallback>T</AvatarFallback>
                                    </Avatar>
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
                                <ContactCalendar onSelectTime={handleTimeSelect} selectedDate={selectedDate} onDateChange={setSelectedDate} />
                            </div>
                        </>
                    )}
                     {step === 'enter-details' && selectedDate && selectedTime && (
                       <form onSubmit={handleConfirm}>
                        <div className="p-6">
                             <div className="flex items-center gap-4 mb-6">
                                <Avatar>
                                    <AvatarFallback>T</AvatarFallback>
                                </Avatar>
                                <span className='text-muted-foreground'>Team - Global Acknowledgment</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">30 Min Meeting</h2>
                             <div className="space-y-2 text-muted-foreground mb-6">
                                <div className='flex items-center gap-2'>
                                    <Calendar className='w-4 h-4' />
                                    <span>{selectedTime}, {format(selectedDate, 'EEEE, MMMM d, yyyy')}</span>
                                </div>
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

                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Your name *</Label>
                                    <Input id="name" className="bg-slate-800 border-slate-700 mt-1" value={bookingForm.name} onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})} required/>
                                </div>
                                 <div>
                                    <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email address *</Label>
                                    <Input id="email" type="email" className="bg-slate-800 border-slate-700 mt-1" value={bookingForm.email} onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})} required/>
                                </div>
                                <div>
                                    <Label htmlFor="notes" className="text-sm font-medium text-muted-foreground">Additional notes</Label>
                                    <Textarea id="notes" placeholder="Please share anything that will help prepare for our meeting." className="bg-slate-800 border-slate-700 mt-1" value={bookingForm.notes} onChange={(e) => setBookingForm({...bookingForm, notes: e.target.value})}/>
                                </div>
                                <Button variant="ghost" className="w-full justify-start p-0 h-auto hover:bg-transparent text-muted-foreground hover:text-white">
                                    <Plus className="w-4 h-4 mr-2"/> Add guests
                                </Button>
                            </div>
                             <p className="text-xs text-muted-foreground mt-6">
                                By proceeding, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
                            </p>
                            <div className="flex justify-end gap-4 mt-6">
                                <Button variant="outline" onClick={handleBack} className="bg-slate-800 border-slate-700" type="button">Back</Button>
                                <Button type="submit">Confirm</Button>
                            </div>
                        </div>
                        </form>
                    )}
                    {step === 'confirmed' && (
                        <div className="p-12 text-center flex flex-col items-center justify-center h-[400px]">
                            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                            <h2 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h2>
                            <p className="text-muted-foreground mb-4">Your 30-minute meeting is scheduled.</p>
                            <p className="text-muted-foreground text-sm">A confirmation email has been sent to you.</p>
                            <Button variant="outline" onClick={() => setStep('select-time')} className="mt-8 bg-slate-800 border-slate-700">
                                Schedule Another Meeting
                            </Button>
                        </div>
                    )}
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
