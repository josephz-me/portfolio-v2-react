import React, { useState } from "react";
import styles from "./CardVideo.module.scss";

export default function VideoCard(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  console.log(isVideoLoaded);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className={styles.container}>
      <video
        autoPlay
        playsInline
        loop
        muted
        src={props.video}
        onLoadedData={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      />
      <img
        src={props.videoThumb}
        alt="thumbnail video"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
    </div>
  );
}

//   <div className={styles.container}>
//   {isVideoLoaded ? (
// 	<video
// 	  autoPlay
// 	  playsInline
// 	  loop
// 	  muted
// 	  src={props.video}
// 	  onLoadedData={() => setIsVideoLoaded(true)}
// 	/>
//   ) : (
// 	<img src={props.videoThumb} onLoad={onLoadedData} />
//   )}
// </div>
