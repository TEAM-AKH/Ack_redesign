import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ShieldCheck } from 'lucide-react';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-xl font-bold text-foreground',
        className
      )}
    >
      <ShieldCheck className="h-6 w-6 text-primary" />
      <span>Acknowledgement Hub</span>
    </Link>
  );
}
