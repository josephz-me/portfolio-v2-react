import React from "react";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <Link href={`${props.route}`}>
      <a className={styles.cards__card}>
        {props.isImage ? (
          <img src={props.image} /> || (
            <SkeletonTheme
              color="rgb(220,220,220,10)"
              highlightColor="rgb(230,230,230,10)"
            >
              <Skeleton height={"30vw"} className="skeleton" />
            </SkeletonTheme>
          )
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
