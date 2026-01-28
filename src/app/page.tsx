import { Navigation, ProductCard, Button, SocialLink } from '@/components';

const nowShipping = [
  {
    id: 'PRD-001',
    title: 'SellPage',
    description:
      '생성형 AI(Gemini) API를 연동하여 이미지 처리 파이프라인을 최적화하고, 대용량 데이터를 웹에서 효율적으로 시각화한 솔루션.',
    impact: [
      'Next.js App Router와 Supabase를 활용한 서버리스 아키텍처 구축으로 운영 효율 최적화',
      'Gemini API 프롬프트 튜닝을 통해 이미지 생성 데이터의 정합성(Consistency) 확보',
      '반응형 웹 디자인 적용으로 모바일/PC 크로스 브라우징 완벽 지원',
    ],
    status: 'live' as const,
    href: 'https://www.sellpage.life',
    lastUpdated: '2026.01.20',
  },
  {
    id: 'PRD-002',
    title: 'FastPost',
    description:
      '다중 이미지 분석(Vision AI)과 위치 기반 API(Map)를 매쉬업(Mash-up)하여 자동화된 콘텐츠 생성 로직을 구현한 웹 서비스.',
    impact: [
      'Vision AI로 비정형 이미지 데이터를 분석하고, 메타데이터(시간/장소)를 구조화하여 처리',
      'Kakao Map API 연동 및 좌표 데이터 시각화를 통해 직관적인 위치 정보 제공',
      '사용자별 데이터 모델링을 통해 개인화된 톤앤매너(Context) 학습 로직 구현',
    ],
    status: 'live' as const,
    href: 'https://fastpost.life',
    lastUpdated: '2025.11.12',
  },
];

const values = [
  {
    number: '01',
    title: '견고한 설계와 안정성',
    description:
      '화려한 기술 도입보다는, 유지보수가 용이한 아키텍처와 에러 없는 안정적인 서비스를 최우선으로 합니다.',
  },
  {
    number: '02',
    title: '데이터 중심의 사고 (R&D 취향 저격!)',
    description:
      '직감보다는 정량적인 데이터를 근거로 의사결정하며, 로그 분석을 통해 시스템의 병목을 찾아 개선합니다.',
  },
  {
    number: '03',
    title: '사용자 경험(UX) 최적화',
    description:
      '복잡한 백엔드 로직을 사용자가 인지하지 못하도록 심플한 인터페이스로 추상화하여 구현합니다.',
  },
  {
    number: '04',
    title: '지속적인 학습과 개선',
    description:
      '새로운 기술 스택(Gemini, Next.js 등)을 빠르게 습득하여 프로젝트에 적용하고, 코드를 지속적으로 리팩토링합니다.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-32 md:px-10 md:py-48">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-caption mb-4 text-[var(--neutral-500)]">
                Web Engineer
              </p>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-display-h1 mb-6 text-[var(--color-primary)]">
                <span className="text-[var(--color-primary)]">Baeju0</span>
                <span className="text-[var(--neutral-500)]"> Labs</span>
              </h1>
              <p className="text-body-large max-w-xl text-[var(--neutral-500)]">
                데이터 시각화와 안정적인 서비스를 구축하는{' '}
                <strong>Web Engineer Baeju0</strong>의 작업실입니다.
                <br />
                Next.js와 TypeScript를 기반으로, 복잡한 로직을 직관적인 UI로 구현하며
                사용자 중심의 성능 개선에 집중합니다.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#now-shipping">
                  <Button variant="primary">운영 중인 제품 보기</Button>
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
                  Now Shipping
                </p>
                <p className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
                  {nowShipping.length}
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
                Now Shipping
              </h2>
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-caption text-[var(--neutral-500)]">
                {nowShipping.length} Products
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {nowShipping.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

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
                Full-stack Engineer
              </p>
              <p className="text-body-large max-w-xl text-[var(--neutral-500)]">
                웹 서비스의 A to Z를 직접 구축하며 전체 라이프사이클을 경험한
                Full-stack Engineer입니다.
                <br />
                <br />
                최신 기술 스택을 활용해 복잡한 데이터를 다루는 것에 흥미를 느끼며,
                안정적인 API 설계와 데이터 시각화 구현에 강점이 있습니다.
                <br />
                <br />
                개인의 성장을 넘어, 이제는 전문적인 R&D 팀의 일원으로서
                기술적 난제를 함께 해결하고 서비스의 완성도를 높이고 싶습니다.
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
                작게 만들고, 실제로 운영하고, 배운 것을 정리합니다.
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
