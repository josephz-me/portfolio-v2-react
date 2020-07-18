import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Card.module.scss";
import CardVideo from "./CardVideo";

export default function Card(props) {
  return (
    <Link href={`${props.route}`}>
      <a className={styles.cards__card}>
        {props.isImage ? (
          <img src={props.image} />
        ) : (
          <CardVideo video={props.video} videoThumb={props.videoThumb} />
        )}
        <div className={styles.cards__info}>
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
      </a>
    </Link>
  );
}

{
  /* <video
            src={props.image}
            muted
            autoPlay
            loop
            playsInline
            onLoadedData={setLoaded}
            // webkit-playsinline
          /> */
}
