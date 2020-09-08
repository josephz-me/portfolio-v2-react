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
        </div>
        <div className={styles.right}>
          <p>
            B. 2000 ~ Guangdong, CHN. Raised in Cupertino, CA.
            <br />
            <br />
            Joseph is a designer exploring system-level interaction patterns and
            multimodal experiences. He believes in developing a more humane way
            for people to engage with tech and screen-based interfaces.
            Currently, he is an undergraduate at the Carnegie Mellon{" "}
            <a
              target="blank"
              href="https://www.design.cmu.edu/content/bachelor-design"
            >
              School of Design
            </a>{" "}
            and{" "}
            <a target="blank" href="https://www.hcii.cmu.edu/">
              Human-Computer Interaction Institute
            </a>
            .
            <br />
            <br />
            Previously, Joseph was an Interaction Design Intern @{" "}
            <a href="https://www.apple.com/siri/" target="blank">
              Apple
            </a>{" "}
            (2020) and UX Design Intern @{" "}
            <a href="https://elevationchurch.org/" target="blank">
              Elevation Church
            </a>{" "}
            (2019). Currently, he is designing intent-based interfaces with{" "}
            <a target="blank" href="https://www.brain.ai/">
              Brain Technologies
            </a>{" "}
            (2020-21).
          </p>
        </div>
        <Spacer />
        <div className={styles.col1}>
          <h4>Exploring —</h4>
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
        </div>
        <div className={styles.col2}>
          <h4>Reading —</h4>
          <a
            target="blank"
            href="https://www.amazon.com/Ruthless-Elimination-Hurry-Emotionally-Spiritually/dp/0525653090"
          >
            The Ruthless Elimination of Hurry
          </a>
          <br />
          <a
            target="blank"
            href="https://www.amazon.com/Feck-Perfuction-Dangerous-Ideas-Business/dp/1452166366"
          >
            Feck Perfuction
          </a>
          <br />
          <a
            target="blank"
            href="https://www.amazon.com/Metaphors-We-Live-George-Lakoff/dp/0226468011/ref=sr_1_2?crid=126LZHE11LM5Y&dchild=1&keywords=metaphors+we+live+by&qid=1592536926&s=books&sprefix=metaphors+we+live+by%2Cstripbooks%2C200&sr=1-2"
          >
            Metaphors We Live By
          </a>
        </div>
        <div className={styles.col3}>
          <h4>Listening —</h4>
          <a
            target="blank"
            href="https://open.spotify.com/show/2sC9z2mEDRuluR4hjbV1Gb?si=0XlZGJWsQpyY6PdzMy6Zow"
          >
            Commoners Communion
          </a>
          <br />
          <a
            target="blank"
            href="https://open.spotify.com/show/1VXcH8QHkjRcTCEd88U3ti?si=tuxyWJmyTfCllhoncwuw5g"
          >
            TED Talks Daily
          </a>
        </div>
        <Spacer />

        <img src="/static/about/portrait.jpg"></img>
      </div>
    </main>
  );
}
