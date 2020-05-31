import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";
import styles from "./Page.module.scss";

export default function Page(props) {
  return (
    <>
      <Meta />
      <div className={styles.navBackdrop}></div>
      <div className={styles.wrapper}>
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </>
  );
}
