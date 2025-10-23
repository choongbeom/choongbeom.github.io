import fg from 'fast-glob';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Feed } from 'feed';

const SITE_URL = 'https://choongbeom.github.io';
const RSS_PATH = path.join(process.cwd(), 'public', 'feed.xml');

// src/app 아래의 파일은 파일 시스템 라우팅을 통해 URL을 만들 수 있고,
// 그 외 위치는 frontmatter의 route/slug를 우선 사용합니다.
function buildPostUrl(filePath: string, data: any) {
  // 1) frontmatter에 route가 있으면 그대로 사용 (가장 우선)
  if (data?.route) return SITE_URL + (data.route.startsWith('/') ? data.route : `/${data.route}`);

  // 2) frontmatter에 slug가 있으면 /posts/slug로 매핑 (원하시면 /blog/로 변경)
  if (data?.slug) return `${SITE_URL}/posts/${data.slug}`;

  // 3) src/app 내부라면 파일 시스템 라우팅으로 URL 유추
  const appDir = path.join(process.cwd(), 'src', 'app');
  if (filePath.startsWith(appDir)) {
    let rel = path.relative(appDir, filePath).replace(/\\/g, '/'); // Windows 경로 대응
    // /app/foo/bar/page.mdx → /foo/bar
    rel = rel.replace(/\/?(page)?\.mdx?$/i, '');
    if (!rel.startsWith('/')) rel = '/' + rel;
    return SITE_URL + rel;
  }

  // 4) 그 외엔 파일명 기반 기본 규칙
  const slug = path.basename(filePath).replace(/\.mdx?$/i, '');
  return `${SITE_URL}/posts/${slug}`;
}

// 여기가 핵심: src 전체에서 md/mdx를 탐색 (node_modules/.next 제외)
function getPosts() {
  const patterns = [
    'src/**/*.mdx',
    'src/**/*.md',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/dist/**',
  ];
  const entries = fg.sync(patterns, { dot: false });

  if (entries.length === 0) {
    console.warn('MDX/MD 파일을 찾지 못했습니다. 패턴을 프로젝트 구조에 맞게 조정하세요.');
  } else {
    console.log(`MDX/MD 파일 ${entries.length}건 발견`);
  }

  const posts = entries.map((fp) => {
    const raw = fs.readFileSync(fp, 'utf-8');
    const { data, content } = matter(raw);

    const stat = fs.statSync(fp);
    const date = data?.date ? new Date(data.date) : stat.mtime;

    return {
      title: data?.title ?? path.basename(fp),
      description: data?.description ?? '',
      tags: Array.isArray(data?.tags) ? (data.tags as string[]) : [],
      url: buildPostUrl(path.resolve(fp), data),
      date,
      content,
    };
  });

  // 최신순
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return posts;
}

function main() {
  const feed = new Feed({
    title: 'Choongbeom.dev | 시스템 엔지니어링 & 개발 성장 블로그',
    description: '기술 블로그 RSS 피드',
    id: SITE_URL,
    link: SITE_URL,
    language: 'ko',
    favicon: `${SITE_URL}/favicon.ico`,
    updated: new Date(),
    copyright: `© ${new Date().getFullYear()} Choongbeom Kim. All rights reserved.`,
    feedLinks: { rss: `${SITE_URL}/feed.xml` },
    author: { name: 'Choongbeom Kim', link: SITE_URL },
  });

  const posts = getPosts();
  posts.forEach((p) => {
    feed.addItem({
      title: p.title,
      id: p.url,
      link: p.url,
      date: p.date,
      description: p.description,
      category: p.tags.map((t) => ({ name: t })),
    });
  });

  fs.writeFileSync(RSS_PATH, feed.rss2(), 'utf-8');
  console.log(`RSS generated: ${RSS_PATH}`);
}

main();
