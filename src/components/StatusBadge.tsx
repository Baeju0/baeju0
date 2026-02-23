type Status = 'live' | 'beta' | 'concept' | 'retired' | 'archived';

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<
  Status,
  { label: string; color: string; dotClass: string }
> = {
  live: {
    label: 'Live',
    color: 'bg-[var(--color-live)]/10 text-[var(--color-live)]',
    dotClass: 'status-dot-live',
  },
  beta: {
    label: 'Beta',
    color: 'bg-[var(--color-beta)]/10 text-[var(--color-beta)]',
    dotClass: 'bg-[var(--color-beta)]',
  },
  concept: {
    label: 'Concept',
    color: 'bg-[var(--color-concept)]/10 text-[var(--color-concept)]',
    dotClass: 'bg-[var(--color-concept)]',
  },
  retired: {
    label: 'Retired',
    color: 'bg-[var(--color-retired)]/10 text-[var(--color-retired)]',
    dotClass: 'bg-[var(--color-retired)]',
  },
  archived: {
    label: 'Archived',
    color: 'bg-[var(--color-archived)]/10 text-[var(--color-archived)]',
    dotClass: 'bg-[var(--color-archived)]',
  },
};

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 font-[family-name:var(--font-ibm-plex-mono)] text-xs font-medium ${config.color} ${className}`}
    >
      <span className={`status-dot ${config.dotClass}`} />
      {config.label}
    </span>
  );
}
