
'use client'
import { useState } from 'react';
import { Calendar, Clock, Globe, Video, Plus, CheckCircle } from 'lucide-react';
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
              cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-primary first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal rounded-md hover:bg-primary/90 text-white",
              day_selected: "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary focus:text-primary-foreground",
              day_today: "bg-accent text-accent-foreground",
              day_disabled: "text-muted-foreground opacity-50",
            }}
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">{selectedDate ? format(selectedDate, 'EEE dd') : 'Select a date'}</h4>
          </div>
          <div className="space-y-2 h-80 overflow-y-auto">
            {timeSlots.map(time => (
              <Button
                key={time}
                variant="outline"
                className="w-full justify-center text-white border-white/50 bg-transparent hover:bg-white hover:text-black"
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
    <div className="flex flex-col bg-background">
      <header className="py-32 md:py-48 text-center bg-black">
        <div className="container">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-gradient">
            Contact Us
          </h1>
          <p className="mx-auto max-w-[700px] text-slate-300/80 md:text-xl mt-4">
            Ready to start your next project or have a question? We&apos;d love to hear from you.
          </p>
        </div>
      </header>

      <main className="bg-background text-foreground flex flex-col justify-center p-8 md:px-16 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
                <div className="flex justify-center">
                    <div className="flex mb-8 border border-primary rounded-lg p-1 max-w-xs">
                        <Button
                            onClick={() => setActiveTab('form')}
                            className={cn(
                            "flex-1 justify-center",
                            activeTab === 'form' ? 'bg-primary text-primary-foreground' : 'bg-transparent text-foreground'
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
                            activeTab === 'call' ? 'bg-primary text-primary-foreground' : 'bg-transparent text-foreground'
                            )}
                        >
                            Book A Call
                        </Button>
                    </div>
                </div>

                <div className='mb-12 text-center'>
                    <h2 className="text-4xl font-bold mb-4 text-foreground">Let's talk ideas</h2>
                    <p className="text-foreground/80">
                        Schedule a call to discuss your project or get expert advice from our team.
                    </p>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Address</h3>
                    <p className="text-foreground/80">
                        Global Acknowledgment Hub, Darga road, Near NIT <br/>
                        Warangal, Telangana 506004, INDIA
                    </p>
                </div>
            </div>

            {/* Right Column */}
            <div className="lg:min-h-[700px] flex flex-col justify-center">
                {activeTab === 'form' && (
                <form onSubmit={handleContactFormSubmit} className="space-y-6 bg-black border border-primary/20 p-8 rounded-2xl">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Input
                        placeholder="First Name"
                        required
                        className="bg-background text-foreground"
                    />
                    <Input
                        placeholder="Last Name"
                        required
                        className="bg-background text-foreground"
                    />
                    </div>
                    <Input
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-background text-foreground"
                    />
                    <Textarea
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="bg-background text-foreground"
                    />
                    <Button type="submit" size="lg" className="w-full">
                    Send Message
                    </Button>
                </form>
                )}
                {activeTab === 'call' && (
                    <div className='bg-black border border-primary/20 rounded-2xl p-4 text-white'>
                        {step === 'select-time' && (
                            <>
                            <div className='p-4'>
                                    <div className='flex items-center gap-4 mb-2'>
                                        <Avatar>
                                            <AvatarFallback className='bg-primary text-primary-foreground'>T</AvatarFallback>
                                        </Avatar>
                                        <span className='text-slate-300'>Team - Global Acknowledgment</span>
                                    </div>
                                    <h2 className='text-3xl font-bold text-white mb-2'>30 Min Meeting</h2>
                                    <div className='space-y-2 text-slate-300'>
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
                                <div className="border-t border-slate-700 mt-4 pt-4">
                                    <ContactCalendar onSelectTime={handleTimeSelect} selectedDate={selectedDate} onDateChange={setSelectedDate} />
                                </div>
                            </>
                        )}
                        {step === 'enter-details' && selectedDate && selectedTime && (
                        <form onSubmit={handleConfirm}>
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <Avatar>
                                        <AvatarFallback className='bg-primary text-primary-foreground'>T</AvatarFallback>
                                    </Avatar>
                                    <span className='text-slate-300'>Team - Global Acknowledgment</span>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2">30 Min Meeting</h2>
                                <div className="space-y-2 text-slate-300 mb-6">
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
                                        <Label htmlFor="name" className="text-sm font-medium text-white">Your name *</Label>
                                        <Input id="name" value={bookingForm.name} onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})} required className="bg-background text-foreground"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="email" className="text-sm font-medium text-white">Email address *</Label>
                                        <Input id="email" type="email" value={bookingForm.email} onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})} required className="bg-background text-foreground"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="notes" className="text-sm font-medium text-white">Additional notes</Label>
                                        <Textarea id="notes" placeholder="Please share anything that will help prepare for our meeting." value={bookingForm.notes} onChange={(e) => setBookingForm({...bookingForm, notes: e.target.value})} className="bg-background text-foreground"/>
                                    </div>
                                    <Button variant="ghost" className="w-full justify-start p-0 h-auto hover:bg-transparent text-slate-300 hover:text-white">
                                        <Plus className="w-4 h-4 mr-2"/> Add guests
                                    </Button>
                                </div>
                                <p className="text-xs text-slate-400 mt-6">
                                    By proceeding, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
                                </p>
                                <div className="flex justify-end gap-4 mt-6">
                                    <Button variant="outline" onClick={handleBack} type="button" className="text-white border-white/50 bg-transparent hover:bg-white hover:text-black">Back</Button>
                                    <Button type="submit">Confirm</Button>
                                </div>
                            </div>
                            </form>
                        )}
                        {step === 'confirmed' && (
                            <div className="p-12 text-center flex flex-col items-center justify-center h-[400px]">
                                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                <h2 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h2>
                                <p className="text-slate-300 mb-4">Your 30-minute meeting is scheduled.</p>
                                <p className="text-slate-400 text-sm">A confirmation email has been sent to you.</p>
                                <Button variant="outline" onClick={() => setStep('select-time')} className="mt-8 text-white border-white/50 bg-transparent hover:bg-white hover:text-black">
                                    Schedule Another Meeting
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
            </div>
        </div>
      </main>
    </div>
  );
}

    