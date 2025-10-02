// src/app/lib/styles.ts

/**
 * CATEGORY_COLOR_MAP의 색상 키워드에 따라
 * 태그 및 카테고리 렌더링에 사용되는 Tailwind CSS 클래스 문자열을 반환하는 공용 함수입니다.
 * * @param color CATEGORY_COLOR_MAP의 값 (예: 'teal', 'fuchsia', 'amber')
 * @returns 해당 색상에 대한 Tailwind CSS 클래스 문자열
 */
export function getTagColorClass(color: string): string {
    
    // 기본(Default) 색상인 'gray' 클래스 정의
    const grayClasses = 'border-gray-300 bg-gray-50 text-gray-700 dark:border-gray-700 dark:bg-gray-700/50 dark:text-gray-300';
    
    switch (color) {
        case 'indigo':
            return 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300';
        case 'red':
            return 'border-red-500 bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-300';
        case 'blue':
            return 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300';
        case 'yellow':
            return 'border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300';
        case 'green':
            return 'border-green-500 bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-300';
        case 'teal':
            return 'border-teal-500 bg-teal-50 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300';
        case 'cyan':
            return 'border-cyan-500 bg-cyan-50 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300';
        case 'emerald':
            return 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300';
        case 'lime':
            return 'border-lime-500 bg-lime-50 text-lime-700 dark:bg-lime-900/50 dark:text-lime-300';
        case 'pink':
            return 'border-pink-500 bg-pink-50 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300';
        case 'purple':
            return 'border-purple-500 bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300';
        case 'violet':
            return 'border-violet-500 bg-violet-50 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300';
        case 'fuchsia':
            return 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-300';
        case 'orange':
            return 'border-orange-500 bg-orange-50 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300';
        case 'amber':
            return 'border-amber-500 bg-amber-50 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300';
        
        case 'gray':
        default:
            // 'gray'로 명시되었거나, 맵에 정의되지 않은 모든 색상에 대해 기본값 적용
            return grayClasses;
    }
}