import React, { useState, useRef, useEffect } from "react";
import styles from "./Player.module.css";
import Icon from "../../components/UI/Icon";

export default function Player({
  playPause,
  next,
  prev,
  prevFow,
  nextFow,
  audRef,
  duration,
  progress,
}) {
  const [volume, setVolume] = useState(20);
  const progressRef = useRef(null);
  const update = (e) => {
    audRef.current.currentTime = e.target.value;
  };
  useEffect(() => {
    if (audRef) {
      audRef.current.volume = volume / 100;
    }
  }, [volume, audRef]);

  const toHHMMSS = (senondsNumber) => {
    let sec_num = parseInt(senondsNumber, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;
    hours = hours !== 0 ? hours : "";
    hours =
      hours < 10 && hours !== ""
        ? "0" + hours + ":"
        : hours === ""
        ? ""
        : hours;
    minutes = minutes < 10 ? "0" + minutes + ":" : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + minutes + seconds;
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <input
          type="range"
          ref={progressRef}
          min={0}
          max={duration}
          value={progress}
          onChange={(e) => update(e)}
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.icons}>
          <Icon
            name="play"
            size="30px"
            fill="white"
            onClick={() => playPause("play")}
          />
          <Icon
            name="pause"
            size="30px"
            fill="white"
            onClick={() => playPause("pause")}
          />
          <Icon
            name="stop"
            size="30px"
            fill="white"
            onClick={() => playPause("stop")}
          />
          <Icon name="backward" size="30px" fill="white" onClick={prevFow} />
          <Icon name="forward" size="30px" fill="white" onClick={nextFow} />
          <Icon name="previous" size="30px" fill="white" onClick={prev} />
          <Icon name="next" size="30px" fill="white" onClick={next} />
        </div>
        <div className={styles.time}>
          <div>{toHHMMSS(progress)}</div>
          <div>/</div>
          <div>{toHHMMSS(duration)}</div>
        </div>
      </div>
    </div>
  );
}
