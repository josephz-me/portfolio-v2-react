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
      {isVideoLoaded ? (
        <video
          autoPlay
          playsInline
          loop
          muted
          src={props.video}
          onLoadedData={() => setIsVideoLoaded(true)}
        />
      ) : (
        <img src={props.videoThumb} />
      )}
    </div>
  );
}
