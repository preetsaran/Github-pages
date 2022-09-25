import { useState, useEffect, useCallback } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsmobile] = useState(window.innerWidth <= 768)

  const handleWindowSizeChange = useCallback(() => {
    setIsmobile(window.innerWidth <= 768)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [handleWindowSizeChange]);

  return isMobile;
}