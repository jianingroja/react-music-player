import React, { useRef, useState } from "react";
//component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//specific icons (faAngleDoubleLeft)
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  //Ref
  const audioRef = useRef(null);

  //Event Handlers
  const playSongHandler = () => {
    // console.log(audioRef.current);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying); //change the state
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const songDuration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: songDuration });
  };

  const getTime = (time) => {
    return (
      //format time
      //* Math.floor: 向下取整
      //* %：向下去余
      //* 换算成分钟 + ： +（ 0 + 60以内的秒数）<取后两位，如果秒数是个位数，则为‘0x’，如果有十位数，则为‘0xx’>
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime} //controlled input
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        {/* icon */}
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="skup-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler} //在点击之前加载媒体信息，展示songDuration
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
