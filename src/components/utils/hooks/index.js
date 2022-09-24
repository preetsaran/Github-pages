import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsmobile] = useState(false)

  function handleWindowSizeChange() {
    setIsmobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return isMobile;
}
