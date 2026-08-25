import 'server-only';

export type SellPageStats = {
  registeredUsers: number;
  generatedPages: number;
  paidPayments: number;
  asOf: string;
};

const SELL_PAGE_STATS_REVALIDATE_SECONDS = 86400;
const SELL_PAGE_STATS_URL =
  process.env.SELLPAGE_STATS_URL ??
  'https://www.sellpage.life/api/public-stats';

const FALLBACK_SELL_PAGE_STATS: SellPageStats = {
  registeredUsers: 281,
  generatedPages: 422,
  paidPayments: 12,
  asOf: '2026-08-25T08:30:58.000Z',
};

function isNonNegativeInteger(value: unknown): value is number {
  return Number.isSafeInteger(value) && Number(value) >= 0;
}

function isSellPageStats(value: unknown): value is SellPageStats {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const stats = value as Partial<SellPageStats>;

  return (
    isNonNegativeInteger(stats.registeredUsers) &&
    isNonNegativeInteger(stats.generatedPages) &&
    isNonNegativeInteger(stats.paidPayments) &&
    typeof stats.asOf === 'string' &&
    !Number.isNaN(Date.parse(stats.asOf))
  );
}

export async function getSellPageStats(): Promise<SellPageStats> {
  try {
    const response = await fetch(SELL_PAGE_STATS_URL, {
      next: { revalidate: SELL_PAGE_STATS_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`SellPage stats request failed: ${response.status}`);
    }

    const stats: unknown = await response.json();
    if (!isSellPageStats(stats)) {
      throw new Error('SellPage stats response is invalid');
    }

    return stats;
  } catch (error) {
    console.warn('[SELLPAGE_STATS] 공개 지표 조회 실패:', error);
    return FALLBACK_SELL_PAGE_STATS;
  }
}

export function formatKstDate(value: string): string {
  const date = new Date(value);
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((item) => item.type === type)?.value ?? '';

  return `${part('year')}.${part('month')}.${part('day')}`;
}
