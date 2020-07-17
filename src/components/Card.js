import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <Link href={`${props.route}`}>
      <a className={styles.cards__card}>
        {props.isImage ? (
          <img src={props.image || <Skeleton />} />
        ) : (
          <video
            src={props.image || <Skeleton />}
            muted
            autoPlay
            loop
            playsInline
          />
        )}
        <div className={styles.cards__info}>
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
      </a>
    </Link>
  );
}
