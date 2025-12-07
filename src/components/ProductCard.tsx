import Link from 'next/link';
import { StatusBadge } from './StatusBadge';

type Status = 'live' | 'beta' | 'concept' | 'retired';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  status: Status;
  href: string;
  lastUpdated?: string;
}

export function ProductCard({
  id,
  title,
  description,
  status,
  href,
  lastUpdated,
}: ProductCardProps) {
  return (
    <article className="group flex flex-col border border-[var(--neutral-300)] bg-[var(--neutral-200)] transition-colors card-hover">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--neutral-300)] px-4 py-3">
        <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]">
          {id}
        </span>
        <StatusBadge status={status} />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="text-body-small text-[var(--neutral-500)]">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[var(--neutral-300)] px-4 py-3">
        {lastUpdated && (
          <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]">
            Updated {lastUpdated}
          </span>
        )}
        <Link
          href={href}
          className="ml-auto inline-flex items-center gap-1 font-[family-name:var(--font-ibm-plex-mono)] text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
        >
          View Product
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
