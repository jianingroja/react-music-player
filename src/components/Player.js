import React, { useState, useEffect } from "react";
//component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//specific icons (faAngleDoubleLeft)
import {
  faPlay,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  //UseEffect
  useEffect(() => {
    //Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);
  //* When currentSong changes, we update Songs array

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

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]); //*余数
    }
    if (direction === "skip-back") {
      //如果index为-1，回到最后一首歌，返回
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      //如果index不小于0，跳到上一首歌
      setCurrentSong(songs[currentIndex - 1]);
    }
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
          max={songInfo.duration || 0} //fixing NAN problem
          value={songInfo.currentTime} //controlled input
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration || 0)}</p>
        {/* fixing NAN problem */}
      </div>
      <div className="play-control">
        {/* icon */}
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleDoubleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay} //Toggle the button
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skup-forward"
          size="2x"
          icon={faAngleDoubleRight}
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
