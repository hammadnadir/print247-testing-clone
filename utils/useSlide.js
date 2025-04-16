import { useState, useEffect } from 'react';

const useSlide = (ref, onSlideUp, onSlideDown) => {
  const [startY, setStartY] = useState(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (startY !== null) {
        const endY = e.touches[0].clientY;
        if (startY - endY > 50) { // Slide up threshold
          onSlideUp();
          setStartY(null);
        } else if (endY - startY > 50) { // Slide down threshold
          onSlideDown();
          setStartY(null);
        }
      }
    };

    const handleTouchEnd = () => {
      setStartY(null);
    };

    const node = ref.current;
    if (node) {
      node.addEventListener('touchstart', handleTouchStart);
      node.addEventListener('touchmove', handleTouchMove);
      node.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (node) {
        node.removeEventListener('touchstart', handleTouchStart);
        node.removeEventListener('touchmove', handleTouchMove);
        node.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [ref, startY, onSlideUp, onSlideDown]);
};

export default useSlide;
