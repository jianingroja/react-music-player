import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
}) => {
  //Event Handler
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id); //return an array
    // console.log(selectedSong);
    setCurrentSong(selectedSong[0]);
    //check if there is a song playing at the moment
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      //? How is this a Promise?
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
    audioRef.current.play();
  };

  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
