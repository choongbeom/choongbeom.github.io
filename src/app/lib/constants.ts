// src/lib/constants.ts

// 카테고리/태그 슬러그에 따른 색상 매핑을 정의합니다.
// 이 맵은 블로그 전반(홈, 포스트 목록, 포스트 카드 등)에서 사용됩니다.
export const CATEGORY_COLOR_MAP: { [key: string]: string } = {
    // 백엔드/프론트엔드
    'backend': 'indigo',
    'frontend': 'pink',        // 변경됨 (고유 색상)
    'database': 'cyan',
    
    // 개발 환경 및 인프라
    'github': 'purple',
    'devops': 'blue',
    'swagger': 'violet',
    
    // 언어 및 프레임워크
    'c-language': 'red',
    'java': 'orange',          // 변경됨 (고유 색상)
    'spring': 'emerald',       // 변경됨 (고유 색상)
    'javascript': 'green',
    'orm': 'amber',            // 변경됨 (고유 색상)

    // 모바일
    'flutter': 'teal',         // 변경됨 (고유 색상)
    'dart': 'cyan',            // 변경됨 (고유 색상)

    // 메타 및 기타
    'retrospective': 'yellow',
    'profile': 'lime',         // 변경됨 (고유 색상)
    'etc': 'gray',
};

export type CategoryColorMap = typeof CATEGORY_COLOR_MAP;
