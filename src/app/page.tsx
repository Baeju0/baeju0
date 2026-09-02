import Link from 'next/link';
import { Navigation, ProductCard, Button, SocialLink, SkillsSection } from '@/components';

export const revalidate = 86400;

async function getSellPageLastUpdated(): Promise<string> {
  try {
    const res = await fetch('https://sellpage.life/build-info.json', {
      next: { revalidate: 86400 },
    });
    const { lastUpdate } = await res.json();
    const date = new Date(lastUpdate);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  } catch {
    return '2026.03.15';
  }
}

const nowShipping = (sellPageLastUpdated: string) => [
  {
    id: 'PRD-001',
    title: 'SellPage',
    description:
      'AI 제품 이미지 생성부터 상세페이지 제작까지, 상품 런칭을 자동화하는 B2B SaaS. Next.js + Supabase로 설계하고 직접 운영 중.',
    impact: [
      'Next.js App Router · Supabase · Vercel 기반 풀스택 구성',
      'Gemini API 연동, 이미지 생성 파이프라인 및 에러 핸들링',
      'DB·Mixpanel 기반 ‘보너스 확인 → AI Designer 이동’ 퍼널 개선 · 63% 이동 확인',
    ],
    status: 'live' as const,
    href: 'https://www.sellpage.life',
    lastUpdated: sellPageLastUpdated,
  },
  {
    id: 'PRD-002',
    title: 'FastPost',
    description:
      '사진과 장소 정보를 기반으로 블로그 포스팅 초안을 자동 생성하는 웹 앱. Vision API · 카카오맵 API 연동.',
    impact: [
      'Google Cloud Vision API로 이미지 메타데이터 파싱 및 순서 정렬',
      '카카오맵 API 연동, 좌표 기반 장소 검색 및 리뷰 매칭',
      'B2C 블로그 글쓰기 자동화 서비스의 시장성을 검증하고, 수요·수익성 한계를 확인해 서비스 종료 의사결정',
    ],
    status: 'archived' as const,
    lastUpdated: '2025.11.12',
  },
];

const values = [
  {
    number: '01',
    title: '안정적인 서비스 운영',
    description:
      '새 기능보다 기존 서비스의 안정성을 우선합니다. 에러 핸들링, 로깅, 모니터링으로 문제를 사전에 감지하는 구조를 지향합니다.',
  },
  {
    number: '02',
    title: '데이터 기반 의사결정',
    description:
      '감이 아닌 데이터로 판단합니다. 퍼널 분석과 사용자 행동 로그로 개선 방향을 설정하고 결과를 측정합니다.',
  },
  {
    number: '03',
    title: '사용자 경험 중심 개발',
    description:
      '개발자에게 편한 구조보다 사용자에게 자연스러운 경험을 선택합니다. UX 문제를 기술로 해결합니다.',
  },
  {
    number: '04',
    title: '실행하며 배우기',
    description:
      '완벽히 익힌 뒤 시작하기보다, 먼저 실행하고 부딪히며 배웁니다. 모르는 영역도 일단 해보고, 문제를 만나면 그때 깊이 파고듭니다.',
  },
];

