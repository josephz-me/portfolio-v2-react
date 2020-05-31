import React from "react";
import Link from "next/link";
import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <Link href={`${props.route}`}>
      <a className={styles.cards__card}>
        <img src={props.image} />
        <div className={styles.cards__info}>
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
      </a>
    </Link>
  );
}
