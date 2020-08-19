import { useEffect } from 'react';

export const useInterval = ({ callback, ms }: { callback: Function; ms: number }) => {
  useEffect(() => {
    const interval = setInterval(callback, ms);
    return () => clearInterval(interval);
  }, [callback, ms]);
};
