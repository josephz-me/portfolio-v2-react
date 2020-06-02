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
        <title key="title">Carnegie Kitchen</title>
      </Head>
      <div className={styles.project}>
        <div className={styles.title}>
          <h1>
            Carnegie
            <br />
            Kitchen
          </h1>
          <h2>UX Design</h2>
        </div>

        <div className={styles.right}>
          <h4>*PAGE IN PROGRESS*</h4>
          <p>
            Throughout our time at CMU, my team and I have noticed how students
            ill-equipped are to achieve a balance between health and academics.
            To intervene, we designed Carnegie Kitchen, a nutrition and wellness
            app for Carnegie Mellon students to increase practicality of
            on-campus dining while building positive outlooks on eating.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/nutritionalLiteracy/01_projectCover.jpg"></img>
      </div>
    </main>
  );
}
