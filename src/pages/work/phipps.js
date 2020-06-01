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
            Phipps Conservatory is a botanical garden and historical landmark in
            Pittsburgh, Pennsylvania. The conservatory showcases hundreds of
            plants from around the world, including Cuba, Canada, and the
            States. Currently, visitors can explore the space by themselves or
            on guided group tours. <br />
            <br />
            As technology and design mediums advance, so should the way we
            visually and cognitively engage with information. In this project, I
            explored how XR interactions can enrich the way individuals both
            experience and learn about natural ecosystems.
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
          />
        </div>
        <Divider />
        <h4 className={styles.left}>Problem —</h4>
        <p className={styles.right}>
          The majority of plant life at the Phipps Conservatory is curated and
          installed in an inevitable, showcase-like manner. Plants are taken out
          of their contextual environments and as a result, visitors are unable
          to gain a holistic understanding of the exhibited plant's role in its
          natural ecosystem. Given these concerns, I framed my problems through
          these two questions:
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
          physical action trophies. This design solution seeks to help visitors
          visualize an exhibited plant in its broader natural habitat, as well
          as the role the Anthropocene plays in these wildlife environments.
        </p>
        <Divider />

        <h4 className={styles.left}>Form of Interaction —</h4>
        <div className={styles.right}>
          <p>
            To go more in-depth about the physical aspect of this interaction,
            every AR tabletop within Phipps will have a “Start” trophy, that is
            the trophy that begins the entire simulation. When the user moves
            the trophy to certain spots on the table, the terrain will react
            accordingly depending on what type of action trophy it is. In this
            case, I have included cattle herding and oil fracking. The goal of
            this is for users to understand how human actions can completely
            alter the way a natural ecosystem continues to exist.
          </p>
        </div>
        <Spacer />
        <img src="/static/work/phipps/final_actionTrophies.jpg"></img>
        <Divider />
        <h4 className={styles.left}>Information Cards —</h4>

        <p className={styles.right}>
          Depending on which action trophies the user decides to move,
          appropriate AR signs appear with relevant information to that action.
          Since the one interaction's primary goals is to evoke action, each
          information sign leads to an additional call to action that the user
          can consider integrating into his or her life.
        </p>

        <Spacer />
        <img src="/static/work/phipps/final_digitalSigns.jpg"></img>
        <Divider />
        <h4 className={styles.left}>Stakeholders —</h4>
        <div className={styles.right}>
          <p>
            when beginning my research, I visited Phipps to not only better
            understand the exhibition material itself, but also the types of
            people that visited. From my time there, I realized that I could
            separate my target users into primary and secondary users depending
            on factors such as their duration in Pittsburgh, age, and intent for
            visiting. The primary users are everyday, kids, college students,
            and adults. The secondary users would be people thinking of
            investing in Phipps - this includes sponsors, donors, and
            individuals interested in holding a venue at Phipps.
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
          <br />
          <br />
          Throughout this process, I framed my thinking around how I can best
          educate visitor about a plant's natural environment. Doodles turned
          into ideas and eventually I saw myself begin conceptualizing a hybrid
          tabletop experience.
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
            webkit-playsinline="true"
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
            webkit-playsinline="true"
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
            webkit-playsinline="true"
          ></video>
          <Spacer />
          <video
            src="/static/work/phipps/prototype_rcV2.mp4"
            muted
            autoPlay
            loop
            playsInline
            webkit-playsinline="true"
          ></video>
        </div>

        <Divider />
        <h4 className={styles.left}>Final Prototype —</h4>
        <p className={styles.right}>
          At the end of this process, I developed this speculative concept video
          that visualizes how an individual might engage with this interaction.
        </p>
        <div className={styles.iFrameBig}>
          <Iframe
            url="https://player.vimeo.com/video/378143894"
            className="iFrameDetails"
            position="absolute"
            width="100%"
            height="100%"
            display="initial"
            frameBorder="0"
          />
        </div>
        <Divider />
        <div className={styles.left}>Conclusion</div>
        <p className={styles.right}>
          In summary, my goal for this design challenge was to enhance the way
          people engage in the Phipps Conservatory through some XR medium. As
          someone who just recently began prototyping in spatial environments,
          this project taught me a lot about the affordances of augmented
          reality tools and the limitations of how certain ideas and be
          communicated. I’ve come to realize that these restraints are quite
          logical sense I’m conceptualizing future-based interactions with
          available tools in the present.
          <br />
          <br />
          In the near future, I would love to explore prototyping tools such as
          Unity and Blender; I believe that the combination of these two tools
          will elevate my ideas to a new level, allowing me to solve bigger
          scaled issues in the man-made world.
        </p>
      </div>
    </main>
  );
}
