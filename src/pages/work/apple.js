import Head from "next/head";
import React from "react";

import styles from "./work.module.scss";
import Spacer from "../../components/Spacer.js";
import Divider from "../../components/Divider.js";
import Iframe from "react-iframe";

export default function Apple() {
  return (
    <main>
      <Head>
        <title key="title">Apple</title>
      </Head>
      <div className={styles.project}>
        <div className={styles.title}>
          <h1>Apple</h1>
          <h2>Design Internship</h2>
        </div>
        <div className={styles.right}>
          <p>
            During the summer of 2020, I worked with the Siri Conversational
            Interaction team on revisions to platform-level voice UI patterns
            based on a core technology enhancement. I also worked on Siri
            Timelines, a design template system that helps designers and
            engineers visualize and compare short- and long-term Siri
            interactions.
          </p>
        </div>
        <Spacer />
        <div className={styles.col1}>
          <h4>Skills —</h4>
          <p>Conversational Design</p>
          <p>VUI Prototyping</p>
          <p>Conceptual Modeling</p>
          <p>User Research</p>
        </div>
        <div className={styles.col2}>
          <h4>Timeframe —</h4>
          <p>11 Weeks (Summer 2020)</p>
        </div>
        <div className={styles.col3}>
          <h4>Collaborators —</h4>
          <p>Garrett Weinberg</p>
          <p>+ many others</p>
        </div>

        <Spacer />
        <video
          src="/static/work/apple/coverVideo.mp4"
          muted
          autoPlay
          preload="metadata"
          loop
          playsInline
        ></video>
      </div>
    </main>
  );
}
