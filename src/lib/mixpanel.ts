import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = 'b5f5fc202821f6f31f6d34b67ea54191';

const isTrackingEnabled = () => {
  if (typeof window === 'undefined') return false;
  if (window.location.hostname === 'localhost') return false;
  if (localStorage.getItem('mixpanel_opt_out') === 'true') return false;
  return true;
};

export const initMixpanel = () => {
  if (!isTrackingEnabled()) return;

  mixpanel.init(MIXPANEL_TOKEN, {
    track_pageview: true,
    persistence: 'localStorage',
  });
};

export const trackEvent = (eventName: string, properties?: object) => {
  if (!isTrackingEnabled()) return;
  mixpanel.track(eventName, properties);
};

export const trackPageView = (pageName: string) => {
  if (!isTrackingEnabled()) return;
  mixpanel.track_pageview({ page: pageName });
};

export { mixpanel };
