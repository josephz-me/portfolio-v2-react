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
          z-index: 1100;
          position: fixed;
          top: ${props.y};
          left: ${props.x};
          width: 30px;
          height: 30px;
          border-radius: 50px;
          background-color: white;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
}
