import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Cursor.scss";

const Cursor = () => {

    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
      const followCursor = (e) => {
        setPosition({ top: e.clientY, left: e.clientX });
      };
  
      document.addEventListener('mousemove', followCursor);
  
      return () => {
        document.removeEventListener('mousemove', followCursor);
      };
    }, []);
  
    return <div className="cursor-follower" style={position}></div>;
}

export default Cursor;