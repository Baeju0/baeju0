'use client';

import { trackEvent } from '@/lib/mixpanel';

interface SocialLinkProps {
  href: string;
  platform: 'Threads' | 'GitHub' | 'Email';
  className?: string;
  children: React.ReactNode;
}

export function SocialLink({
  href,
  platform,
  className,
  children,
}: SocialLinkProps) {
  const handleClick = () => {
    trackEvent(`click_${platform.toLowerCase()}`, {
      url: href,
    });
  };

  return (
    <a
      href={href}
      target={platform === 'Email' ? undefined : '_blank'}
      rel={platform === 'Email' ? undefined : 'noopener noreferrer'}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
