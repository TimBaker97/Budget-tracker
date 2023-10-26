import { useEffect, useState } from 'react';

export const useFullScreen = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  // The use effect will update the state when the screen size changes
  // Whenever we change the screen size we want to trigger the function
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return {
    width: size[0],
    height: size[1],
  };
};
