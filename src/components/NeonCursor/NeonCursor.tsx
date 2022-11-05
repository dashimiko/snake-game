import { useState, useEffect } from "react";

export default function NeonCursor() {
    
    const [position, setPosition] = useState({ top: 0, left: 0 });
  
    useEffect(() => {
      function handleMouseMove(event: MouseEvent) {
        setPosition({
          top: event.pageY,
          left: event.pageX,
        });
      }
  
      document.addEventListener('mousemove', handleMouseMove);
      document.body.classList.add('no-cursor');
  
      return () => {
        document.body.classList.remove('no-cursor');
        document.removeEventListener('mousemove', handleMouseMove);
      };
    });
  
    return (
      <img
        alt=""
        src="https://code.s3.yandex.net/web-code/react/cursor.svg"
        width={30}
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          pointerEvents: 'none',
        }}
      />
    );
  }