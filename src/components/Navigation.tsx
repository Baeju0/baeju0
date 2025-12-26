import Link from 'next/link';
import { LiveClock } from './LiveClock';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--neutral-300)] bg-[var(--neutral-200)]/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 md:px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight text-[var(--color-primary)]"
        >
          Baeju0{' '}
          <span className="font-normal text-[var(--neutral-500)]">Labs</span>
        </Link>

        <div className="flex items-center gap-6">
          <LiveClock />
          <div className="hidden items-center gap-4 font-[family-name:var(--font-ibm-plex-mono)] text-sm md:flex">
            <Link
              href="#now-shipping"
              className="text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
            >
              Products
            </Link>
            <Link
              href="#values"
              className="text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
            >
              Values
            </Link>
            <Link
              href="#about"
              className="text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
