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
          <h2>Product Design</h2>
        </div>

        <div className={styles.right}>
          <p>
            Covaid is a volunteer-requester matching platform that connects
            mutual-aid organizations to those in need. Starting with three
            people, the team now has +20 college students from across the nation
            contributing as social outreachers, web/app developers, and product
            designers. Covaid now collaborates with six organizations and +2000
            volunteers in cities such as Pittsburgh, Baltimore, and Charlotte,
            and Chicago.
            <br />
            <br />
            As the first designer on the team, I created the design system and
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
          <Spacer /> <p>We built three primary interfaces for Covaid:</p>
          <br />
          <br />
          <em>
            (1) Organization dashboard
            <br />
            (2) Volunteers dashboard
            <br />
            (3) Request flow
          </em>
          <Spacer />
        </div>
        <small className={styles.left}>
          Blurred for confidentiality purposes
        </small>
        <div className={styles.right}>
          <img
            src="/static/work/covaid/spreadsheets.png"
            style={{ filter: "blur(1px)" }}
          ></img>
        </div>
        <Divider />

        <h4 className={styles.left}>Creating a Request —</h4>

        <div className={styles.right}>
          <p>
            To get help, an individual simply needs to fill out a 3 step form.
            Currently, aid is only provided in certain cities.
          </p>
          <Spacer />
          <video
            src="/static/work/covaid/create-request.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <Divider />
        <h4 className={styles.left}>Organization Dashboard —</h4>
        <div className={styles.right}>
          <p>
            Organizations assign volunteers to requests by sending notifications
            to multiple volunteers via text or email. The first to respond takes
            on the task.
          </p>
          <Spacer />
          <video
            src="/static/work/covaid/org-match-request.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className={styles.right}>
          <p>
            To alleviate the transitional friction organizations may face,
            Covaid syncs with Excel, the platform most organizations are coming
            from.{" "}
          </p>
          <Spacer />
          <video
            src="/static/work/covaid/org-excel-sync.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>

        <div className={styles.right}>
          <Spacer />
          <p>
            Organizations are also able to view all its volunteers and their
            contact information.
          </p>
          <Spacer />
          <video
            src="/static/work/covaid/org-view-volunteers.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className={styles.right}>
          <Spacer />
          <p>
            Organizations are able to send mass notifications for any desired
            purpose. We call these Beacons.
          </p>
          <Spacer />
          <video
            src="/static/work/covaid/org-create-beacon.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <Divider />
        <h4 className={styles.left}>Volunteer Dashboard —</h4>
        <div className={styles.right}>
          <p>
            Volunteers have a notification panel which displays any Beacon
            messages sent by their organization.
          </p>
          <Spacer />
          <video
            src="/static/work/covaid/volunteer-view-beacon.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <small className={styles.left}>Handling Requests (volunteer)</small>
        <div className={styles.right}>
          <Spacer />
          <p>
            There are three states of requests: new, in-progress, and complete.
            This is where volunteers accept or complete requests.
          </p>
          <Spacer />
          <video
            src="/static/work/covaid/volunteer-requests.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className={styles.right}>
          <Spacer />
          <p>
            If a volunteer is unavailable, he or she is able to toggle to update
            that. Marking oneself as inactive would prevent organization admins
            from matching you to new requests.
          </p>
          <Spacer />
          <video
            src="/static/work/covaid/volunteer-change-active.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <Divider />
        <h4 className={styles.left}>Mobile App</h4>
        <p className={styles.right}>
          Currently, the Covaid team is building a mobile app for volunteers.
          Currently, notification via email is ineffective, annoying, and often
          ignored.
        </p>
        <Spacer />
        <img src="/static/work/covaid/images/images.009.jpeg"></img>
        <img src="/static/work/covaid/images/images.010.jpeg"></img>
        <img src="/static/work/covaid/images/images.011.jpeg"></img>
        <img src="/static/work/covaid/images/images.012.jpeg"></img>
      </div>
    </main>
  );
}
