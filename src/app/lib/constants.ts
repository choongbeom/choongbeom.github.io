// src/lib/constants.ts

// 카테고리/태그 슬러그에 따른 색상 매핑을 정의합니다.
// 이 맵은 블로그 전반(홈, 포스트 목록, 포스트 카드 등)에서 사용됩니다.
export const CATEGORY_COLOR_MAP: { [key: string]: string } = {
    'java-spring': 'indigo',
    'cpp-windows-control': 'red',
    'backend-db': 'gray',
    'devops': 'blue',
    'til': 'yellow',
    'javascript': 'green',
    'java': 'teal',
    'backend': 'cyan',
    'ssg': 'emerald',
    'async': 'lime',
    'frontend': 'pink',
    'nextjs': 'purple', 
    'githubactions': 'violet', 
    'docker': 'fuchsia', 
    'pwa': 'orange',
    'optimizing': 'amber',
    'db': 'gray',
};

export type CategoryColorMap = typeof CATEGORY_COLOR_MAP;
