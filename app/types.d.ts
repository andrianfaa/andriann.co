export interface ArticleType {
  id: string | number;
  title: string;
  description: string;
  date: string;
  content: string;
  date: string;
  image: string;
  url: string;
  slug: string;
  excerpt: string;
}

export interface DefaultApiResponse<T> {
  status: 'ok' | 'error';
  message?: string;
  data?: T;
}
