import React, { useState } from "react";
import styles from "./CardVideo.module.scss";

export default function VideoCard(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className={styles.container}>
      <img
        src={props.videoThumb}
        alt="thumbnail video"
        style={{ display: isVideoLoaded ? "none" : "block" }}
      />
      <video
        autoPlay
        playsInline
        loop
        muted
        src={props.video}
        onCanPlay={onLoadedData}
        style={{ display: isVideoLoaded ? "block" : "none" }}
      />
    </div>
  );
}
