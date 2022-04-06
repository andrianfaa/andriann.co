/* eslint-disable max-len */
import type { NextApiRequest } from 'next';

export default async function apiKey(
  req: NextApiRequest,
): Promise<boolean> {
  const xApiKey = req.headers['x-api-key'];
  const key = process.env.API_KEY as string;

  if (!apiKey) {
    throw new Error('API key is not defined');
  }

  if (!xApiKey) {
    return false;
  }

  if (xApiKey !== key) {
    return false;
  }

  return true;
}
