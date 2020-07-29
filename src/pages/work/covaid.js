import Head from "next/head";
import React from "react";

import styles from "./work.module.scss";
import Spacer from "../../components/Spacer.js";
import Divider from "../../components/Divider.js";
import Iframe from "react-iframe";

export default function Covaid() {
  return (
    <main>
      <Head>
        <title key="title">Covaid</title>
      </Head>
      <div className={styles.project}>
        <div className={styles.title}>
          <h1>Covaid</h1>
          <h2>UX Design</h2>
        </div>

        <div className={styles.right}>
          <h5>— PAGE IN PROGRESS —</h5>
          <p>
            In March 2020, I joined two recent college graduates on building
            Covaid, a volunteer-requester matching platform that connects
            mutual-aid organizations to those in need. The team now has +20
            college students from across the nation contributing as social
            outreachers, web/app developers, and product designers. Covaid now
            collaborates with six organizations and +2000 volunteers in cities
            such as Pittsburgh, Baltimore, and Charlotte, and Chicago.
            <br />
            <br />
            As the first designer on the team, I built the design system and
            interface from scratch. I now lead three other designers on
            designing various components of the application as well as
            personally contribute on the developer-side of the project.
          </p>
        </div>
        <Spacer />
        <div className={styles.col1}>
          <h4>Skills —</h4>
          <p>
            UX/UI
            <br />
            Information Architecture
            <br />
            Team Management
          </p>
        </div>
        <div className={styles.col2}>
          <h4>Timeframe —</h4>
          <p>6 Months</p>
        </div>
        <div className={styles.col3}>
          <h4>Collaborators —</h4>
          <p>
            Alice Cai
            <br />
            Ricky Chen
            <br />
            Neely Lee
          </p>
        </div>
        <Spacer />

        <img src="/static/work/covaid/coverPhoto.png"></img>
        <Divider />
        <h4 className={styles.left}>Covaid —</h4>
        <div className={styles.right}>
          <p>
            The Covaid platform consists of both a web platform and an iOS app
            designed for volunteers. Below is a link to the live web
            application.
          </p>
          <Spacer />
          <a target="blank" href="https://covaid.co">
            <img src="/static/work/covaid/covaid-landing.png"></img>
          </a>
        </div>

        <Divider />
        <h4 className={styles.left}>Problem —</h4>
        <div className={styles.right}>
          <p>
            As COVID-19 spread across the nation, large non-profit organizations
            began facing paralysis in the form of overwhelming amounts of
            requests. Currently, the majority of organizations depend on
            inhumane spreadsheets to manually keep track of volunteers and their
            current tasks.
          </p>
          <Spacer />{" "}
        </div>
        <small className={styles.left}>
          Blurred for condidentiality purposes
        </small>
        <div className={styles.right}>
          <img
            src="/static/work/covaid/spreadsheets.png"
            style={{ filter: "blur(1px)" }}
          ></img>
        </div>

        <Divider />
        <h4 className={styles.left}>Interface Snapshots —</h4>
        <div className={styles.right}>
          <p>We built three primary interfaces for Covaid:</p>
          <br />
          <br />
          <em>
            (1) Organization dashboard
            <br />
            (2) Volunteers dashboard
            <br />
            (3) Request flow
          </em>
        </div>
        <Spacer />
        <img src="/static/work/covaid/images/images.001.jpeg"></img>
        <img src="/static/work/covaid/images/images.002.jpeg"></img>
        <img src="/static/work/covaid/images/images.003.jpeg"></img>
        <img src="/static/work/covaid/images/images.004.jpeg"></img>
        <img src="/static/work/covaid/images/images.005.jpeg"></img>
        <img src="/static/work/covaid/images/images.006.jpeg"></img>
        <img src="/static/work/covaid/images/images.007.jpeg"></img>
        <img src="/static/work/covaid/images/images.008.jpeg"></img>
        <img src="/static/work/covaid/images/images.009.jpeg"></img>
        <img src="/static/work/covaid/images/images.010.jpeg"></img>
        <img src="/static/work/covaid/images/images.011.jpeg"></img>
        <img src="/static/work/covaid/images/images.012.jpeg"></img>
        <img src="/static/work/covaid/images/images.013.jpeg"></img>
      </div>
    </main>
  );
}
