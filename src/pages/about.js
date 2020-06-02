import Head from "next/head";
import React from "react";

import styles from "./work/work.module.scss";
import Spacer from "../components/Spacer.js";

export default function Home() {
  return (
    <main>
      <Head>
        <title key="title">About</title>
      </Head>
      <div className={styles.project}>
        <div className={styles.title}>
          <h1>About</h1>
          <i></i>
        </div>
        <div className={styles.right}>
          <p>
            I'm an interaction designer exploring various applications of
            multimodal interfaces. Currently, I'm an undergraduate at Carnegie
            Mellon pursuing a{" "}
            <a
              target="blank"
              href="https://www.design.cmu.edu/content/bachelor-design"
            >
              Bachelor of Design
            </a>{" "}
            with additional minors in Human-Computer Interaction and Intelligent
            Environments.
            <br />
            <br />
            Previously, I was a UX Design Intern at Elevation Church in
            Charlotte, North Carolina. This summer, I will be joining Apple's
            Siri Team as an Interaction Design Intern in Cupertino, California.
          </p>
        </div>
        <Spacer />
        <div className={styles.col1}>
          <h4>Interested in —</h4>
          <a target="blank" href="https://www.youtube.com/watch?v=l3yHLikvjPU">
            Mini apartments
          </a>
          <br />
          <a
            target="blank"
            href="https://www.youtube.com/watch?v=hsFefdPhL3w&t=19s"
          >
            Essentialism
          </a>
          <br />
          <a target="blank" href="photo.html">
            Event photography
          </a>
        </div>
        <div className={styles.col2}>
          <h4>Exploring —</h4>
          <p>
            Cinema4D
            <br />
            React
            <br />
            Visual Branding
          </p>
        </div>
        <div className={styles.col3}>
          <h4>Building —</h4>
          <a target="blank" href="https://www.covaid.co">
            Covaid.co
          </a>
        </div>
        <Spacer />
        <img src="/static/about/chairSpinning.jpeg"></img>
      </div>
    </main>
  );
}
