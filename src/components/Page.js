import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";
import styles from "./Page.module.scss";
import Cursor from "./Cursor";

export default function Page(props) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursor({ x: clientX, y: clientY });
  };

  return (
    <div onMouseMove={(event) => handleMouseMove(event)}>
      <Meta />

      <div className={styles.navBackdrop}></div>
      <div className={styles.wrapper}>
        <Cursor x={cursor.x + "px"} y={cursor.y + "px"}></Cursor>
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
