// src/app/components/MdxRenderer.tsx
'use client';

import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MdxRendererProps {
    mdxSource: MDXRemoteSerializeResult;
    components: Record<string, React.ComponentType<any>>;
}

export const MdxRenderer: React.FC<MdxRendererProps> = ({ mdxSource, components }) => {
    // Alert, CodeBlock 등 커스텀 컴포넌트 정의가 MDXCustomComponents에 포함되어야 합니다.
    
    // MDXRemote는 Client Component에서 안전하게 사용할 수 있습니다.
    return (
        <MDXRemote 
            {...mdxSource} 
            components={components}
        />
    );
};