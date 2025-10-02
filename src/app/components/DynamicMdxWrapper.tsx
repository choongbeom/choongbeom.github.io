// src/app/components/DynamicMdxWrapper.tsx
'use client';

import dynamic from 'next/dynamic';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXCustomComponents } from './MdxComponents'; 

const DynamicMdxRenderer = dynamic(
    () => import('./MdxRenderer').then(mod => mod.MdxRenderer),
    { 
        ssr: false, 
        loading: () => <p style={{ color: 'var(--text-sub)' }}>포스트를 불러오는 중입니다...</p> 
    }
);

interface DynamicMdxWrapperProps {
    mdxSource: MDXRemoteSerializeResult;
}

// DynamicMdxRenderer (Hooks 사용 가능)에게 전달하는 역할만 합니다.
export function DynamicMdxWrapper({ mdxSource }: DynamicMdxWrapperProps) {
    return (
        <DynamicMdxRenderer 
            mdxSource={mdxSource} 
            components={MDXCustomComponents} 
        />
    );
}