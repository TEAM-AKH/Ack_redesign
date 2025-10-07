import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  isDarkMode?: boolean;
};

const LogoIcon = ({ isDarkMode, ...props }: { isDarkMode?: boolean; [key: string]: any }) => {
    const primaryColor = isDarkMode ? '#C084FC' : '#6119aa';
    const secondaryColor = isDarkMode ? '#A855F7' : '#9333EA';
    const tertiaryColor = isDarkMode ? '#E9D5FF' : '#C084FC';
    const handColor = isDarkMode ? '#111827' : '#F9FAFB';
    const backgroundColor = isDarkMode ? '#111827' : '#F9FAFB';

    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        >
        <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: tertiaryColor, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: primaryColor, stopOpacity: 1 }} />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="url(#grad1)" />
        <circle cx="50" cy="50" r="42" fill={backgroundColor} stroke={primaryColor} strokeWidth="1" />
        <circle cx="50" cy="50" r="36" fill="transparent" stroke={secondaryColor} strokeWidth="1.5" />
        
        {/* Central Handshake Icon */}
        <circle cx="50" cy="50" r="18" fill={secondaryColor} />
        <g transform="translate(37, 37) scale(0.26)">
            <path
            fill={handColor}
            d="M23.6,46.3c-2.4,0-4.7,0.5-6.9,1.4c-0.6,0.2-1.3-0.1-1.5-0.7s0.1-1.3,0.7-1.5c2.4-1,5-1.5,7.7-1.5c2.4,0,4.7,0.5,6.9,1.4c0.6,0.2,1.3-0.1,1.5-0.7s-0.1-1.3-0.7-1.5c-2.4-1-5-1.5-7.7-1.5Z"
            />
            <path
            fill={handColor}
            d="M62.4,32.2c-0.6-0.2-1.3,0.1-1.5,0.7s0.1,1.3,0.7,1.5c4.7,2,7.8,6.8,7.8,12.2c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3C72,39.4,68.2,33.9,62.4,32.2Z"
            />
            <path
            fill={handColor}
            d="M37.6,32.2c-5.8,1.7-9.6,7.2-9.6,13.4c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3c0-5.4,3.1-10.2,7.8-12.2c0.6-0.2,0.9-0.9,0.7-1.5S38.2,32,37.6,32.2Z"
            />
            <path
            fill={handColor}
            d="M87.3,47.8c-1.1-2.9-2.7-5.5-4.7-7.9c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8c1.8,2.1,3.3,4.5,4.3,7.1c0.3,0.6,0.9,1,1.5,1h0.2c0.7,0,1.3-0.6,1.3-1.3C88.1,48.2,87.8,48,87.3,47.8Z"
            />
            <path
            fill={handColor}
            d="M12.7,47.8c-0.5,0.2-0.8,0.5-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3h0.2c0.7,0,1.3-0.4,1.5-1c1-2.6,2.5-5,4.3-7.1c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0C15.4,42.3,13.8,44.9,12.7,47.8Z"
            />
        </g>

        {/* Outer circles */}
        {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * 2 * Math.PI;
            const cx = 50 + 27 * Math.cos(angle);
            const cy = 50 + 27 * Math.sin(angle);
            return (
            <circle key={i} cx={cx} cy={cy} r="6" fill={secondaryColor} stroke={isDarkMode ? '#D1D5DB' : 'white'} strokeWidth="1" />
            );
        })}
        </svg>
    );
};

export function Logo({ className, isDarkMode }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-xl font-bold',
        isDarkMode ? 'text-white' : 'text-foreground',
        className
      )}
    >
      <LogoIcon isDarkMode={isDarkMode} className="h-8 w-8" />
      <span>Acknowledgement Hub</span>
    </Link>
  );
}
