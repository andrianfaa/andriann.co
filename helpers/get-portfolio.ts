import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Limit = number | null;
type OffSet = number | null;

export default async function getPortfolio(limit: Limit = null, offset: OffSet = 0): Promise<any> {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), '/pages/portfolio'), {
    withFileTypes: true,
  });

  const portfolios = dirFiles.map((file) => {
    if (!file.name.endsWith('.mdx')) return null;

    const filePath = path.join(process.cwd(), '/pages/portfolio', file.name);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      ...data,
      content,
    };
  }).filter((portfolio) => portfolio);

  if (limit) {
    return Promise.resolve(portfolios.slice((offset || 0), (offset || 0) + limit));
  }

  return Promise.resolve(portfolios);
}
