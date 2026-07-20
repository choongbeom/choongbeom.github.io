// src/app/about/page.tsx
import React from 'react';

export default function AboutPage() {
  const coreCapabilities = [
    {
      title: 'Windows·장비 소프트웨어',
      description:
        'Windows 응용프로그램, 장비 제어, SDK, Local Server 및 현장형 솔루션 개발',
    },
    {
      title: 'SDK·시스템 연동',
      description:
        'RS232, USB, TWAIN, REST API 및 고객 업무시스템과의 인터페이스 설계',
    },
    {
      title: '제품 아키텍처',
      description:
        '장비, Agent, API, Worker, DB, 외부 서비스로 구성된 제품 구조 설계와 기술 검증',
    },
    {
      title: '개발팀 운영',
      description:
        '업무 배분, 일정·성과관리, 채용 참여, 예산 산정 및 핵심 기술 의사결정',
    },
  ];

  const technologyGroups = [
    {
      title: '장기 실무 기반',
      content: 'C++, C#, Windows, .NET Framework, MFC, WinForms',
    },
    {
      title: '장비·이미지 연동',
      content: 'RS232, USB, TWAIN, OpenCV, Device SDK',
    },
    {
      title: '최근 제품 확장 경험',
      content: 'Next.js, NestJS, REST API, BullMQ, Redis',
    },
    {
      title: '데이터·운영 환경',
      content: 'PostgreSQL, MariaDB, Docker, AWS, S3 호환 Storage',
    },
    {
      title: '문서·AI 제품',
      content: 'OCR, IDP, Document AI API, 분류·추출·마스킹·검토',
    },
    {
      title: '제품·조직',
      content: '아키텍처, PoC·MVP, 운영 준비, 팀 운영, 기술기획',
    },
  ];

  const projects = [
    {
      title: 'VOIM Image System · AI 문서처리 제품 개발',
      period: '2025~현재',
      description:
        '상용 Document AI를 활용한 문서 분류·추출·마스킹·검토·확정 처리 제품을 설계하고 구현했습니다. Web/API/Worker 기반 중앙 플랫폼과 Windows Scanner Agent를 연결하고, 개인정보 보호·보관 정책·배포·운영 구조 및 내부 POC 리허설까지 수행했습니다.',
      scope:
        '제품 요구사항, 시스템·데이터 아키텍처, 핵심 기능 구현과 기술 검증을 주도했으며 현재는 고객 POC 이전의 제품 고도화 단계입니다.',
    },
    {
      title: '사전투표운용장비 · 본인확인기 개발',
      period: '2022~2024',
      description:
        'ActiveX 기반 장비 연동 구조를 Non-ActiveX Local Server와 REST API 방식으로 전환했습니다. 신분증 스캐너, 지문장비, 서명패드, 사운드 등 여러 장비를 통합하고 OpenCV 기반 매체 검출 기능을 구현했습니다.',
    },
    {
      title: '신분증·문서 스캐너 SDK 개발 및 제품화',
      period: '2014~2023',
      description:
        '여러 종류의 신분증·문서 스캐너를 공통 인터페이스로 제어할 수 있는 SDK와 C++, C#, Java, VB용 샘플을 개발했습니다. 설치 패키지와 기술문서를 포함해 제품화하고 다수 기업 및 금융·공공기관 환경에 적용했습니다.',
    },
    {
      title: '문서 스캐너 제어·드라이버 튜닝',
      period: '2014~2022',
      description:
        '금융·공공기관용 문서 스캐너의 상태 확인, 사용량 관리, 자동 제어 기능을 개발하고 고객 환경별 드라이버 튜닝과 장애 대응을 수행했습니다.',
    },
    {
      title: '금융 자동화기기 소프트웨어',
      period: '2009~2013',
      description:
        '국내외 ATM, 키오스크, 지폐입출금기, 카드리더 등의 제어 프로그램과 RS232 기반 미들웨어를 개발했습니다. 해외 프로젝트 현지화와 CEN/XFS, KAL NDC 기반 연동 업무도 수행했습니다.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1
        className="text-4xl font-extrabold mb-8 border-l-4 pl-4"
        style={{
          color: 'var(--text-main)',
          borderColor: 'var(--accent-color)',
        }}
      >
        Profile
      </h1>

      <div
        className="space-y-12 text-lg"
        style={{ color: 'var(--text-main)' }}
      >
        {/* 소개 */}
        <section>
          <h2
            className="text-3xl font-bold pb-2 border-b mb-4"
            style={{
              color: 'var(--accent-color)',
              borderColor: 'var(--comp-border)',
            }}
          >
            김충범 | 개발팀장 · Senior Software Engineer
          </h2>

          <p
            className="font-semibold leading-relaxed"
            style={{ color: 'var(--text-main)' }}
          >
            Windows 기반 장비·SDK와 금융·공공 솔루션을 중심으로 제품을
            개발해 온 소프트웨어 엔지니어입니다.
          </p>

          <div
            className="mt-4 space-y-3 leading-relaxed"
            style={{ color: 'var(--text-sub)' }}
          >
            <p>
              2009년부터 약 <strong>17년간</strong> 신분증·문서 스캐너,
              본인확인기, 키오스크, ATM 등 장비와 업무시스템을 연결하는
              소프트웨어를 개발해 왔습니다.
            </p>

            <p>
              C++, C#, MFC, WinForms 기반 Windows 응용프로그램과 장비 SDK
              개발을 장기 실무 기반으로 보유하고 있으며, 고객 요구사항 분석,
              인터페이스 설계, 설치·배포, 현장 장애 대응과 유지보수까지 제품
              생명주기 전반을 경험했습니다.
            </p>

            <p>
              최근에는 개발팀장으로 팀 운영과 기술 의사결정을 수행하는 동시에,
              장비·Windows Agent와 Web/API·Worker·AI 서비스를 연결하는 문서처리
              제품을 설계하고 구현하며 기술 범위를 확장하고 있습니다.
            </p>

            <p>
              모든 기술 영역의 전문가를 지향하기보다, 각 영역의 역할과 한계를
              이해하고 장비·소프트웨어·업무 요구를 하나의 제품으로 연결하는 데
              강점을 가지고 있습니다.
            </p>
          </div>
        </section>

        {/* 핵심 역량 */}
        <section>
          <h2
            className="text-2xl font-bold border-l-2 pl-3 mb-5"
            style={{
              color: 'var(--text-main)',
              borderColor: 'var(--accent-color)',
            }}
          >
            핵심 역량
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="p-5 rounded-lg border"
                style={{
                  backgroundColor: 'var(--comp-bg)',
                  borderColor: 'var(--comp-border)',
                }}
              >
                <h3
                  className="font-bold mb-2"
                  style={{ color: 'var(--accent-color)' }}
                >
                  {capability.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-sub)' }}
                >
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 기술 경험 */}
        <section>
          <h2
            className="text-2xl font-bold border-l-2 pl-3 mb-5"
            style={{
              color: 'var(--text-main)',
              borderColor: 'var(--accent-color)',
            }}
          >
            기술 경험
          </h2>

          <p
            className="mb-5 text-base leading-relaxed"
            style={{ color: 'var(--text-sub)' }}
          >
            장기간 사용한 핵심 기술과 최근 제품 개발 과정에서 확장한 기술을
            구분해 정리했습니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {technologyGroups.map((technology) => (
              <div
                key={technology.title}
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: 'var(--comp-bg)',
                  borderColor: 'var(--comp-border)',
                }}
              >
                <p
                  className="font-bold text-sm mb-2"
                  style={{ color: 'var(--accent-color)' }}
                >
                  {technology.title}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-main)' }}
                >
                  {technology.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 주요 프로젝트 */}
        <section>
          <h2
            className="text-2xl font-bold border-l-2 pl-3 mb-5"
            style={{
              color: 'var(--text-main)',
              borderColor: 'var(--accent-color)',
            }}
          >
            주요 프로젝트
          </h2>

          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={`${project.title}-${project.period}`}
                className="p-5 rounded-lg border"
                style={{
                  backgroundColor: 'var(--comp-bg)',
                  borderColor: 'var(--comp-border)',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: 'var(--text-main)' }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--accent-color)' }}
                  >
                    {project.period}
                  </span>
                </div>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-sub)' }}
                >
                  {project.description}
                </p>

                {project.scope && (
                  <p
                    className="text-sm leading-relaxed mt-3 pt-3 border-t"
                    style={{
                      color: 'var(--text-sub)',
                      borderColor: 'var(--comp-border)',
                    }}
                  >
                    <strong style={{ color: 'var(--text-main)' }}>
                      수행 범위:
                    </strong>{' '}
                    {project.scope}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* 개발팀 운영 */}
        <section>
          <h2
            className="text-2xl font-bold border-l-2 pl-3 mb-5"
            style={{
              color: 'var(--text-main)',
              borderColor: 'var(--accent-color)',
            }}
          >
            개발팀 운영 및 업무 방식
          </h2>

          <div
            className="text-base leading-relaxed space-y-3"
            style={{ color: 'var(--text-sub)' }}
          >
            <p>
              개발팀장으로서 팀 목표와 업무를 구체적인 결과물 단위로 나누고,
              구성원의 경험과 강점에 따라 업무를 배분하는 방식을 중요하게
              생각합니다.
            </p>

            <p>
              모든 구현을 직접 수행하기보다 구성원이 더 잘할 수 있는 일은
              위임하고, 아키텍처·핵심 기술·품질·운영 위험처럼 최종 판단이 필요한
              부분에 직접 참여하는 것을 선호합니다.
            </p>

            <p>
              팀 예산 산정, 채용 참여, 성과관리, 프로젝트 우선순위와 기술
              의사결정을 수행해 왔으며, 기술적 완성도뿐 아니라 일정·비용·제품의
              지속 가능성을 함께 고려합니다.
            </p>

            <p>
              어려운 문제와 넓은 업무 범위를 피하기보다, 구성원들이 같은 목표와
              책임을 공유하고 경험을 조직의 자산으로 축적할 수 있는 환경을
              중요하게 생각합니다.
            </p>
          </div>
        </section>

        {/* 기타 경험 */}
        <section>
          <h2
            className="text-2xl font-bold border-l-2 pl-3 mb-4"
            style={{
              color: 'var(--text-main)',
              borderColor: 'var(--accent-color)',
            }}
          >
            기타 제품 개발 경험
          </h2>

          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-sub)' }}
          >
            Unity 기반 소규모 개발팀을 구성하여 Android 게임 2종을 기획·개발·
            출시한 경험이 있습니다. 또한 본인인증 기반 무인주차 할인 솔루션,
            ERP 데이터 분석 기반 B2B 파트너몰, 음성·관제·업무자동화 관련 신규
            제품과 사업의 기술 타당성 검토를 수행했습니다.
          </p>
        </section>

        {/* 연락처 */}
        <div
          className="pt-6 border-t mt-8 text-base leading-relaxed"
          style={{
            borderColor: 'var(--comp-border)',
            color: 'var(--text-sub)',
          }}
        >
          <p>
            Email:{' '}
            <a
              href="mailto:toonme1@gmail.com"
              className="hover:underline"
              style={{ color: 'var(--accent-color)' }}
            >
              toonme1@gmail.com
            </a>
            {' / '}
            <a
              href="mailto:toonme@nate.com"
              className="hover:underline"
              style={{ color: 'var(--accent-color)' }}
            >
              toonme@nate.com
            </a>
          </p>

          <p>
            Blog:{' '}
            <a
              href="https://choongbeom.github.io"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              style={{ color: 'var(--accent-color)' }}
            >
              choongbeom.github.io
            </a>
          </p>

          <p>
            GitHub:{' '}
            <a
              href="https://github.com/choongbeom"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              style={{ color: 'var(--accent-color)' }}
            >
              github.com/choongbeom
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}