export default async function Home() {
  const sellPageLastUpdated = await getSellPageLastUpdated();
  const products = nowShipping(sellPageLastUpdated);
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-32 md:px-10 md:py-48">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-caption mb-4 text-[var(--neutral-500)]">
                Frontend Engineer
              </p>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-display-h1 mb-6 text-[var(--color-primary)]">
                <span className="text-[var(--color-primary)]">Baeju0</span>
                <span className="text-[var(--neutral-500)]"> Labs</span>
              </h1>
              <p className="text-body-large max-w-xl text-[var(--neutral-500)]">
                기획부터 배포·운영까지 직접 경험한{' '}
                <strong>Frontend Engineer Baeju0</strong>의
                포트폴리오입니다.
                <br />
                실서비스를 만들고 운영하며 기술로 문제를 해결합니다.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#now-shipping">
                  <Button variant="primary">프로젝트 보기</Button>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <SocialLink
                  href="https://www.threads.com/@flowyoung_off?igshid=NTc4MTIwNjQ2YQ=="
                  platform="Threads"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Threads
                </SocialLink>
                <span className="text-[var(--neutral-300)]">·</span>
                <SocialLink
                  href="https://github.com/Baeju0"
                  platform="GitHub"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
                >
                  GitHub
                </SocialLink>
                <span className="text-[var(--neutral-300)]">·</span>
                <SocialLink
                  href="mailto:hello@baeju0.blog"
                  platform="Email"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Email
                </SocialLink>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-l border-[var(--neutral-300)] pl-6 md:col-span-4">
              <div>
                <p className="text-caption mb-1 text-[var(--neutral-500)]">
                  Projects
                </p>
                <p className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
                  {products.length}
                </p>
              </div>
              <div>
                <p className="text-caption mb-1 text-[var(--neutral-500)]">
                  Core Values
                </p>
                <p className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
                  {values.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="now-shipping" className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-10">
          <div className="sticky top-14 z-40 -mx-4 mb-8 border-b border-[var(--neutral-300)] bg-[var(--neutral-200)]/95 px-4 py-4 backdrop-blur-sm md:-mx-10 md:px-10">
            <div className="flex items-center justify-between">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
                Projects
              </h2>
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-caption text-[var(--neutral-500)]">
                {products.length} Services
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-10">
          <div className="sticky top-14 z-40 -mx-4 mb-8 border-b border-[var(--neutral-300)] bg-[var(--neutral-200)]/95 px-4 py-4 backdrop-blur-sm md:-mx-10 md:px-10">
            <div className="flex items-center justify-between">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
                Case Studies
              </h2>
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-caption text-[var(--neutral-500)]">
                1 Article
              </span>
            </div>
          </div>

          <Link
            href="/case-studies/sellpage-growth"
            className="group block border border-[var(--neutral-300)] bg-[var(--neutral-200)] transition-colors card-hover"
          >
            <div className="flex items-center justify-between border-b border-[var(--neutral-300)] px-4 py-3">
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]">
                PRD-001 · SellPage
              </span>
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--color-accent)]">
                UPDATED 2026.09
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 mb-2 text-[var(--color-primary)]">
                실서비스 운영에서 만난 문제들과 해결 과정
              </h3>
              <p className="text-body-small mb-4 text-[var(--neutral-500)]">
                DB로 미사용 상태를 발견해 안내 UI를 개선하고, Mixpanel로
                ‘보너스 확인 → AI Designer 이동’ 퍼널을 측정한 과정.
              </p>
              <div className="flex flex-wrap gap-2">
                {['퍼널 분석', 'UX 개선', 'API 연동', 'SEO 최적화'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--neutral-300)] px-2 py-1 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="flex items-center justify-end border-t border-[var(--neutral-300)] px-4 py-3">
              <span className="inline-flex items-center gap-1 font-[family-name:var(--font-ibm-plex-mono)] text-sm font-medium text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                Read Case Study
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
              </span>
            </div>
          </Link>
        </div>
      </section>

      <SkillsSection />

      <section id="values" className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-10">
          <div className="sticky top-14 z-40 -mx-4 mb-8 border-b border-[var(--neutral-300)] bg-[var(--neutral-200)]/95 px-4 py-4 backdrop-blur-sm md:-mx-10 md:px-10">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
              Values
            </h2>
          </div>

          <div className="grid gap-px border border-[var(--neutral-300)] bg-[var(--neutral-300)] md:grid-cols-2">
            {values.map((value) => (
              <div key={value.number} className="bg-[var(--neutral-200)] p-6">
                <span className="font-[family-name:var(--font-ibm-plex-mono)] text-caption text-[var(--color-accent)]">
                  {value.number}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 mb-2 mt-2 text-[var(--color-primary)]">
                  {value.title}
                </h3>
                <p className="text-body-small text-[var(--neutral-500)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-10">
          <div className="sticky top-14 z-40 -mx-4 mb-8 border-b border-[var(--neutral-300)] bg-[var(--neutral-200)]/95 px-4 py-4 backdrop-blur-sm md:-mx-10 md:px-10">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
              About
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 mb-4 text-[var(--color-primary)]">
                Baeju0
              </h3>
              <p className="text-caption mb-2 text-[var(--neutral-500)]">
                FRONTEND / FULL-STACK ENGINEER
              </p>
              <p className="text-body-large max-w-xl text-[var(--neutral-500)]">
                기획부터 배포·운영까지 직접 경험한 프론트엔드
                엔지니어입니다.
                <br />
                <br />
                Next.js, React, TypeScript를 주력으로 실서비스를 설계하고
                운영합니다. 데이터 분석으로 사용자 경험을 개선합니다.
                <br />
                <br />
                팀 환경에서 동료와 함께 더 나은 서비스를 만들어가는 과정을
                기대하고 있습니다.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-l border-[var(--neutral-300)] pl-6 md:col-span-4">
              <p className="text-caption text-[var(--neutral-500)]">Channels</p>
              <SocialLink
                href="https://www.threads.com/@flowyoung_off?igshid=NTc4MTIwNjQ2YQ=="
                platform="Threads"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
              >
                Threads
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://github.com/Baeju0"
                platform="GitHub"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
              >
                GitHub
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </SocialLink>
              <SocialLink
                href="mailto:hello@baeju0.blog"
                platform="Email"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
              >
                Email
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </SocialLink>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-[var(--color-primary)]">
                Baeju0{' '}
                <span className="font-normal text-[var(--neutral-500)]">
                  Labs
                </span>
              </p>
              <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]">
                직접 만들고, 운영하고, 개선한 기록입니다.
              </p>
            </div>
            <div className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]">
              &copy; {new Date().getFullYear()} Baeju0 Labs
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
