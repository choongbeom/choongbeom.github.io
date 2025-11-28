// src/lib/constants.ts

// 카테고리/태그 슬러그에 따른 색상 매핑을 정의합니다.
// 이 맵은 블로그 전반(홈, 포스트 목록, 포스트 카드 등)에서 사용됩니다.
export const CATEGORY_COLOR_MAP: { [key: string]: string } = {
    // 백엔드/프론트엔드
    'backend': 'blue',
    'frontend': 'sky',       
    'database': 'cyan',
    
    // 개발 환경 및 인프라
    'github': 'indigo',
    'devops': 'violet',
    'swagger': 'green',
    
    // 언어 및 프레임워크
    'c-language': 'emerald',
    'java': 'teal',         
    'spring': 'lime',      
    'javascript': 'red',
    'orm': 'rose',           

    // 모바일
    'flutter': 'pink',        
    'dart': 'fuchsia',    
    
    //학습
    'cs': 'purple',
    'network': 'orange',
    'osi': 'amber',
    'tcp/ip': 'yellow',
    'sorting': 'brown',
    'algorithm': 'slate',

    'stl': 'blue',
    'container': 'sky',
    '기획': 'cyan',   
    '리더십': 'indigo',   

    'http': 'violet',   
    'rest': 'green',   
    'https': 'emerald',   

    // 메타 및 기타
    'ai': 'zinc',
    'retrospective': 'neutral',
    'profile': 'stone',      
    'etc': 'gray',
};

export type CategoryColorMap = typeof CATEGORY_COLOR_MAP;
