import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";
import styles from "./Page.module.scss";
import Cursor from "./Cursor";

export default function Page(props) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [ball, setBall] = useState({ x: 0, y: 0 });

  const speed = 0.12;

  const handleMouseMove = (event) => {
    clearTimeout(ballToCursor());
    const { clientX: mouseX, clientY: mouseY } = event;
    const distX = mouseX - ball.x;
    const distY = mouseY - ball.y;

    setBall({ x: ball.x + distX * speed, y: ball.y + distY * speed });
    setCursor({ x: ball.x, y: ball.y });

    setTimeout((ballToCursor(mouseX, mouseY), 1000));
  };

  const ballToCursor = (mouseX, mouseY) => {
    setCursor({ x: mouseX, y: mouseY });
  };

  return (
    <div onMouseMove={(event) => handleMouseMove(event)}>
      <Meta />
      <div className={styles.navBackdrop}></div>
      <div className={styles.wrapper}>
        {/* <Cursor x={cursor.x + "px"} y={cursor.y + "px"}></Cursor> */}
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
