'use client';

import { useEffect } from 'react';
import { initMixpanel, trackEvent } from '@/lib/mixpanel';

export function MixpanelProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initMixpanel();

    const referrer = document.referrer;
    if (referrer) {
      trackEvent('visit', {
        referrer,
        referrer_domain: new URL(referrer).hostname,
      });
    } else {
      trackEvent('visit', {
        referrer: 'direct',
        referrer_domain: 'direct',
      });
    }
  }, []);

  return <>{children}</>;
}
