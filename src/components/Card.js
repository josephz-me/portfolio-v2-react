import React, { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./Card.module.scss";

export default function Card(props) {
  const [content, mountContent] = useState(false);
  useEffect(() => {
    mountContent(true);
    console.log("mounted");
  }, []);

  return (
    <Link href={`${props.route}`}>
      <a className={styles.cards__card}>
        {props.isImage ? (
          content ? (
            <img src={props.image} />
          ) : (
            <SkeletonTheme
              color="rgb(220,220,220,10)"
              highlightColor="rgb(230,230,230,10)"
            >
              <Skeleton height={"30vw"} className="skeleton" />
            </SkeletonTheme>
          )
        ) : content ? (
          <video
            src={props.image}
            muted
            autoPlay
            loop
            playsInline
            // webkit-playsinline
          />
        ) : (
          <SkeletonTheme
            color="rgb(220,220,220,10)"
            highlightColor="rgb(230,230,230,10)"
          >
            <Skeleton height={"30vw"} className="skeleton" />
          </SkeletonTheme>
        )}
        <div className={styles.cards__info}>
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
      </a>
    </Link>
  );
}
