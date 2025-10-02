// src/app/components/GiscusComments.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes'; 

const GiscusComments: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();

    const REPO = 'choongbeom/choongbeom-blog-next'; // data-repo
    const REPO_ID = 'R_kgDOP6Hmaw';                 // data-repo-id
    const CATEGORY = 'General';                     // data-category
    const CATEGORY_ID = 'DIC_kwDOP6Hma84CwIax';     // data-category-id

    // 현재 설정된 테마에 따른 Giscus 테마 선택
    // 사용자님이 작성하신 코드를 그대로 사용합니다.
    const giscusTheme = resolvedTheme === 'dark' 
        ? 'noborder_dark' 
        : 'noborder_light';

    useEffect(() => {
        if (!ref.current) return;

        // Giscus 위젯이 이미 로드되었는지 확인
        const existingScript = ref.current.querySelector('script');

        if (existingScript) {
            // ----------------------------------------------------
            // A. Giscus가 이미 로드된 경우: 테마만 변경하는 메시지를 보냅니다.
            // ----------------------------------------------------
            
            const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(
                    {
                        giscus: {
                            setConfig: {
                                theme: giscusTheme,
                            },
                        },
                    },
                    'https://giscus.app' // Giscus 오리진
                );
            }
            
        } else {
            // ----------------------------------------------------
            // B. Giscus가 처음 로드되는 경우: 스크립트를 삽입합니다.
            // ----------------------------------------------------
            const script = document.createElement('script');
            script.src = 'https://giscus.app/client.js';
            script.async = true;
            script.crossOrigin = 'anonymous';

            // Giscus 설정을 data-* 속성으로 전달
            script.setAttribute('data-repo', REPO);
            script.setAttribute('data-repo-id', REPO_ID);
            script.setAttribute('data-category', CATEGORY);
            script.setAttribute('data-category-id', CATEGORY_ID);
            script.setAttribute('data-mapping', 'pathname'); // 현재 포스트 URL로 매핑
            script.setAttribute('data-strict', '0');
            script.setAttribute('data-reactions-enabled', '1');
            script.setAttribute('data-emit-metadata', '0');
            script.setAttribute('data-input-position', 'bottom');
            script.setAttribute('data-theme', giscusTheme);
            script.setAttribute('data-lang', 'ko');

            ref.current.appendChild(script);
        }
    }, [resolvedTheme, giscusTheme]); // resolvedTheme이 변경될 때마다 useEffect가 다시 실행됨

    return <div ref={ref} className="giscus-container pt-8" />;
};

export default GiscusComments;