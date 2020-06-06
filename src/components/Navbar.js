import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

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
        <Link target="blank" href="/static/resume-zhang.pdf">
          <a>Resume</a>
        </Link>
      </div>
    </nav>
  );
}
