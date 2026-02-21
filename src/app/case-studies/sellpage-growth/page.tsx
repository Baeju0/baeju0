import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components';

export const metadata: Metadata = {
  title: 'SellPage 출시 3개월, 그로스를 직접 돌려본 기록 | Baeju0 Labs',
  description:
    'AI 상품 사진/상세페이지 SaaS SellPage의 출시 후 3개월간 그로스 실험 기록. Mixpanel 퍼널 분석, Google Ads 최적화, 전환율 개선 케이스.',
};

export default function SellPageGrowthCaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <article className="mx-auto max-w-[800px] px-4 py-16 md:px-10 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/#now-shipping"
            className="mb-6 inline-flex items-center gap-1 font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
            Products
          </Link>
          <p className="text-caption mb-3 text-[var(--color-accent)]">
            Case Study · PRD-001
          </p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-display-h1 mb-4 text-[var(--color-primary)]">
            SellPage 출시 3개월,
            <br />
            그로스를 직접 돌려본 기록
          </h1>
          <p className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--neutral-500)]">
            2026.02 · 읽는 시간 약 5분
          </p>
        </div>

        {/* 제품 소개 */}
        <section className="mb-12">
          <p className="text-body-large text-[var(--neutral-500)]">
            <strong className="text-[var(--color-primary)]">SellPage</strong>는
            스마트폰 촬영본 한 장으로 AI 연출컷 생성부터 상세페이지 제작까지,
            상품 런칭의 전 과정을 자동화하는 B2B SaaS입니다. 소규모 셀러들이
            촬영·디자인 외주 없이 빠르게 판매를 시작할 수 있도록 돕는 것이
            핵심 가치입니다.
          </p>
        </section>

        {/* 핵심 지표 */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 mb-6 text-[var(--color-primary)]">
            핵심 지표 요약
          </h2>
          <div className="grid grid-cols-2 gap-px border border-[var(--neutral-300)] bg-[var(--neutral-300)] md:grid-cols-4">
            {[
              { label: '누적 사용자', value: '152명' },
              { label: '유료 전환율', value: '4.2%' },
              { label: '보너스 사용률', value: '0→100%' },
              { label: 'Google Ads CTR', value: '11.19%' },
            ].map((metric) => (
              <div
                key={metric.label}
                className="bg-[var(--neutral-200)] p-4 text-center"
              >
                <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[var(--color-accent)]">
                  {metric.value}
                </p>
                <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--neutral-500)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Case 1: 퍼널 분석 */}
        <section className="mb-12 border-l-2 border-[var(--color-accent)] pl-6">
          <p className="text-caption mb-2 text-[var(--color-accent)]">
            Case 01
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 mb-4 text-[var(--color-primary)]">
            Mixpanel 퍼널 분석 — 기능 명칭 하나가 활성화율을 바꿨다
          </h2>

          <div className="space-y-4 text-body-small text-[var(--neutral-500)]">
            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                문제 발견
              </h3>
              <p>
                Mixpanel 퍼널을 모니터링하던 중, 히어로 섹션에서 서비스
                페이지까지 도달하는 사용자의 이탈률이 눈에 띄게 높았습니다.
                당시 SellPage에는 &quot;AI 스튜디오&quot;(이미지 생성)와
                &quot;AI 디자이너&quot;(상세페이지 제작)라는 두 가지 핵심
                기능이 있었는데, 두 기능의 퍼널 데이터를 나란히 놓고 보니
                명확한 차이가 드러났습니다.
              </p>
            </div>

            {/* 데이터 비교 테이블 */}
            <div className="my-4 overflow-hidden border border-[var(--neutral-300)]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[var(--neutral-300)] bg-[var(--neutral-300)]/50">
                    <th className="px-4 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-xs font-medium text-[var(--neutral-500)]">
                      지표
                    </th>
                    <th className="px-4 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-xs font-medium text-[var(--color-accent)]">
                      AI 스튜디오 (현 AI 제품 촬영)
                    </th>
                    <th className="px-4 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-xs font-medium text-[var(--color-accent)]">
                      AI 디자이너 (현 AI 상세페이지)
                    </th>
                  </tr>
                </thead>
                <tbody className="font-[family-name:var(--font-ibm-plex-mono)] text-xs">
                  <tr className="border-b border-[var(--neutral-300)]">
                    <td className="px-4 py-2 text-[var(--neutral-500)]">
                      진입률
                    </td>
                    <td className="px-4 py-2 text-[var(--color-primary)]">
                      6.76% (19명)
                    </td>
                    <td className="px-4 py-2 text-[var(--color-primary)]">
                      ~5% (14명)
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--neutral-300)]">
                    <td className="px-4 py-2 text-[var(--neutral-500)]">
                      활성화율
                    </td>
                    <td className="px-4 py-2 text-[var(--color-primary)]">
                      31.5% (6명 실행)
                    </td>
                    <td className="px-4 py-2 text-[var(--color-primary)]">
                      64% (9명 실행)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[var(--neutral-500)]">
                      특징
                    </td>
                    <td className="px-4 py-2 text-[var(--neutral-500)]">
                      호기심에 진입, 실행은 조심
                    </td>
                    <td className="px-4 py-2 text-[var(--neutral-500)]">
                      진입 적지만 실행률 높음
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                가설
              </h3>
              <p>
                &quot;AI 스튜디오&quot;의 진입률이 더 높은 이유는 히어로 섹션
                소제목에 이름이 직접 노출되어 있기 때문이었습니다. 하지만 진입한
                사용자의 69%가 아무 것도 하지 않고 이탈합니다. 반면 &quot;AI
                디자이너&quot;는 들어온 사람의 64%가 바로 작업을 시작합니다.
              </p>
              <p className="mt-2">
                두 기능 모두 &quot;스튜디오&quot;, &quot;디자이너&quot;라는
                이름이 사용자에게 무엇을 할 수 있는 곳인지 직관적으로
                전달하지 못하고 있었습니다. 히어로 섹션의 메인 카피
                &quot;스마트폰 사진 한 장으로, 판매 준비 끝&quot;이 만든
                기대와, 실제로 도착하는 도구 화면 사이에 간극이 있다고
                판단했습니다.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                실행한 것
              </h3>
              <p>
                기능 명칭을 사용자의 목적 기준으로 재설계했습니다. &quot;AI
                스튜디오&quot;는 &quot;AI 제품 촬영&quot;으로, &quot;AI
                디자이너&quot;는 &quot;AI 상세페이지&quot;로 변경하여 사용자가
                이름만 보고도 무엇을 할 수 있는 기능인지 바로 알 수 있도록
                했습니다. 동시에 진입 직후 빈 화면 대신 &quot;여기에 사진을
                끌어다 놓으세요&quot;라는 가이드를 추가해 첫 행동까지의 마찰을
                줄였습니다.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                인사이트
              </h3>
              <p>
                같은 제품 안에서도 기능별로 퍼널을 쪼개 비교하면, 전체 평균이
                가리는 문제가 선명하게 보입니다. &quot;진입률은 높은데
                활성화율은 낮다&quot;는 데이터 하나가 히어로 섹션 카피, 서비스
                명칭, 온보딩 UX까지 연쇄적으로 개선할 포인트를 알려줬습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Case 2: 보너스 사용률 */}
        <section className="mb-12 border-l-2 border-[var(--color-accent)] pl-6">
          <p className="text-caption mb-2 text-[var(--color-accent)]">
            Case 02
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 mb-4 text-[var(--color-primary)]">
            보너스 사용률 0% → 100% — &quot;찾게 만들지 말고, 알아차리게
            만들어라&quot;
          </h2>

          <div className="space-y-4 text-body-small text-[var(--neutral-500)]">
            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                문제 발견
              </h3>
              <p>
                신규 가입 시 무료 이용권 4장과 보너스 2장을 제공하고 있었지만,
                Mixpanel 모니터링 중 신규 사용자 2명이 무료 4장만 쓰고 보너스
                2장은 사용하지 않고 이탈하는 패턴을 발견했습니다. 보너스
                사용률은 0%였습니다.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                원인 분석
              </h3>
              <p>
                &quot;2장 더 받기&quot; 버튼이 생성 결과물 리스트 최하단 스크롤
                영역에 위치해 있었습니다. 사용자는 결과물 4장을 확인하면 목적이
                달성되어 추가 스크롤을 하지 않았습니다. 제작자 관점에서는 버튼이
                눈에 잘 띈다고 느꼈으나, 실제 사용자에게는 해당 시점에 버튼을
                찾아야 할 인지적 이유가 부족했습니다. &quot;디자인 문제&quot;가
                아니라 &quot;사용자 행동 흐름(UX) 문제&quot;였습니다.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                실험
              </h3>
              <p>
                결과물 생성 완료 후 2.5초 뒤, 플로팅 안내 UI를 노출하도록
                변경했습니다. &quot;아직 확인하지 않은 보너스 2장이
                있어요!&quot; 사용자가 결과물을 충분히 확인한 뒤 다음 행동을
                자연스럽게 유도하는 타이밍으로 설정했습니다. 핵심은 사용자의
                현재 목표를 방해하지 않으면서도 남은 혜택을 명확히 인지시키는
                것이었습니다.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                결과
              </h3>
              <p>
                보너스 사용률이 0%에서 100%로 올랐습니다. 신규 가입자 전원이
                보너스를 활용해 최소 1회 이상 AI 스튜디오를 추가 경험하게
                되었고, 제품의 핵심 가치를 체감하는 기회가 2배로 늘었습니다.
                &quot;사용자가 보너스를 찾게 만드는 방식&quot;에서
                &quot;알아차리게 만드는 방식&quot;으로 전환한 것이
                핵심이었습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Case 3: Google Ads CTR */}
        <section className="mb-12 border-l-2 border-[var(--color-accent)] pl-6">
          <p className="text-caption mb-2 text-[var(--color-accent)]">
            Case 03
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 mb-4 text-[var(--color-primary)]">
            Google Ads PMax 3.30% → 검색 캠페인 11.19% — 모니터링이 만든 차이
          </h2>

          <div className="space-y-4 text-body-small text-[var(--neutral-500)]">
            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                문제 발견
              </h3>
              <p>
                Google Ads를 처음 사용해봤습니다. 광고를 세팅하고 돌리기
                시작했는데, 며칠 뒤 광고 실적을 모니터링하던 중 이상한 점을
                발견했습니다. 광고가 게재되고 있는 사이트가 맞고 게임 사이트나
                유튜브 같은, 서비스 타겟과 전혀 관련 없는 곳이었습니다. CTR은
                3.30%로 나쁘지 않았지만 유입의 질이 의심됐습니다.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                원인 분석
              </h3>
              <p>
                더 공부해보니 제가 설정한 캠페인이 PMax(Performance Max)라는
                유형이었습니다. PMax는 Google이 자동으로 여러 지면에 광고를
                배포하는 방식이라, 셀러가 주로 검색하는 키워드와 무관한 곳에도
                노출되고 있었습니다. 처음이라 캠페인 유형의 차이를 모른 채
                시작한 것이 원인이었습니다.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                실행한 것
              </h3>
              <p>
                PMax 캠페인을 중단하고, 타겟 사용자가 실제로 검색할 만한
                키워드를 직접 설정하는 검색 캠페인으로 전환했습니다. &quot;상품
                사진 촬영&quot;, &quot;상세페이지 제작&quot; 등 셀러의
                페인포인트와 직결되는 키워드를 선별하고, 성과가 낮은 키워드는
                빠르게 제외하며 예산을 집중했습니다.
              </p>
            </div>

            {/* Before/After 비교 */}
            <div className="my-4 overflow-hidden border border-[var(--neutral-300)]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[var(--neutral-300)] bg-[var(--neutral-300)]/50">
                    <th className="px-4 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-xs font-medium text-[var(--neutral-500)]">
                      지표
                    </th>
                    <th className="px-4 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-xs font-medium text-[var(--neutral-500)]">
                      PMax (Before)
                    </th>
                    <th className="px-4 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-xs font-medium text-[var(--color-accent)]">
                      검색 캠페인 (After)
                    </th>
                  </tr>
                </thead>
                <tbody className="font-[family-name:var(--font-ibm-plex-mono)] text-xs">
                  <tr className="border-b border-[var(--neutral-300)]">
                    <td className="px-4 py-2 text-[var(--neutral-500)]">CTR</td>
                    <td className="px-4 py-2 text-[var(--neutral-500)]">
                      3.30%
                    </td>
                    <td className="px-4 py-2 text-[var(--color-accent)]">
                      11.19%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[var(--neutral-500)]">
                      노출 지면
                    </td>
                    <td className="px-4 py-2 text-[var(--neutral-500)]">
                      자동 배포 (비관련 사이트 포함)
                    </td>
                    <td className="px-4 py-2 text-[var(--color-primary)]">
                      타겟 키워드 검색 결과
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                인사이트
              </h3>
              <p>
                처음 해보는 영역이라 실수가 있었지만, 광고비를 쓰고 끝내는 게
                아니라 실적을 직접 모니터링했기 때문에 문제를 빠르게 발견할 수
                있었습니다. &quot;모르면 배우고, 배웠으면 바로 고친다&quot;는
                원칙을 그로스 영역에서도 동일하게 적용한 경험이었습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 배운 것 */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 mb-4 text-[var(--color-primary)]">
            배운 것
          </h2>
          <div className="space-y-3 text-body-small text-[var(--neutral-500)]">
            <p>
              <strong className="text-[var(--color-primary)]">
                &quot;개발자는 사용자가 아니다&quot;를 데이터로 증명했다.
              </strong>{' '}
              보너스 버튼이 눈에 잘 띈다고 느낀 건 제작자인 저뿐이었습니다.
              Mixpanel 퍼널이 없었다면 보너스 사용률 0%라는 문제를 발견조차
              못했을 것입니다. 측정할 수 없으면 개선할 수 없습니다.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">
                작은 실험이 핵심 지표를 바꾼다.
              </strong>{' '}
              대규모 기능 개발 없이도 플로팅 UI 추가, CTA 카피 수정, 명칭 교체
              같은 작은 실험이 핵심 지표를 극적으로 바꿀 수 있었습니다.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">
                모든 피드백이 같은 무게는 아니다.
              </strong>{' '}
              운영 과정에서 다양한 피드백을 받으며 나름의 필터링 기준을
              만들었습니다. 재현 정보가 있는지, 서비스가 아닌 사람에 대한
              평가인지, 감정 단어만 있고 구체적 명사가 없는지, 실제 행동(문의,
              재시도 등)이 따르는지. 결론적으로 &quot;행동으로 이어질 수 있는
              피드백&quot;만 제품 개선에 반영하는 기준을 세웠습니다.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">
                VOC 1건이 시스템을 만든다.
              </strong>{' '}
              한 사용자와 이메일로 지속적으로 피드백을 주고받으며, 제품 개선으로
              이어진 2건을 우선 처리했습니다. 이미지 다운로드 중복 실행 버그는
              클릭 방지 로직과 로딩 UI를 추가해 해결했고, AI 이미지 글자 깨짐
              문제는 저화질 이미지 경고 토스트를 추가하는 동시에
              image_upload_logs 테이블을 만들어 메타데이터(용량, 해상도)를
              로깅하는 시스템을 구축했습니다. 단발성 CS 대응이 아니라, 향후
              패턴 분석이 가능한 구조로 만든 것이 핵심이었습니다.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-[var(--neutral-300)] pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--neutral-500)] transition-colors hover:text-[var(--color-primary)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
            Baeju0 Labs 홈으로
          </Link>
        </div>
      </article>
    </div>
  );
}
