import type { NextApiRequest, NextApiResponse } from 'next';
import type { ArticleType, DefaultApiResponse } from '@/app/types';
import { apiKey } from '@/middlewares';
import { getArticles } from '@/helpers';

export default async function get(
  req: NextApiRequest,
  res: NextApiResponse<DefaultApiResponse<ArticleType[]>>,
): Promise<void> {
  // Step 1: Validate the API key
  const checkApiKey = await apiKey(req);

  if (!checkApiKey) {
    res.status(401).json({
      status: 'error',
      message: 'Missing API key',
    });
    return;
  }
  // End Step 1

  // Step 2: Get the articles
  const { query } = req;
  const { limit, offset } = query as unknown as { limit: number, offset: number };

  if (limit && offset) {
    // Step 2.1: Get the articles with limit and offset
    const articles = await getArticles(limit, offset);

    if (articles && articles.length > 0) {
      res.status(200).json({
        status: 'ok',
        message: 'Success',
        data: articles,
      });
      return;
    }

    res.status(404).json({
      status: 'error',
      message: 'Not found',
    });
    return;
  }

  // Step 2.2: Get all the articles without limit and offset
  const articles = await getArticles(undefined);

  if (articles && articles.length > 0) {
    res.status(200).json({
      status: 'ok',
      message: 'Success',
      data: articles,
    });
    return;
  }

  res.status(404).json({
    status: 'error',
    message: 'Not found',
  });
  // End Step 2
}
