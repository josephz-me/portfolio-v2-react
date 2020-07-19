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
          <p>
            Elevation Church is a global ministry with a weekly attendance of
            26,000 people across 18 physical locations and a massive{" "}
            <a
              href="https://www.youtube.com/user/ElevationOnline"
              target="blank"
            >
              online streaming
            </a>{" "}
            and{" "}
            <a
              href="https://www.instagram.com/elevationchurch/?hl=en"
              target="blank"
            >
              social media
            </a>{" "}
            presence. The ministry is also home to the Grammy-nominated music
            group{" "}
            <a
              href="https://www.youtube.com/user/elevationworship"
              target="blank"
            >
              Elevation Worship
            </a>
            .
            <br />
            <br />
            Over the 2019 summer, I was given the opportunity to join Elevation
            Church's Digital Team and collaborate with a diverse team of
            designers, developers, and data analysts. Throughout my 3 months in
            North Carolina, I helped ship two primary projects:
          </p>
          <br />
          <br />
          <em>
            (1) The relaunch of Elevation Connection Center, a digital platform
            for people to get connected through small groups, volunteering, and
            baptisms.
            <br />
            <br />
            (2) The initial design for Elevation's Apple tvOS app.
          </em>
        </div>
        <Spacer />
        <div className={styles.col1}>
          <h4>Skills —</h4>
          <p>
            UX/UI
            <br />
            Information Architecture
            <br />
            Rapid Prototyping
          </p>
        </div>
        <div className={styles.col2}>
          <h4>Timeframe —</h4>
          <p>12 Weeks</p>
        </div>
        <div className={styles.col3}>
          <h4>Collaborators —</h4>
          <p>
            Corey Pruitt
            <br />
            Digital Team
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/sunday_service.jpg"></img>
        <Divider />
        <h4 className={styles.left}>Elevation CC —</h4>
        <div className={styles.right}>
          <p>
            Elevation Connection Center (CC) is a digital platform for people to
            get connected with the Elevation community through joining/leading
            small groups (eGroups), volunteering (eTeams), and Baptisms. <br />
            <br />
            As the design team, we reworked the existing architecture and visual
            design to feel more fluid, welcoming, and enjoyable.
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
            At the time, Elevation Connection Center failed to embody the
            transparency, clarity, and friendliness that the ministry was known
            for. The site was overwhelming and users were asked to input large
            amounts of information with no suggestion of what it was going to be
            used for.
          </p>
          <Spacer />
        </div>
        <img src="/static/work/elevation/current_cc_ui.png"></img>
        <Spacer />
        <div className={styles.right}>
          <h5>Privacy Concerns</h5>
          <p>
            When users input their name, Elevation CC displays an "Is this you?"
            page of existing users with similar names as a way to expedite the
            process for returning users. This design posed a huge security issue
            since it meant any individual could sign up as anyone else.
          </p>
          <Spacer />
          <img src="/static/work/elevation/problem_security.png"></img>
          <Spacer />
          <h5>Inefficient Process — Welcome Tent Kiosks</h5>
          <p>
            A common way new church members get integrated with Elevation is
            through digital kiosk tablets at Welcome Tents after Worship
            Experiences on Wednesdays, Saturdays, and Sundays. With over 400
            people in attendance at any one of Elevation's 18 locations, the
            existing process to get connected is time-consuming and cumbersome,
            resulting in poor sign-up rates.
          </p>
          <Spacer />
        </div>
        <img src="/static/work/elevation/welcome_tent.jpg"></img>
        <Divider />
        <h4 className={styles.left}>Goal —</h4>
        <div className={styles.right}>
          <p>
            Our goal was to make the sign up process for eGroups, eTeams, and
            Baptism as welcoming and convenient as possible. Our solution
            comprised of four components:
          </p>
          <br />
          <br />
          <em>
            (1) Complete visual design overhaul
            <br />
            <br />
            (2) Addressing user-profile security issues
            <br />
            <br />
            (3) Identifying returning users from new users
            <br />
            <br />
            (4) Expediting the sign-up process (online & welcome tents)
          </em>
        </div>
        <Divider />
        <h4 className={styles.left}>Entry Points —</h4>
        <div className={styles.right}>
          <p>
            Users have three primary ways to access Elevation CC. By consciously
            noting the various ways that people engage with Elevation CC, we
            realized that we needed to redesign CC so that it could somehow
            stand alone as its own entity and also act as a transition point
            from somewhere else.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/user_types.png"></img>
        <Divider />
        <h4 className={styles.left}>User Flows —</h4>
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
        <Spacer />
        <div className={styles.right}>
          <p>
            <h5>Redesigned Flow</h5>
            Upon revaluating and digging into the existing flow, we decided to
            implement a checkpoint system that would properly short-circuit the
            processes for returning users.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/revised_flow.png"></img>
        <Divider />
        <h4 className={styles.left}>Redesigned Elevation CC —</h4>
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

        <Spacer />
        <img src="/static/work/elevation/eGroups_List.png"></img>
        <Spacer />
        <div className={styles.right}>
          <h5>eGroups - Search by Location</h5>
          <p>
            The new platform also gives users the ability to transition from
            list view to map view, allowing them to search eGroups by proximity
            via city or zip code.
          </p>
          <Spacer />
          <video
            src="/static/work/elevation/eGroups_Maps.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>

        <Spacer />
        <img src="/static/work/elevation/eGroups_Maps.png"></img>
        <Spacer />
        <div className={styles.right}>
          <h5>Sign Up Process</h5>
          <p>
            To avoid the problem of feeling overwhelmed, we designed the process
            so that users would proceed one step at a time. A big problem in the
            past Connection Center was the formidable sensation of seeing a page
            load with ten mandatory input boxes. By breaking it into steps, we
            were able to solve that issue as well as skip any uncessary steps
            for returning users, which will be mentioned later.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/eGroups_Signup.png"></img>
        <Spacer />
        <div className={styles.right}>
          <h5>Security Solution — Verification Code Text</h5>
          <p>
            The web app first asks for a phone number followed by a verification
            code. The request for the phone number serves both as a security
            caution as well as the first piece of information for the system to
            confirm.
            <br />
            <br />
            Scenario 1 — If the individual inputs their phone number, verifies
            the code, and the system finds a user match, the process is
            complete. The user is then directed to the confirmation page. That
            existing user no longer has to redundantly input his/her name,
            email, and address.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/security_process1.png"></img>
        <Spacer />
        <div className={styles.right}>
          <p>
            Scenario 2 — If there are multiple existing entries for the phone
            number, or if it's not found at all, the user is asked for a second
            piece of information and the process continues.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/security_process2_chart.png"></img>
        <Spacer />
        <img src="/static/work/elevation/security_process2.png"></img>

        <Spacer />
        <div className={styles.right}>
          <h5>Baptisms and eTeams</h5>
          <p>
            For those interested in joining eTeams and getting baptized,
            Elevation requires individuals to go through an in-person Meet &
            Greet. Besides this step, the rest mimics that of joining an eGroup.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/baptism_egroup_signup.png"></img>
        <Spacer />
        <div className={styles.right}>
          <h5>Kiosk Mode</h5>
          <p>
            Kiosk Mode is solely designed to be used at an onsite Elevation
            location. Given that large numbers of people line up after weekend
            Worship Experiences to get connected, our goal for Kiosk Mode was to
            be as quick and frictionless possible.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/kiosk_screens.png"></img>
        <Spacer />
        <div className={styles.right}>
          <h5>Kiosk Mode - Reenvisioned User Flow</h5>
          <p>
            Kiosk mode is all about simplification and expediting the time spent
            waiting in line. Upon filling selecting event/group details, the
            user completes the rest of the process on his or her own device.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/elevation/kiosk_flow.png"></img>
        <img src="/static/work/elevation/kiosk_pages.png"></img>
        <Spacer />
        <div className={styles.right}>
          <h5>Summary</h5>
          <p>
            As 1 of 3 UX designers on the Digital Team, we handed off the
            designs within two weeks. The project was then shipped later that
            year in December.
          </p>
        </div>
        <Divider />
        <h4 className={styles.left}>Elevation tvOS App —</h4>
        <div className={styles.right}>
          <p>
            This summer, I also prototyped the first designs for Elevation
            Church's Apple tvOS app. Elevation reaches thousands around the
            world and weekly Worship Experiences were already being broadcasted
            on platforms such as Facebook, Youtube, Elevationchurch.online, and
            Roku app. On this side project, I worked primarily with Simon (full
            stack developer) and Corey (UX lead). The app is now on the Apple
            tvOS store. ☺
          </p>
        </div>
        <Spacer />
        <video
          src="/static/work/elevation/interaction_home.mp4"
          muted
          autoPlay
          loop
          playsinline
        ></video>
        <Spacer />
        <video
          src="/static/work/elevation/transition_page.mp4"
          muted
          autoPlay
          loop
          playsinline
        ></video>
        <Spacer />
        <img src="/static/work/elevation/tvOS_hifi_g_white.png"></img>
        <Spacer />
        <img src="/static/work/elevation/tvOS_hifi_g_dark.png"></img>
      </div>
    </main>
  );
}
