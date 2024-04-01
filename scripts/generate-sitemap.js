const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env.local' });

async function generateSitemap() {
  const api = process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:4000/v1/articles/ids';
  const response = await fetch(api);
  const json = await response.json();
  const { articleIds } = json.data;

  const sitemapUrls = articleIds.map(
    (articleId) => `
    <url>
      <loc>https://imkdw.dev/articles/${articleId}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `,
  );

  // XML 사이트맵 생성
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapUrls.join('')}
    </urlset>
  `.trim();

  // 사이트맵 파일 저장
  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
