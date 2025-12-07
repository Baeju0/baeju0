'use client';

import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
}

function getSnapshot() {
  const now = new Date();
  return now.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

function getServerSnapshot() {
  return '--:--:--';
}

export function LiveClock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]">
      {time}
    </span>
  );
}
