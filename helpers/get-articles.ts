import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Limit = number | null;
type OffSet = number | null;

const getArticles = async (limit: Limit = null, offset: OffSet = 0): Promise<any> => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), '/pages/article'), {
    withFileTypes: true,
  });

  /**
   * @description
   * Get all files .mdx from the article directory
   */
  const articles = dirFiles.map((article) => {
    // Check if the files ends with .mdx
    if (!article.name.endsWith('.mdx')) return null;

    const filePath = path.join(process.cwd(), '/pages/article', article.name);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      ...data,
      content,
    };
  }).filter((article) => article).sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (limit) {
    return Promise.resolve(articles.slice(offset || 0, (offset || 0) + limit));
  }

  return Promise.resolve(articles);
};

export default getArticles;
