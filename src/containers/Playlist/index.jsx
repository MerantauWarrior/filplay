import React from "react";
import styles from "./playlist.module.css";

export default function Playlist({ songs, song }) {
  // console.log(songs);
  const tracks = songs.map((item, i) => {
    return (
      <div className={styles.item} key={item.id} onClick={() => song(i)}>
        <div className={styles.cover}>
          <img
            src={"https://drunk-dj.biz:1718/static/" + item.id + ".png"}
            alt={item.title}
          />
        </div>
        <div className={styles.text}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.artist}>{item.artist}</div>
        </div>
        <div className={styles.duration}>{item.duration}</div>
        <div className={styles.genre}>{item.genre}</div>
        <div className={styles.status + " " + styles.waiting}></div>
      </div>
    );
  });
  return <div className={styles.inner}>{tracks}</div>;
}
