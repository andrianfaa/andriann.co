import type { NextApiRequest, NextApiResponse } from 'next';
import type { DefaultApiResponse, PortfolioType } from '@/app/types';
import { apiKey } from '@/middlewares';
import { getPortfolio } from '@/helpers';

export default async function Portfolio(
  req: NextApiRequest,
  res: NextApiResponse<DefaultApiResponse<PortfolioType[]>>,
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
  const { limit, offset } = req.query as { limit?: string; offset?: string };

  const { length: total } = await getPortfolio();

  if (total === 0) {
    res.status(404).json({
      status: 'error',
      message: 'no portfolios found',
    });
    return;
  }

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
    const portfolios: PortfolioType[] = await getPortfolio(limitNumber, offset ? Number(offset) : 0);

    if (portfolios && portfolios.length > 0) {
      res.status(200).json({
        status: 'ok',
        message: 'Success',
        data: portfolios.sort((a, b) => b.date.localeCompare(a.date)),
        total,
      });
      return;
    }

    res.status(404).json({
      status: 'error',
      message: 'no portfolios found',
    });
    return;
  }

  // Step 2.2: Get all the articles with limit = 10 and offset = 0
  const portfolios = await getPortfolio(10, 0);

  res.status(200).json({
    status: 'ok',
    message: 'portfolios fetched successfully',
    data: portfolios,
    total,
  });
}
