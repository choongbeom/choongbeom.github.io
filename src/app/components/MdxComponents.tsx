// src/app/components/MdxComponents.tsx
'use client';

import React from 'react';

type AlertType = 'info' | 'warning' | 'error';

interface AlertProps {
    type: AlertType;
    children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ type, children }) => {
    const baseStyle = 'p-4 my-6 rounded-lg border-l-4 font-medium';
    let typeStyles = '';

    switch (type) {
        case 'info':
            typeStyles = 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-900/50 dark:border-blue-300 dark:text-blue-200';
            break;
        case 'warning':
            typeStyles = 'bg-yellow-50 border-yellow-500 text-yellow-800 dark:bg-yellow-900/50 dark:border-yellow-300 dark:text-yellow-200';
            break;
        case 'error':
            typeStyles = 'bg-red-50 border-red-500 text-red-800 dark:bg-red-900/50 dark:border-red-300 dark:text-red-200';
            break;
        default:
            typeStyles = 'bg-gray-50 border-gray-500 text-gray-800 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300';
    }

    return (
        <div className={`${baseStyle} ${typeStyles}`}>
            {children}
        </div>
    );
};

interface CodeBlockProps {
    children: React.ReactNode;
    className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
    // className을 기반으로 언어를 추출 (예: className="language-typescript")
    const match = /language-(\w+)/.exec(className || '');
    const lang = match ? match[1] : '';

    return (
        <pre className="p-4 my-6 rounded-lg overflow-x-auto bg-gray-900 text-gray-100" style={{ backgroundColor: 'var(--code-bg)', color: 'var(--code-text)' }}>
            {/* 언어 표시 */}
            {lang && (
                <div className="text-right text-xs font-mono text-gray-400 select-none">
                    {lang.toUpperCase()}
                </div>
            )}
            {/* 코드 내용 */}
            <code className={className}>
                {children}
            </code>
        </pre>
    );
};

// CodeBlock 컴포넌트를 ComponentProps로 래핑
const CodeBlockWrapper: React.FC<ComponentProps> = (props) => {
    const { children, className, ...rest } = props;
    return <CodeBlock className={className} {...rest}>{children || ''}</CodeBlock>;
};

interface ComponentProps {
    children?: React.ReactNode;
    className?: string;
    href?: string;
    [key: string]: unknown;
}

// Alert 컴포넌트를 ComponentProps로 래핑
const AlertWrapper: React.FC<ComponentProps> = (props) => {
    const { type = 'info', children, ...rest } = props;
    return <Alert type={type as AlertType} {...rest}>{children}</Alert>;
};

// 이 객체를 PostPage에서 import하여 MdxRenderer로 전달합니다.
export const MDXCustomComponents: Record<string, React.ComponentType<ComponentProps>> = {
    // 기존 HTML 요소 오버라이드 (스타일링 유지)
    h1: (props: ComponentProps) => <h1 className="text-4xl md:text-5xl font-extrabold mb-8 border-l-4 pl-3" style={{ color: 'var(--text-main)', borderColor: 'var(--accent-color)' }} {...props} />,
    h2: (props: ComponentProps) => <h2 className="text-3xl md:text-4xl font-extrabold mt-10 mb-6 border-l-4 pl-3" style={{ color: 'var(--text-main)', borderColor: 'var(--accent-color)' }} {...props} />,
    h3: (props: ComponentProps) => <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3" style={{ color: 'var(--text-main)' }} {...props} />,
    p: (props: ComponentProps) => <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-main)' }} {...props} />,
    a: (props: ComponentProps) => <a className="underline font-medium hover:text-indigo-500 transition-colors" style={{ color: 'var(--accent-color)' }} {...props} />,
    ul: (props: ComponentProps) => <ul className="list-disc pl-8 mb-6 text-lg" style={{ color: 'var(--text-main)' }} {...props} />,
    ol: (props: ComponentProps) => <ol className="list-decimal pl-8 mb-6 text-lg" style={{ color: 'var(--text-main)' }} {...props} />,
    li: (props: ComponentProps) => <li className="mb-2" {...props} />,
    blockquote: (props: ComponentProps) => (
        <blockquote className="p-4 my-6 border-l-4 border-gray-400 bg-gray-50 dark:bg-gray-800/50 italic text-gray-600 dark:text-gray-300" {...props} />
    ),
    code: (props: ComponentProps) => <code className="bg-gray-200 dark:bg-gray-700 rounded-md px-1 py-0.5 text-sm" style={{ color: 'var(--text-main)' }} {...props} />,
    // pre는 CodeBlock을 사용해야 하지만, MDX는 <pre> 안에 <code>가 오도록 처리하므로, 
    // <pre> 태그 대신 CodeBlock 컴포넌트를 직접 사용하도록 오버라이드합니다.
    pre: CodeBlockWrapper, 

    // 커스텀 컴포넌트 매핑
    Alert: AlertWrapper,
    // CodeBlock은 위에서 pre로 매핑했으므로 생략 가능합니다.
};