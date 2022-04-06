import { useState, useEffect } from 'react';

export interface UseDebounceProps<T> {
  value: T | undefined;
  delay: number;
}

export default function useDebounce<T>(value: T | undefined, delay: number): T | undefined {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
