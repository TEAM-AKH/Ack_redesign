import { Logo } from './logo';

export function AnimatedLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-4">
        <div className="absolute -inset-4 animate-pulse rounded-full bg-primary/20 blur-2xl"></div>
        <Logo className="text-2xl" />
        <div className="h-1 w-24 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full animate-pulse bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"></div>
        </div>
      </div>
    </div>
  );
}
