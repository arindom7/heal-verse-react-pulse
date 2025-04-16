
import { useRef, useEffect } from 'react';
import * as anime from 'animejs';

type AnimeParams = Parameters<typeof anime>[0];

export function useAnimeEffect<T extends HTMLElement>(
  animeParams: Omit<AnimeParams, 'targets'>,
  dependencies: any[] = []
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (elementRef.current) {
      anime({
        targets: elementRef.current,
        ...animeParams,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, ...dependencies]);

  return elementRef;
}
