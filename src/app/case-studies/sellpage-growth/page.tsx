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
            Mixpanel 퍼널 분석 — AI 스튜디오 vs AI 디자이너, 데이터가 보여준
            것
          </h2>

          <div className="space-y-4 text-body-small text-[var(--neutral-500)]">
            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                문제 발견
              </h3>
              <p>
                Mixpanel 퍼널을 모니터링하던 중, 히어로 섹션에서 서비스
                페이지까지 도달하는 사용자의 이탈률이 눈에 띄게 높았습니다.
                SellPage에는 AI 스튜디오(이미지 생성)와 AI 디자이너(상세페이지
                제작) 두 가지 핵심 기능이 있는데, 두 기능의 퍼널 데이터를
                나란히 놓고 보니 명확한 차이가 드러났습니다.
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
                      AI 스튜디오
                    </th>
                    <th className="px-4 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-xs font-medium text-[var(--color-accent)]">
                      AI 디자이너
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
                AI 스튜디오의 진입률이 더 높은 이유는 히어로 섹션 소제목에
                &quot;AI 스튜디오&quot;라는 이름이 직접 노출되어 있기
                때문이었습니다. 하지만 진입한 사용자의 69%가 아무 것도 하지 않고
                이탈합니다. 반면 AI 디자이너는 &quot;상세페이지 만들기&quot;라는
                명확한 목적이 이미 사용자에게 전달되어, 들어온 사람의 64%가 바로
                작업을 시작합니다.
              </p>
              <p className="mt-2">
                히어로 섹션의 메인 카피 &quot;스마트폰 사진 한 장으로, 판매 준비
                끝&quot;이 만든 기대와, 실제로 도착하는 도구 화면 사이에 간극이
                있다고 판단했습니다. 사용자는 &quot;바로 예쁘게 만들어줘&quot;를
                기대하는데, 생소한 이름의 도구 앞에서 &quot;공부를 해야
                하나?&quot;라고 느끼면 이탈합니다.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                실행한 것
              </h3>
              <p>
                서비스 명칭을 사용자의 목적 기준으로 재설계하고, 히어로 섹션의
                CTA를 &quot;이미지 생성하기&quot;, &quot;상세페이지
                만들기&quot;처럼 행동 중심으로 변경했습니다. 스튜디오 진입 직후
                빈 화면 대신 &quot;여기에 사진을 끌어다 놓으세요&quot;라는
                가이드를 추가해 첫 행동까지의 마찰을 줄였습니다.
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
            Google Ads 키워드/소재 실험 → CTR 11.19% 달성
          </h2>

          <div className="space-y-4 text-body-small text-[var(--neutral-500)]">
            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                문제 발견
              </h3>
              <p>
                초기 Google Ads 캠페인의 CTR이 업계 평균 수준에 머물러 있었고,
                한정된 광고 예산으로 최대한의 유입을 만들어야 하는
                상황이었습니다.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                가설
              </h3>
              <p>
                &quot;타겟 키워드와 소재 카피가 실제 사용자의 검색 의도와
                일치하지 않는다. 셀러의 실제 페인포인트(촬영 비용, 시간)를 직접
                언급하면 CTR이 올라갈 것이다.&quot;
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                실험
              </h3>
              <p>
                키워드를 세분화하고, 광고 소재를 &quot;상품 사진 촬영 비용
                절감&quot;, &quot;AI로 상세페이지 자동 생성&quot; 등 구체적인
                베네핏 중심으로 A/B 테스트했습니다. 성과가 낮은 키워드는 빠르게
                제외하고, 전환이 발생하는 키워드에 예산을 집중했습니다.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-[var(--color-primary)]">
                결과
              </h3>
              <p>
                CTR 11.19%를 달성하며 ROAS가 유의미하게 개선되었습니다. 소규모
                예산으로도 효율적인 유입 채널을 확보할 수 있었고, 이 데이터를
                기반으로 향후 마케팅 예산 배분 기준을 수립했습니다.
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
                사용자와 직접 대화하는 것의 가치.
              </strong>{' '}
              커피챗을 통해 마케터들의 실제 페인포인트 5개를 발견하고 그 중 3개를
              해결했습니다. 정량 데이터가 &quot;무엇&quot;을 알려준다면, 정성
              데이터는 &quot;왜&quot;를 알려줍니다.
            </p>
          </div>
        </section>

        {/* 다음에 할 것 */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h3 mb-4 text-[var(--color-primary)]">
            다음에 할 것
          </h2>
          <div className="space-y-3 text-body-small text-[var(--neutral-500)]">
            <p>
              리텐션 지표를 더 깊이 파고들 계획입니다. 현재는 신규 유입과 전환에
              집중했지만, 다음 단계는 재방문율과 기능별 사용 빈도를 분석하여
              고착도(stickiness)를 높이는 것입니다.
            </p>
            <p>
              또한 VOC에서 나온 피드백 중 아직 해결하지 못한 페인포인트 2개에
              대해 우선순위를 재설정하고, 다음 분기 로드맵에 반영할 예정입니다.
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
