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
        <h4 className={styles.left}>Covaid.co —</h4>
        <div className={styles.right}>
          <p>
            The Covaid platform consists of both a web platform and an iOS app
            designed for volunteers. Below is a link to the live web
            application.
          </p>
          <Spacer />
          <a target="blank" href="https://connect.elevationchurch.org/">
            <img src="/static/work/elevation/cc_mockup.png"></img>
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
          <Spacer />
        </div>
        <img
          src="/static/work/covaid/spreadsheets.png"
          style={{ filter: "blur(1px)" }}
        ></img>
        <small className={styles.right}>
          Blurred for condidentiality purposes
        </small>
        <Divider />
        <h4 className={styles.left}>Goal —</h4>
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
        <Divider />
        <h4 className={styles.left}>Organization Dashboard —</h4>
        <div className={styles.right}>
          <p>
            The primary purpose of the organization dashboard is to allow admins
            to view and delegate all incoming/in-progress requests. Each request
            is categorized into one of three categories: unmatched, in-progress,
            or complete. To move a card from unmatched to in-progress, an
            organization admin would notify a volunteer to pick up a request.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/user_types.png"></img>
        <Divider />
        <h4 className={styles.left}>Volunteer Dashboard —</h4>
        <div className={styles.right}>
          <p>
            The current sign-up process asks for an email and name as
            verification points for returning users. However as mentioned
            before, both new and returning users are then often routed to a
            highly problematic identity confirmation page with a list of
            individuals with similar names. <br />
            <br />
            By mapping out Elevation CC's current flow, we realized that 80% of
            the processes were the same for eTeams, Baptisms, and eGroups. This
            meant that the bulk of the issues in all three came from a lack of
            clarity and efficiency in these concentrated series of actions.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/flowcharts.png"></img>
        <Divider />
        <h4 className={styles.left}>Request Flow —</h4>
        <div className={styles.right}>
          <h5>eGroups - Search by List</h5>

          <p>
            We redesigned these pages with the goal of bringing more personality
            and light-heartedness to the process. This prompted us to introduce
            colored navigation, leader profiles, and an expandable map
            interface.
          </p>
          <Spacer />
          <video
            src="/static/work/elevation/eGroups_List.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
      </div>
    </main>
  );
}
