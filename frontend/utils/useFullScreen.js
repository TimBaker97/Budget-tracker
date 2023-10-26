import React, { useEffect } from 'react';

const useFullScreen = () => {
  const [size, setSize] = useState([0, 0]);

  // The use effect will update the state when the screen size changes
  // Whenever we change the screen size we want to trigger the function
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
  }, []);
  return <div></div>;
};

export default useFullScreen;
