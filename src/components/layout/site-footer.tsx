import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '../logo';

export function SiteFooter() {
  return (
    <footer className="w-full bg-black text-slate-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Logo className="text-white" />
            <p className="max-w-md text-slate-400">
              Pioneering the future of technology with innovative solutions and
              unparalleled expertise.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-400 hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary">Services</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-primary">Contact</Link></li>
              <li><Link href="/login" className="text-slate-400 hover:text-primary">Admin</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-primary" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Acknowledgement Hub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
