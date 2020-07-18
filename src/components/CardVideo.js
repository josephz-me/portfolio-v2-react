import React, { useState } from "react";
import styles from "./CardVideo.module.scss";

export default function VideoCard(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  console.log(isVideoLoaded);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
    console.log("done");
  };

  return (
    <div className={styles.container}>
      <img
        src={props.videoThumb}
        alt="thumbnail video"
        style={{ opacity: isVideoLoaded ? 0 : 0 }}
      />

      <video
        autoPlay
        playsInline
        loop
        muted
        src={props.video}
        onLoadedData={() => setIsVideoLoaded(true)}
        style={{ opacity: isVideoLoaded ? 1 : 1 }}
      />
    </div>
  );
}
