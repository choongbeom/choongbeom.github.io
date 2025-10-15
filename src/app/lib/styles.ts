// src/app/lib/styles.ts

/**
 * CATEGORY_COLOR_MAP의 색상 키워드에 따라
 * 태그 및 카테고리 렌더링에 사용되는 Tailwind CSS 클래스 문자열을 반환하는 공용 함수입니다.
 * * @param color CATEGORY_COLOR_MAP의 값 (예: 'teal', 'fuchsia', 'amber')
 * @returns 해당 색상에 대한 Tailwind CSS 클래스 문자열
 */
export function getTagColorClass(color: string): string {
    // 기본(Default) 색상: gray
    const grayClasses =
        'border-gray-300 bg-gray-50 text-gray-700 dark:border-gray-700 dark:bg-gray-700/50 dark:text-gray-300';

    switch (color) {
        // 🔵 Blue 계열
        case 'blue':
            return 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300';
        case 'sky':
            return 'border-sky-500 bg-sky-50 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300';
        case 'cyan':
            return 'border-cyan-500 bg-cyan-50 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300';
        case 'indigo':
            return 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300';
        case 'violet':
            return 'border-violet-500 bg-violet-50 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300';

        // 🟢 Green 계열
        case 'green':
            return 'border-green-500 bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-300';
        case 'emerald':
            return 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300';
        case 'teal':
            return 'border-teal-500 bg-teal-50 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300';
        case 'lime':
            return 'border-lime-500 bg-lime-50 text-lime-700 dark:bg-lime-900/50 dark:text-lime-300';

        // 🔴 Red / Pink 계열
        case 'red':
            return 'border-red-500 bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-300';
        case 'rose':
            return 'border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300';
        case 'pink':
            return 'border-pink-500 bg-pink-50 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300';
        case 'fuchsia':
            return 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-300';
        case 'purple':
            return 'border-purple-500 bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300';

        // 🟠 Yellow / Orange 계열
        case 'orange':
            return 'border-orange-500 bg-orange-50 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300';
        case 'amber':
            return 'border-amber-500 bg-amber-50 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300';
        case 'yellow':
            return 'border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300';

        // ⚪ Neutral / Gray 계열
        case 'gray':
            return 'border-gray-500 bg-gray-50 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300';
        case 'slate':
            return 'border-slate-500 bg-slate-50 text-slate-700 dark:bg-slate-900/50 dark:text-slate-300';
        case 'zinc':
            return 'border-zinc-500 bg-zinc-50 text-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300';
        case 'neutral':
            return 'border-neutral-500 bg-neutral-50 text-neutral-700 dark:bg-neutral-900/50 dark:text-neutral-300';
        case 'stone':
            return 'border-stone-500 bg-stone-50 text-stone-700 dark:bg-stone-900/50 dark:text-stone-300';

        // 🟣 기타 색상 (보호용)
        case 'brown': // Tailwind에는 기본 brown 없음 → 확장 팔레트용
            return 'border-amber-800 bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-200';
        case 'black':
            return 'border-black bg-black text-white dark:bg-black dark:text-gray-200';
        case 'white':
            return 'border-gray-200 bg-white text-gray-800 dark:bg-gray-200 dark:text-gray-900';
        case 'transparent':
            return 'border-transparent bg-transparent text-gray-700 dark:text-gray-300';

        // ⚙️ 기본값
        default:
            return grayClasses;
    }
}