import { useCallback, useEffect } from 'react';

const useInfiniteScroll = (scrollRef: any, dispatch: any) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en: any) => {
          if (en.intersectionRatio > 0) {
            dispatch();
          }
        });
      }).observe(node);
    },
    [dispatch],
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};

export default useInfiniteScroll;
