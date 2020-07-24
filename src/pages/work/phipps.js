import Head from "next/head";
import React from "react";

import styles from "./work.module.scss";
import Spacer from "../../components/Spacer.js";
import SpacerRight from "../../components/SpacerRight.js";
import Divider from "../../components/Divider.js";
import Iframe from "react-iframe";

export default function Thinkspace() {
  return (
    <main>
      <Head>
        <title key="title">Phipps Interaction</title>
      </Head>
      <div className={styles.project}>
        <div className={styles.title}>
          <h1>
            Phipps <br />
            Interaction
          </h1>
          <h2>XR</h2>
        </div>
        <div className={styles.right}>
          <p>
            As various forms of interaction evolve, so should the way we
            visually and cognitively engage with information. However, one major
            hurdle with these new technologies is the daunting learning curve,
            especially in emerging feels of AR/VR. <br />
            <br />
            In this project, I explored how XR experiences can be navigated from
            a familiar form of interaction and if this hybrid behavior can
            enrich the way individuals visualize new information.
          </p>
        </div>
        <Spacer />
        <div className={styles.col1}>
          <h4>Skills —</h4>
          <p>
            AR Kit
            <br />
            VR Gravity Sketch
            <br />
            Blender 3D
            <br />
            Adobe CC
          </p>
        </div>
        <div className={styles.col2}>
          <h4>Timeframe —</h4>
          <p>3 Weeks (Fall 2019)</p>
        </div>
        <div className={styles.col3}>
          <h4>Collaborators —</h4>
          <p>None</p>
        </div>
        <Spacer />
        <div className={styles.iFrameBig}>
          <Iframe
            url="https://player.vimeo.com/video/378143894"
            className="iFrameDetails"
            position="absolute"
            width="100%"
            height="100%"
            display="initial"
            frameBorder="0"
            allow="fullscreen"
          />
        </div>
        <Divider />
        <h4 className={styles.left}>Problem —</h4>
        <p className={styles.right}>
          For the sake of context, this project focused on the Phipps Botanical
          Garden as a use case. Like many exhibition space, most of the plant
          life at Phipps is curated and installed in an inevitable,
          showcase-like manner. Plants are taken out of their contextual
          environments and as a result, visitors are unable to gain a holistic
          understanding of the exhibited plant's role in its natural ecosystem.
          Given these concerns, I framed my problems through these two
          questions:
          <br />
          <br />
          <em>
            “How can I provide users with a better contextual understanding of
            exhibition pieces and their natural environments and in the process,
            bring excitement to learning through technological innovation?
            <br />
            <br />
            “How can I encourage visitors with a call to action in regards to
            their role as a player in their own communities?”
          </em>
        </p>
        <Spacer />

        <h4 className={styles.left}>Solution —</h4>
        <p className={styles.right}>
          A tabletop AR terrain that adapts depending on the user's placement of
          physical action trophies. This design solution seeks to utilize
          existing intraction paradigms to help visitors visualize an exhibited
          plant in its broader natural habitat, as well as the role the
          Anthropocene plays within that specific environment.
        </p>
        <Divider />

        <h4 className={styles.left}>Form of Interaction —</h4>
        <div className={styles.right}>
          <p>
            Every AR tabletop within Phipps consists of a “Start” trophy, the
            trigger that begins every simulation. When the user moves the trophy
            to certain spots on the table, the CG projected terrain reacts
            accordingly depending on what type of action trophy is used.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/phipps/final_actionTrophies.png"></img>
        <Divider />
        <h4 className={styles.left}>Information Cards —</h4>

        <p className={styles.right}>
          Depending on which action trophies the user decides to move,
          appropriate signs appear with relevant information to that action.
          Since one of the interaction's primary goals is to visualize impacts
          of certain actions, each information sign leads to an additional
          call-to-action for the user to digest.
        </p>

        <Spacer />
        <img src="/static/work/phipps/final_digitalSigns.png"></img>
        <Divider />
        <h4 className={styles.left}>Stakeholders —</h4>
        <div className={styles.right}>
          <p>
            when beginning my research, I visited Phipps to not only better
            understand the exhibition material itself, but also the types of
            people that visited.
          </p>
          <br />
          <Spacer />
          <img src="/static/work/phipps/stakeholder_map.png"></img>
        </div>

        <Divider />
        <h4 className={styles.left}>Ideation —</h4>
        <p className={styles.right}>
          Breaking down my stakeholders helped me realize a few things. To truly
          satisfy both my primary and secondary users, I would need to create a
          highly intuitive experience capable of engaging, entertaining, and
          educating various groups of individuals that all have diverse motives.
        </p>
        <Spacer />
        <img src="/static/work/phipps/ideation_sketches.jpg"></img>
        <Divider />

        <h4 className={styles.left}>Prototyping —</h4>
        <div className={styles.right}>
          <em>Physical Prototyping: Text-based Information</em>
          <p>
            A tricky part of prototyping for spatial interfaces is communicating
            the way information is displayed. With time as a primary factor, I
            built physical mockups of information cards.
          </p>
          <SpacerRight />
          <video
            src="/static/work/phipps/prototyping_physical.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
          <SpacerRight />

          <em>VR Prototyping: Terrain Projection</em>
          <p>
            From there, I took my initial tabletop design ideas into Oculus'
            Gravity Sketch and began modeling in 3D space. Doing so allowed me
            to design a one-to-one model, giving me a more realistic
            understanding of what it might be like in world space.
          </p>
          <SpacerRight />
          <video
            src="/static/work/phipps/prototype_gravitySketchVideo.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
          <SpacerRight />
          <em>AR Prototyping: Terrain Projection</em>
          <p>
            Designing in VR proved to be extremely valuable in many regards, but
            it couldn't mimic the qualities of world space. I transitioned out
            of the headset into Xcode's Reality Composer so that I could
            prototype interactively with AR. Below are a few iterations.
          </p>
          <SpacerRight />
          <video
            src="/static/work/phipps/prototype_rcV1.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
          <Spacer />
          <video
            src="/static/work/phipps/prototype_rcV2.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>

        <Divider />
        <h4 className={styles.left}>Final Prototype —</h4>
        <p className={styles.right}>
          At the end of this process, I developed a design proposal that
          visualizes how an individual might engage with this interaction.
        </p>
        <Spacer />
        <div className={styles.iFrameBig}>
          <Iframe
            url="https://player.vimeo.com/video/378143894"
            className="iFrameDetails"
            position="absolute"
            width="100%"
            height="100%"
            display="initial"
            frameBorder="0"
            allow="fullscreen"
          />
        </div>
        <Divider />
        <h4 className={styles.left}>Conclusion</h4>
        <p className={styles.right}>
          As technology gets smarter, so should the way we undestand its new
          affordances. This project projects an ideal future where technology
          becomes secondary in the way we interact with each other and the
          physical world. I don't think we're meant eventually to live our lives
          in a VR headset... but I do believe that these technologes will open
          doors to new ways we perceive and understand our surroundings.
        </p>
      </div>
    </main>
  );
}
