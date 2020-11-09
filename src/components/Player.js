import React, { useState } from "react";
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
  // //UseEffect
  // useEffect(() => {
  //   //Add Active State
  //   const newSongs = songs.map((song) => {
  //     if (song.id === currentSong.id) {
  //       return { ...song, active: true };
  //     } else {
  //       return { ...song, active: false };
  //     }
  //   });
  //   setSongs(newSongs);
  // }, [currentSong]);
  //* When currentSong changes, we update Songs array
  //* We are updating it twice, here and LibrarySong.js
  //* So we remove useEffect, create activeLibraryHandler function

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSongs);
  };
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
    //Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(songDuration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: songDuration,
      animationPercentage: percentage,
    });
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
    const percentage = Math.round((e.target.value / songInfo.duration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
      animationPercentage: percentage,
    });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]); //*余数
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      //如果index为-1，回到最后一首歌，返回
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);

        // playAudio(isPlaying, audioRef);

        if (isPlaying) {
          audioRef.current.play();
        }
        return;
      }
      //如果index不小于0，跳到上一首歌
      await setCurrentSong(songs[currentIndex - 1]);
      activeLibraryHandler(songs[currentIndex - 1]);
    }
    // playAudio(isPlaying, audioRef);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  //? Async? Await?
  const songEndHandler = async () => {
    await skipTrackHandler("skip-forward");
  };

  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  //Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to left, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0} //fixing NAN problem
            value={songInfo.currentTime} //controlled input
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{getTime(songInfo.duration || 0)}</p>
        {/* songInfo.duration ? getTime(songInfo.duration) :'0:00' */}
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
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default Player;
