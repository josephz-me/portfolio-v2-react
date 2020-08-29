import Head from "next/head";
import React from "react";

import styles from "./work.module.scss";
import Spacer from "../../components/Spacer.js";
import Divider from "../../components/Divider.js";
import Iframe from "react-iframe";

export default function Thinkspace() {
  return (
    <main>
      <Head>
        <title key="title">Thinkspace</title>
      </Head>
      <div className={styles.project}>
        <div className={styles.title}>
          <h1>Thinkspace</h1>
          <h2>CUI</h2>
        </div>
        <div className={styles.right}>
          <p>
            Rich, engaging conversation is a hallmark of ameaningful
            human-to-human experience. However, factors such as relational
            closeness, social formalities, and insecurities often hinder
            individuals from going beyond surface-level conversation.
            <br />
            <br />
            <u>
              Thinkspace is a speculative concept that aims to reinvision the
              role of conversational agents in discussion-based contexts.
            </u>
          </p>
        </div>
        <Spacer />
        <div className={styles.col1}>
          <h4>Skills —</h4>
          <p>
            p5.js
            <br />
            Interaction Design
            <br />
            Adobe Aftereffects
          </p>
        </div>
        <div className={styles.col2}>
          <h4>Timeframe —</h4>
          <p>7 Weeks (Spring 2020)</p>
        </div>
        <div className={styles.col3}>
          <h4>Collaborators —</h4>
          <p>None</p>
        </div>
        <Spacer />
        <div className={styles.iFrameBig}>
          <Iframe
            url="https://www.youtube.com/embed/U78cKpV_5V4"
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
        <h4 className={styles.left}>Generative Conversation —</h4>
        <p className={styles.right}>
          In our world today, almost all the tools we use are passive. They do
          exactly what we tell them and nothing more. Current conversational
          agents are no different — we provide a request, and the assistant
          performs that action. In his{" "}
          <a href="https://www.youtube.com/watch?v=aR5N2Jl8k14" target="blank">
            TED talk
          </a>
          , designer and engineer Maurice Conti challenges society to rebuild
          the passive (tech) tools we use today into generative ones. <br />
          <br /> In this project, I wanted to challenge the 'assistant' metaphor
          of voice agents. Though the main intent of CUI's is still to help
          accomplish tasks, what if they could provide input in a way that we
          might not even know to ask for?{" "}
          <u>
            In the proper context, what if human conversation can be enriched
            through the facilitation of a proactive voice assistant rather than
            a retroactive one?
          </u>
        </p>
        <Divider />

        <h4 className={styles.left}>Modular Intents —</h4>
        <p className={styles.right}>
          <u>
            Intent: a user-selected mode that dictates the conversational
            assistant’s behavior.
          </u>{" "}
          <br />
          <br />
          Every conversation has a different context and intention of
          initiation. Thinkspace embraces that, giving users the ability to
          choose the voice assistant's role prior to beginning the actual
          conversation. This system is modular, meaning that number of Intent
          options will expand as the entire Thinkspace system develops.
        </p>
        <Spacer />
        <img src="/static/work/thinkspace/modularIntents.png"></img>
        <Divider />

        <h4 className={styles.left}>Input Methods —</h4>
        <div className={styles.right}>
          <p>
            The goal of Thinkspace is to enhance human-to-human conversation,
            not human-to-computer conversation. Because of that, Thinkspace is
            designed so that no verbal exchange occurs between person &
            computer.
          </p>
          <br />
          <br />
          <h5>System Wake & Sleep</h5>
          <p>
            Person invocates through voice. Thinkspace is about conversation,
            therefore the first point of interaction should reflect that.
          </p>
          <br />
          <br />
          <h5>Role Selection</h5>
          <p>
            Person chooses through mobile interface. It’s illogical for the
            system to project the various options given limited wall space.
          </p>
          <br />
          <br />
          <h5>How the system provides information </h5>
          <p>
            Only visual and audial cues, no spoken dialogue. The goal is to
            highlight the human-to-human conversation, therefore the assistant
            never replies auditorily in words.
          </p>
        </div>
        <Divider />
        <h4 className={styles.left}>Thought Metaphor —</h4>
        <div className={styles.right}>
          <p>
            Based on scientific research, a{" "}
            <a target="blank" href="https://www.pnas.org/content/115/5/1087">
              research article
            </a>{" "}
            from the National Academy of Sciences claims that highly creative
            people differ from the average person because of the unique
            coactivation of their three primary brain regions. This consists of
            the default, salience, and executive systems which are neural
            circuits that usually work in opposition. <br />
            <br />I couldn't help but wonder how the conceptual model of the
            human mind might be able to influence us on the social level — more
            specifically, our hesitance to expand beyond social cliques.{" "}
            <u>
              How can the grouping and regrouping of our thoughts act as analogy
              for the way we should engage with people with different
              backgrounds, cultures, and ideas?
            </u>
          </p>
        </div>
        <Spacer />
        <img src="/static/work/thinkspace/scaleMetaphor.png"></img>
        <Spacer />
        <div className={styles.right}>
          <video
            src="/static/work/thinkspace/thoughtRegrouping.mov"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <Divider />
        <h4 className={styles.left}>Live Prototype —</h4>
        <div className={styles.right}>
          <p>
            I used the javascript library p5.js and its{" "}
            <a target="blank" href="https://github.com/IDMNYU/p5.js-speech">
              speech recognition library
            </a>{" "}
            to map voice-input to the visual particle system. Below is a link to
            a live prototype that translates the words you say. Additional
            thanks to Daniel Shiffman for his unending list of javascript video
            tutorials.
          </p>
          <br />
          <a target="blank" href="https://josephz-me.github.io/thinkspace/">
            <img src="/static/work/thinkspace/thinkspaceShadow.png"></img>
          </a>
        </div>

        <Divider />
        <h4 className={styles.left}>Progress Videos —</h4>
        <p className={styles.right}>
          Though this project was quite conceptually driven, a large part of my
          process went into exploring the code-based relationship between
          particle engines, input systems, and eventually text translation.
          Below are a series of progress videos that document my javascript
          explorations throughout this project.
        </p>
        <Spacer />
        <small className={styles.left}>
          Iteration 1 — Gravitational particles
        </small>
        <div className={styles.iFrameSmall}>
          <Iframe
            url="https://player.vimeo.com/video/390746526"
            className="iFrameDetails"
            position="absolute"
            width="100%"
            height="100%"
            display="initial"
            frameBorder="0"
            allow="fullscreen"
          />
        </div>
        <small className={styles.left}>Iteration 2 — Particle-to-text</small>
        <div className={styles.iFrameSmall}>
          <Iframe
            url="https://player.vimeo.com/video/390746564"
            className="iFrameDetails"
            position="absolute"
            width="100%"
            height="100%"
            display="initial"
            frameBorder="0"
            allow="fullscreen"
          />
        </div>
        <small className={styles.left}>Iteration 3 — Voice-to-text</small>
        <div className={styles.iFrameSmall}>
          <Iframe
            url="https://player.vimeo.com/video/391631851"
            className="iFrameDetails"
            position="absolute"
            width="100%"
            height="100%"
            display="initial"
            frameBorder="0"
            allow="fullscreen"
          />
        </div>

        <small className={styles.left}>Iteration 4 — Voice-to-Image</small>
        <div className={styles.iFrameSmall}>
          <Iframe
            url="https://player.vimeo.com/video/396996811"
            className="iFrameDetails"
            position="absolute"
            width="100%"
            height="100%"
            display="initial"
            frameBorder="0"
            allow="fullscreen"
          />
        </div>
        <small className={styles.left}>Integration into Physical Space</small>
        <div className={styles.iFrameSmall}>
          <Iframe
            url="https://player.vimeo.com/video/392121599"
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
        <h4 className={styles.left}>Conclusion —</h4>
        <p className={styles.right}>
          As time pass, so do people, their way of thinking, and the types of
          conversation they engage in. As people change, so does the role of
          Thinkspace. <br /> <br />
          Working on Thinkspace was delightful because it stemmed from a genuine
          interest in computation, multimodal forms of interaction, and the
          application of{" "}
          <a
            href="https://www.amazon.com/Metaphors-We-Live-George-Lakoff/dp/0226468011"
            target="blank"
          >
            metaphor thinking
          </a>{" "}
          in design. This project pushed me to challenge the potential
          applications of voice assistants, especially in proactive contexts
          such as this. Given more time, I'd love to build my program to a
          fidelity where it can be tested with real users. Whether it be through
          Wizard of Oz experiments or any other testing method, I want to see
          how this concept plays out in a real human conversation.
        </p>

        {/* <div className={styles.vimeo}>
          <iframe
            src="https://player.vimeo.com/video/390746526"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div> */}
      </div>
    </main>
  );
}
