import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function Footer() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.navbar__logo}>
        <Link href="/index">
          <a>Joseph Z</a>
        </Link>
      </span>
      <div className={styles.navbar__right}>
        <Link href="/about">
          <a>About</a>
        </Link>
        <a href="/static/resume-zhang.pdf" target="blank">
          Resume
        </a>
      </div>
    </nav>
  );
}
