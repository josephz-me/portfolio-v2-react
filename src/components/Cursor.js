import React from "react";
// import styles from "./Cursor.module.scss";
const POSITION = { x: 0, y: 0 };

export default function Draggable() {
  return (
    <>
      <div className="cursor"></div>
      <style jsx>{`
        .cursor {
          mix-blend-mode: difference;
          z-index: 100;
          position: fixed;
          top: 200;
          left: 200;
          width: 40px;
          height: 40px;
          border-radius: 500px;
          background-color: rgba(255, 255, 255, 100);
          transform: translate(-50%, -50%);
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
