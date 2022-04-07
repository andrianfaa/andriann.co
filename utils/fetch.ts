import config from '@/app/config';
import axios from 'redaxios';
import type { Options } from 'redaxios';

const apiKey = process.env.API_KEY as string;

if (!apiKey) {
  throw new Error('Missing API key in .env');
}

type Method = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD' | undefined

const fetchInstance = async <T>(url: string, method: Method, options: Options = {}): Promise<any> => axios<T>({
  url: config.baseUrl(url),
  method,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  },
  ...options,
});

export default fetchInstance;
