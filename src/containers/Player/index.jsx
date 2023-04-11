import React, { useState, useRef } from "react";
import styles from "./Player.module.css";
import Icon from "../../components/UI/Icon";

export default function Player() {
  const [duration, setDuraion] = useState(0);
  const audioRef = useRef();
  const play = () => {
    audioRef.current.play();
  };
  const pause = () => {
    audioRef.current.pause();
  };
  const stop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };
  const backward = () => {
    audioRef.current.currentTime -= 10;
  };
  const forward = () => {
    audioRef.current.currentTime += 10;
  };
  const getDuration = () => {
    setDuraion(Math.floor(audioRef.current.duration));
  };
  const updateTime = () => {
    console.log(
      Math.floor(audioRef.current.duration - audioRef.current.currentTime)
    );
  };
  const toHHMMSS = (senondsNumber) => {
    let sec_num = parseInt(senondsNumber, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;
    hours = hours !== 0 ? hours : null;
    minutes = minutes !== 0 ? minutes : null;
    hours =
      hours < 10 && hours !== null
        ? "0" + hours + ":"
        : hours === null
        ? ""
        : hours;
    minutes =
      minutes < 10 && minutes !== null
        ? "0" + minutes + ":"
        : minutes !== null
        ? ""
        : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + minutes + seconds;
  };
  let played = "20%";
  return (
    <div className={styles.wrapper}>
      <div className={styles.progress}>
        <div className={styles.played} style={{ width: played }}></div>
      </div>
      <div className={styles.inner}>
        <Icon name="play" size="30px" fill="white" onClick={play} />
        <Icon name="pause" size="30px" fill="white" onClick={pause} />
        <Icon name="stop" size="30px" fill="white" onClick={stop} />
        <Icon name="backward" size="30px" fill="white" onClick={backward} />
        <Icon name="forward" size="30px" fill="white" onClick={forward} />
        <Icon name="previous" size="30px" fill="white" />
        <Icon name="next" size="30px" fill="white" />
        <div>{toHHMMSS(duration)}</div>
      </div>
      <audio
        src="/1.mp4"
        controls
        ref={audioRef}
        onDurationChange={getDuration}
        onTimeUpdate={updateTime}
      ></audio>
    </div>
  );
}
