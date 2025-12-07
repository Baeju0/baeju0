import { Navigation, ProductCard, Button } from '@/components';

const nowShipping = [
  {
    id: 'PRD-001',
    title: 'SellPage',
    description:
      '상품 사진 한 장을 상세 이미지/콘텐츠로 확장하는 AI 스튜디오.',
    status: 'live' as const,
    href: '#',
    lastUpdated: '2024.12.01',
  },
  {
    id: 'PRD-002',
    title: 'FastPost',
    description:
      '이미지 기반 스토리형 콘텐츠 초안을 빠르게 만드는 AI 글쓰기 도구.',
    status: 'live' as const,
    href: '#',
    lastUpdated: '2024.12.05',
  },
];

const conceptSketches = [
  {
    id: 'CON-001',
    title: '맘몸일기',
    description:
      '감정 색상 + 신체 증상을 함께 기록하는 경험이 사용자의 자기이해/기록 지속성에 도움이 되는지 탐색한 초기 기획.',
    status: 'concept' as const,
    href: '#',
  },
];

const principles = [
  {
    number: '01',
    title: '사용자 감정과 시간을 존중',
    description:
      '사용자의 감정과 시간은 가장 소중한 자원입니다. 불필요한 기다림과 혼란을 최소화합니다.',
  },
  {
    number: '02',
    title: '기능보다 지속 가능한 사용 경험',
    description:
      '많은 기능보다 꾸준히 쓰이는 경험을 만듭니다. 사용자가 돌아오는 제품이 좋은 제품입니다.',
  },
  {
    number: '03',
    title: '데이터는 최소로, 목적은 명확하게',
    description:
      '필요 이상의 데이터를 수집하지 않습니다. 모든 데이터 수집에는 명확한 목적이 있어야 합니다.',
  },
  {
    number: '04',
    title: '작게 만들고 빠르게 검증하며 기록',
    description:
      '거대한 계획보다 작은 실험을 선호합니다. 빠르게 만들고, 빠르게 검증하고, 배운 것을 기록합니다.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />

      {/* Hero Section */}
      <section className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-32 md:px-10 md:py-48">
          <div className="grid gap-8 md:grid-cols-12">
            {/* Main Hero Content */}
            <div className="md:col-span-8">
              <p className="text-caption mb-4 text-[var(--neutral-500)]">
                Baeju0의 독립 제품 작업실
              </p>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-display-h1 mb-6 text-[var(--color-primary)]">
                <span className="text-[var(--color-primary)]">Baeju0</span>
                <span className="text-[var(--neutral-500)]"> Labs</span>
              </h1>
              <p className="text-body-large max-w-xl text-[var(--neutral-500)]">
                1인 개발자 Baeju0의 제품 작업실입니다.
                <br />
                작게 만들고, 실제로 운영하고, 배운 것을 정리합니다.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#now-shipping">
                  <Button variant="primary">지금 만드는 제품 보기</Button>
                </a>
              </div>

              {/* Channel Links */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://threads.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Threads
                </a>
                <span className="text-[var(--neutral-300)]">·</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
                >
                  GitHub
                </a>
                <span className="text-[var(--neutral-300)]">·</span>
                <a
                  href="mailto:hello@baeju0.com"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Side Info Panel */}
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
                  Concept Sketches
                </p>
                <p className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
                  {conceptSketches.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Now Shipping Section */}
      <section id="now-shipping" className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-10">
          {/* Section Header - Sticky */}
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

          {/* Product Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {nowShipping.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Concept Sketches Section */}
      <section id="concepts" className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-10">
          {/* Section Header */}
          <div className="sticky top-14 z-40 -mx-4 mb-8 border-b border-[var(--neutral-300)] bg-[var(--neutral-200)]/95 px-4 py-4 backdrop-blur-sm md:-mx-10 md:px-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
                  Concept Sketches
                </h2>
                <p className="mt-1 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]">
                  완성도 부담 없이 방향성과 관심 영역을 탐색한 아이디어들
                </p>
              </div>
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-caption text-[var(--neutral-500)]">
                {conceptSketches.length} Ideas
              </span>
            </div>
          </div>

          {/* Concepts Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {conceptSketches.map((concept) => (
              <ProductCard key={concept.id} {...concept} />
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-10">
          {/* Section Header */}
          <div className="sticky top-14 z-40 -mx-4 mb-8 border-b border-[var(--neutral-300)] bg-[var(--neutral-200)]/95 px-4 py-4 backdrop-blur-sm md:-mx-10 md:px-10">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
              Principles
            </h2>
          </div>

          {/* Principles Grid */}
          <div className="grid gap-px border border-[var(--neutral-300)] bg-[var(--neutral-300)] md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.number} className="bg-[var(--neutral-200)] p-6">
                <span className="font-[family-name:var(--font-ibm-plex-mono)] text-caption text-[var(--color-accent)]">
                  {principle.number}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 mb-2 mt-2 text-[var(--color-primary)]">
                  {principle.title}
                </h3>
                <p className="text-body-small text-[var(--neutral-500)]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-divider">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-10">
          {/* Section Header */}
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
                1인 개발자
              </p>
              <p className="text-body-large max-w-xl text-[var(--neutral-500)]">
                기획·디자인·개발·운영을 연결하며
                <br />
                AI 제품을 실제 사용자 가치로 완성하는 1인 개발자입니다.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-l border-[var(--neutral-300)] pl-6 md:col-span-4">
              <p className="text-caption text-[var(--neutral-500)]">Channels</p>
              <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
              <a
                href="mailto:hello@baeju0.com"
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
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Mobile Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--neutral-300)] bg-[var(--neutral-200)] p-4 md:hidden">
        <a href="#now-shipping" className="block">
          <Button variant="primary" className="w-full">
            지금 만드는 제품 보기
          </Button>
        </a>
      </div>
    </div>
  );
}
