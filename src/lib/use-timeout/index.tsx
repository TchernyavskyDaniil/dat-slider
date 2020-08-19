import { useEffect } from 'react';

export const useTimeout = ({
  callback,
  ms,
  optionsTriggers,
}: {
  callback: Function;
  ms: number;
  optionsTriggers?: any;
}) => {
  useEffect(() => {
    const interval = setInterval(callback, ms);
    return () => clearTimeout(interval);
  }, [callback, ms, optionsTriggers]);
};
