import { useState, useCallback, useRef } from 'react';

type UseImageNavigatorReturn = {
  isZoomed: boolean;
  toggleZoom: () => void;
  handleMouseDown: (e: React.MouseEvent | React.TouchEvent) => void;
};

const useImageNavigator = (): UseImageNavigatorReturn => {
  const [isZoomed, setIsZoomed] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });

  const toggleZoom = useCallback(() => {
    setIsZoomed(!isZoomed);
  }, [isZoomed]);

  const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isZoomed) return;

    const startX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const startY = 'clientX' in e ? e.clientY : e.touches[0].clientY;
    positionRef.current = { x: startX, y: startY };

    const handleMouseMove = (moveEvent: MouseEvent | TouchEvent) => {
      if (!isZoomed) return;

      const currentX = 'clientX' in moveEvent ? moveEvent.clientX : moveEvent.touches[0].clientX;
      const currentY = 'clientX' in moveEvent ? moveEvent.clientY : moveEvent.touches[0].clientY;
      const dx = currentX - positionRef.current.x;
      const dy = currentY - positionRef.current.y;

      // Update the image position here using dx and dy
      // This could involve setting state or manipulating the DOM directly, depending on your setup

      positionRef.current = { x: currentX, y: currentY };
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleMouseMove as unknown as EventListener);

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleMouseMove as unknown as EventListener);
      // Reset the positionRef here if necessary
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
  }, [isZoomed]);

  return {
    isZoomed,
    toggleZoom,
    handleMouseDown
  };
};

export default useImageNavigator;
