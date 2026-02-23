'use client';

import Link from 'next/link';
import { StatusBadge } from './StatusBadge';
import { trackEvent } from '@/lib/mixpanel';

type Status = 'live' | 'beta' | 'concept' | 'retired' | 'archived';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  status: Status;
  href: string;
  lastUpdated?: string;
  impact?: string[];
}

export function ProductCard({
  id,
  title,
  description,
  status,
  href,
  lastUpdated,
  impact,
}: ProductCardProps) {
  return (
    <article className="group flex flex-col border border-[var(--neutral-300)] bg-[var(--neutral-200)] transition-colors card-hover">
      <div className="flex items-center justify-between border-b border-[var(--neutral-300)] px-4 py-3">
        <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]">
          {id}
        </span>
        <StatusBadge status={status} />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="text-body-small text-[var(--neutral-500)]">
          {description}
        </p>
        {impact && impact.length > 0 && (
          <ul className="mt-3 space-y-1.5 border-t border-[var(--neutral-300)] pt-3">
            {impact.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--color-accent)]"
              >
                <span className="mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-[var(--neutral-300)] px-4 py-3">
        {lastUpdated && (
          <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]">
            Updated {lastUpdated}
          </span>
        )}
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1 font-[family-name:var(--font-ibm-plex-mono)] text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
          onClick={() =>
            trackEvent('click_product', {
              id,
              title,
              url: href,
            })
          }
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
