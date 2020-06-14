import React from "react";
// import styles from "./Cursor.module.scss";

export default function Mouse(props) {
  return (
    <>
      <div className="cursor"></div>
      <style jsx>{`
        .cursor {
          mix-blend-mode: difference;
          pointer-events: none;
          z-index: 100;
          position: fixed;
          top: ${props.y};
          left: ${props.x};
          width: 40px;
          height: 40px;
          border-radius: 500px;
          background-color: rgba(255, 255, 255, 100);
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
}
