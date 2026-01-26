import { Navigation, ProductCard, Button, SocialLink } from '@/components';

const nowShipping = [
  {
    id: 'PRD-001',
    title: 'SellPage',
    description:
      '스마트폰 촬영본 한 장으로 연출컷 생성부터 상세페이지 제작까지, 상품 런칭의 전 과정을 자동화하는 AI 스튜디오.',
    impact: [
      '출시 3개월 만에 누적 사용자 141명, 유료 결제 6건',
      'AI 스튜디오/상세페이지 생성 258건 (기능 검증 완료)',
      '촬영/디자인 외주 비용 없이 판매를 시작하는 시장 수요 검증 중',
    ],
    status: 'live' as const,
    href: 'https://www.sellpage.life',
    lastUpdated: '2026.01.20',
  },
  {
    id: 'PRD-002',
    title: 'FastPost',
    description:
      '업로드한 여러 장의 사진 순서와 장소 정보를 바탕으로, 기승전결이 있는 블로그 포스팅 초안을 완성해 주는 개인화 글쓰기 에이전트.',
    impact: [
      'Vision AI를 활용하여 다중 이미지의 시간/공간적 흐름을 분석하고 스토리텔링 구성',
      '네이버/카카오맵 API 연동으로 장소 리뷰 데이터를 수집하고, 이미지 키워드와 매칭하여 콘텐츠에 최적화된 형태로 반영',
      '사용자 과거 글 분석을 통한 퍼스널 톤앤매너(어휘/문체) 학습 및 반영',
    ],
    status: 'live' as const,
    href: 'https://fastpost.life',
    lastUpdated: '2025.11.12',
  },
];

const values = [
  {
    number: '01',
    title: '기술보다 비즈니스 임팩트',
    description:
      '화려한 최신 기술 도입 그 자체보다는, 비즈니스 문제를 가장 확실하고 효율적으로 해결하는 적정 기술을 지향합니다.',
  },
  {
    number: '02',
    title: 'AI를 도구가 아닌 동료로',
    description:
      '단순 코딩 보조를 넘어, 기획과 설계를 함께 논의하는 파트너로 대합니다. 모호한 아이디어를 구체적인 문서와 구조로 빠르게 시각화하여 개발의 완성도를 높입니다.',
  },
  {
    number: '03',
    title: '만드는 편함보다 쓰는 경험',
    description:
      '개발자에게 편한 로직보다 사용자에게 편한 경험(UX)을 선택합니다. 사용자의 시간을 1초라도 아끼기 위해 기꺼이 번거로움을 감수합니다.',
  },
  {
    number: '04',
    title: '완벽한 준비보다 빠른 실행',
    description:
      '책상 앞의 거대한 계획보다 시장에서의 작은 실험을 신뢰합니다. 빠르게 만들고, 빠르게 검증하고, 데이터로 배웁니다.',
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
                Product Engineer
              </p>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-display-h1 mb-6 text-[var(--color-primary)]">
                <span className="text-[var(--color-primary)]">Baeju0</span>
                <span className="text-[var(--neutral-500)]"> Labs</span>
              </h1>
              <p className="text-body-large max-w-xl text-[var(--neutral-500)]">
                가설 검증부터 배포까지 주도하는{' '}
                <strong>Product Engineer Baeju0</strong>의 작업실입니다.
                <br />
                기술로 비즈니스 문제를 해결하고, 실제 시장에서 동작하는 제품을
                만듭니다.
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
                Product Engineer
              </p>
              <p className="text-body-large max-w-xl text-[var(--neutral-500)]">
                기획부터 배포, 운영까지 제품의 전 과정을 주도하는 Product
                Engineer입니다.
                <br />
                <br />
                AI 에이전트와 함께 모호한 생각을 구체적인 문서와 코드로 빠르게
                시각화하며, 1인 개발의 한계를 넘어선 생산성을 만들어냅니다.
                <br />
                <br />
                혼자만의 빠른 실행을 넘어, 이제는 팀과 함께 더 깊이 있는 기술적
                고민과 견고한 가치를 만들어가는 과정을 기다리고 있습니다.
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
