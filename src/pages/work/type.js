import Head from "next/head";
import React from "react";

import styles from "./work.module.scss";
import Spacer from "../../components/Spacer.js";
import Divider from "../../components/Divider.js";
import Iframe from "react-iframe";

export default function Type() {
  return (
    <main>
      <Head>
        <title key="title">Type Studies</title>
      </Head>
      <div className={styles.project}>
        <div className={styles.title}>
          <h1>Type Studies</h1>
          <h2>Graphic Design</h2>
        </div>

        <p className={styles.right}>
          A collection of broad typographical explorations throughout the past
          few months, ranging from personal experiments to class-guided prompts.
        </p>
        <Spacer />
        <img src="/static/work/type/poster-hurry.jpg"></img>
        <img src="/static/work/type/magazine-galliard.jpg"></img>
        <img src="/static/work/type/poster-nf.jpg"></img>
        <img src="/static/work/type/poster-tedx.jpg"></img>
        <img src="/static/work/type/poster-pittsburgh.jpg"></img>
      </div>
    </main>
  );
}
