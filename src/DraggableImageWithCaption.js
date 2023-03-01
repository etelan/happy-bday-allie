import React, { useState, useEffect } from 'react';

const DraggableImageWithCaption = ({ src, alt, name, quote, initialX = 0, initialY = 0 }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (dragging) {
      const handleMouseMove = e => {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        });
      };
      const handleMouseUp = () => setDragging(false);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [dragging, dragStart]);

  const handleMouseDown = ({ clientX, clientY }) => {
    setDragging(true);
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  };

  return (
    <div
      style={{ position: 'absolute', left: position.x, top: position.y,  width: '140px' }}
      onMouseDown={handleMouseDown}
    >
      <img src={src} alt={alt} style={{  width: '100px' }} draggable="false" />
      <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{name}</p>
      <p style={{ marginTop: '0', marginBottom: '0' }}>{quote}</p>
    </div>
  );
};

export default DraggableImageWithCaption;