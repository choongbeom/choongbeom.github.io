// src/app/about/page.tsx
import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      
      {/* 제목 색상 및 경계선 색상 적용 */}
      <h1 
        className="text-4xl font-extrabold mb-8 border-l-4 pl-4"
        style={{ 
            color: 'var(--text-main)', 
            borderColor: 'var(--accent-color)' 
        }}
      >
        Profile
      </h1>

      {/* 본문 텍스트 색상 적용: --text-main 사용 */}
      <div 
        className="space-y-10 text-lg"
        style={{ color: 'var(--text-main)' }}
      >
        
        <section>
            <h2 
                className="text-3xl font-bold pb-2 border-b mb-4"
                style={{ color: 'var(--accent-color)', borderColor: 'var(--comp-border)' }}
            >
                김충범 | Senior Software Engineer
            </h2>
            <p className="font-semibold" style={{ color: 'var(--text-main)' }}>
                Windows 기반 장비 제어 및 본인확인 시스템 전문가
            </p>
            <p className='mt-2'>
                금융 및 공공기관 대상 스캐너 시스템, 본인확인 솔루션, 자동화 기기 개발을 <b>16년간</b> 수행해 왔습니다. 
                C++, C#, .NET, Java 기반의 응용프로그램 및 API 연동 개발에 능하며, 기획부터 개발·운영까지 주도적으로 경험했습니다.
                특히 장비 제어 소프트웨어, PoC 및 MVP 개발, 웹 시스템 연동 경험까지 폭넓은 기술 스펙트럼을 갖추고 있습니다.
            </p>
        </section>

        <section>
            <h2 
                className="text-2xl font-bold border-l-2 pl-3 mb-4"
                style={{ color: 'var(--text-main)', borderColor: 'var(--accent-color)' }}
            >
                🛠 보유 기술 스택
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-base pt-2">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--comp-bg)' }}>
                    <p className="font-bold text-sm" style={{ color: 'var(--accent-color)' }}>주요 언어</p>
                    <p>C++, C#</p>
                </div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--comp-bg)' }}>
                    <p className="font-bold text-sm" style={{ color: 'var(--accent-color)' }}>보조 언어</p>
                    <p>Java, JavaScript</p>
                </div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--comp-bg)' }}>
                    <p className="font-bold text-sm" style={{ color: 'var(--accent-color)' }}>프레임워크</p>
                    <p>.NET, MFC, Spring Boot</p>
                </div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--comp-bg)' }}>
                    <p className="font-bold text-sm" style={{ color: 'var(--accent-color)' }}>장비 연동</p>
                    <p>RS232, USB, TWAIN, OpenCV</p>
                </div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--comp-bg)' }}>
                    <p className="font-bold text-sm" style={{ color: 'var(--accent-color)' }}>웹/API</p>
                    <p>RESTful API, HTML/CSS/JS</p>
                </div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--comp-bg)' }}>
                    <p className="font-bold text-sm" style={{ color: 'var(--accent-color)' }}>DB/Infra</p>
                    <p>MariaDB, MySQL, AWS, Docker</p>
                </div>
            </div>
        </section>
        
        <section>
            <h2 
                className="text-2xl font-bold border-l-2 pl-3 mb-4"
                style={{ color: 'var(--text-main)', borderColor: 'var(--accent-color)' }}
            >
                💼 주요 프로젝트 요약
            </h2>
            <ul className="list-disc list-inside space-y-4 pl-4 pt-2 text-base">
                <li className="font-semibold">사전투표 본인확인기 개발 (2022~2024)</li>
                <p className="text-sm" style={{ color: 'var(--text-sub)' }}>
                    ActiveX 제거 및 웹 기반 구조로 전환, 신분증 스캐너·지문 등 장비 4종 연동, OpenCV 기반 매체 검출 알고리즘 구현.
                </p>
                <li className="font-semibold">문서 및 신분증 스캐너 SDK 개발 (2014~2023)</li>
                <p className="text-sm" style={{ color: 'var(--text-sub)' }}>
                    C++, C#, Java 등 멀티 언어 범용 SDK 및 샘플 제공. 금융/공공기관 대상 커스터마이징 적용.
                </p>

                <li className="font-semibold">무인주차 할인 간소화 솔루션 (2024)</li>
                <p className="text-sm" style={{ color: 'var(--text-sub)' }}>
                    정부24 연계 자동 자격 확인 및 Spring Boot 기반 API 서버 설계.
                </p>
                <li className="font-semibold">금융 자동화기기 제어 소프트웨어 개발 (2009~2013)</li>
                <p className="text-sm" style={{ color: 'var(--text-sub)' }}>
                    국내외 ATM/키오스크 제어 소프트웨어 개발, RS232 통신 및 미들웨어 구축.
                </p>
            </ul>
        </section>

        <section>
            <h2 
                className="text-2xl font-bold border-l-2 pl-3 mb-4"
                style={{ color: 'var(--text-main)', borderColor: 'var(--accent-color)' }}
            >
                🎮 기타 경험 (게임 개발)
            </h2>
            <p className="text-base pt-2">
                Unity 기반 3인 개발팀 운영 및 <b>Android 게임 2종 출시</b> (망치쾅쾅쾅, 산수의 모험). 디자인, 개발, 배포 전 과정을 주도적으로 수행했습니다.
            </p>
        </section>
        
        {/* 연락처 및 블로그 정보 */}
        <div 
            className="pt-6 border-t mt-8"
            style={{ 
                borderColor: 'var(--comp-border)',
                color: 'var(--text-sub)'
            }}
        >
            <p>
            Email: <a href="mailto:toonme1@gmail.com" className="hover:underline" style={{ color: 'var(--accent-color)' }}>toonme1@gmail.com</a> / <a href="mailto:toonme@nate.com" className="hover:underline" style={{ color: 'var(--accent-color)' }}>toonme@nate.com</a>
            </p>
            <p>Blog: <a href="https://choongbeom.github.io" className="hover:underline" style={{ color: 'var(--accent-color)' }}>choongbeom.github.io</a></p>
            <p>GitHub: <a href="https://github.com/choongbeom" className="hover:underline" style={{ color: 'var(--accent-color)' }}>github.com/choongbeom</a></p>
        </div>
      </div>
    </div>
  );
}