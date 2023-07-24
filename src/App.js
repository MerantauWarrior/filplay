import { useEffect, useRef, useState } from "react";
import Player from "./containers/Player";
import Playlist from "./containers/Playlist";
import Search from "./containers/Search";

function App() {
  const [isPlaying, setIsPlaying] = useState("stop");
  const [tracks, setTracks] = useState([]);
  const [trackNow, setTrackNow] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [id, setId] = useState(null);
  const audRef = useRef(null);

  useEffect(() => {
    if (isPlaying === "play") {
      audRef.current.play();
    } else if (isPlaying === "pause") {
      audRef.current.pause();
    } else if (isPlaying === "stop") {
      audRef.current.pause();
      audRef.current.currentTime = 0;
    } else {
      return false;
    }
  }, [isPlaying, trackNow]);

  const onOffSong = (val) => {
    setIsPlaying(val);
  };
  const changeTrack = (num) => {
    setTrackNow(num);
    setId(tracks[trackNow].id);
    setIsPlaying("play");
  };
  const nextSong = () => {
    setTrackNow((prev) => prev + 1);
    setId(tracks[trackNow].id);
    setIsPlaying("play");
  };
  const prevSong = () => {
    setTrackNow((prev) => prev - 1);
    setId(tracks[trackNow].id);
    setIsPlaying("play");
  };
  const prevFow = () => {
    audRef.current.currentTime -= 15;
  };
  const nextFow = () => {
    audRef.current.currentTime += 15;
  };
  const loadMeta = () => {
    const dur = audRef.current.duration;
    setDuration(dur);
  };
  const update = () => {
    const p = audRef.current.currentTime;
    setProgress(p);
  };
  useEffect(() => {
    fetch("https://46.149.83.214:1718/api/v1/library", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic VTBLQjpKM3c4dE9DbDk0MA==",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setTracks(data.tracks);
        // setId(data.tracks[trackNow].id);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="container">
      <Search />
      <Playlist songs={tracks} song={changeTrack} />
      <Player
        next={nextSong}
        prev={prevSong}
        playPause={onOffSong}
        isPlaying={isPlaying}
        prevFow={prevFow}
        nextFow={nextFow}
        audRef={audRef}
        duration={duration}
        progress={progress}
      />
      <audio
        ref={audRef}
        src={"https://drunk-dj.biz:1718/static/" + id + ".mp4"}
        onEnded={nextSong}
        onLoadedMetadata={loadMeta}
        onTimeUpdate={update}
      />
    </div>
  );
}

export default App;
