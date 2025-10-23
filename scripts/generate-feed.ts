import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Feed } from 'feed';

const siteUrl = 'https://choongbeom.github.io'; // 절대 URL 필수
const postsDir = path.join(process.cwd(), 'src/app/posts', 'mdx');
const outRssPath = path.join(process.cwd(), 'public', 'feed.xml');

function getPosts() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  const posts = files.map(filename => {
    const slug = filename.replace(/\.mdx?$/, '');
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: new Date(data.date ?? new Date()),
      description: data.description ?? '',
      tags: (data.tags ?? []) as string[],
      // 포스트 경로 규칙에 맞게 수정
      url: `${siteUrl}/posts/${slug}`,
      content,
    };
  });
  // 최신순
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return posts;
}

async function main() {
    const feed = new Feed({
        title: 'Choongbeom.dev | 시스템 엔지니어링 & 개발 성장 블로그',
        description: '기술 블로그 RSS 피드',
        id: siteUrl,
        link: siteUrl,
        language: 'ko',
        favicon: `${siteUrl}/favicon.ico`,
        updated: new Date(),
        copyright: `© ${new Date().getFullYear()} Choongbeom Kim. All rights reserved.`,
        feedLinks: { rss: `${siteUrl}/feed.xml` },
        author: { name: 'Choongbeom Kim', link: siteUrl },
        });

    const posts = getPosts();
    posts.forEach(p => {
        feed.addItem({
        title: p.title,
        id: p.url,
        link: p.url,
        date: p.date,
        description: p.description,
        category: p.tags.map(t => ({ name: t })),
        });
    });

    // RSS 2.0로 생성 (필요하면 atom1(), json1()도 추가 생성 가능)
    fs.writeFileSync(outRssPath, feed.rss2(), 'utf-8');
    console.log(`RSS generated: ${outRssPath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
