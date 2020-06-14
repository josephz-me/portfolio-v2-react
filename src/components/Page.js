import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";
import styles from "./Page.module.scss";
import Cursor from "./Cursor";

export default function Page(props) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [ball, setBall] = useState({ x: 0, y: 0 });

  const speed = 0.22;

  const handleMouseMove = (event) => {
    const { clientX: mouseX, clientY: mouseY } = event;
    const distX = mouseX - ball.x;
    const distY = mouseY - ball.y;

    setBall({ x: ball.x + distX * speed, y: ball.y + distY * speed });

    setCursor({ x: ball.x, y: ball.y });
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
