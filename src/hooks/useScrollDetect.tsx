// hooks/useScrollDetect.js
import { useState, useEffect } from 'react';

const useScrollDetect = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    const handleScroll = () => {
      if (!isScrolling) setIsScrolling(true);

      clearTimeout(timer);
      timer = setTimeout(() => setIsScrolling(false), 1500); // Adjust the timeout as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, [isScrolling]);

  return isScrolling;
};

export default useScrollDetect;
