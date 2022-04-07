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
  const { limit, offset } = query as unknown as { limit?: number, offset?: number };

  const { length: total } = await getArticles();

  if (limit && offset) {
    const limitNumber = Number(limit);
    const offsetNumber = Number(offset);

    if (Number.isNaN(limitNumber) || Number.isNaN(offsetNumber)) {
      res.status(400).json({
        status: 'error',
        message: 'limit and/or offset must be a number',
      });
      return;
    }

    if (limitNumber <= 0) {
      res.status(400).json({
        status: 'error',
        message: 'limit or offset must be greater than 0',
      });
      return;
    }

    // Step 2.1: Get the articles with limit and offset
    const articles = await getArticles(limit, (offset || 0));

    if (articles && articles.length > 0) {
      res.status(200).json({
        status: 'ok',
        message: 'Success',
        data: articles,
        total,
      });
      return;
    }

    res.status(404).json({
      status: 'error',
      message: 'Not found',
    });
    return;
  }

  // Step 2.2: Get all the articles with limit = 10 and offset = 0
  const articles = await getArticles(10, 0);

  res.status(200).json({
    status: 'ok',
    message: 'Articles fetched successfully',
    data: articles,
    total,
  });
  // End Step 2
}
