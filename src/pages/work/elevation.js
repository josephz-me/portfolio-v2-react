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
        <title key="title">Elevation Church</title>
      </Head>
      <div className={styles.project}>
        <div className={styles.title}>
          <h1>
            Elevation
            <br />
            Church
          </h1>
          <h2>UX Internship</h2>
        </div>

        <div className={styles.right}>
          <h4>*PAGE IN PROGRESS*</h4>
          <p>
            This summer, I was given the opportunity to join Elevation Church's
            Digital Team and collaborate with a diverse team of designers,
            developers, and data analysts. Throughout my 3 months in North
            Carolina, I helped ship two primary projects:
            <br />
            <br />
            (1) The relaunch of <em>Elevation Connection Center</em>, a digital
            platform for people to get connected through small groups,
            volunteering, and baptisms
            <br />
            <br />
            (2) The initial design for <em>
              Elevation's video streaming app
            </em>{" "}
            for Apple TV
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/cover_photo.jpg"></img>
      </div>
    </main>
  );
}
