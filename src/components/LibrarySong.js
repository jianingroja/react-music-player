import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  //Event Handler
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id); //return an array
    // console.log(selectedSong);
    await setCurrentSong(selectedSong[0]);

    //Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSongs);

    //check if there is a song playing at the moment
    // playAudio(isPlaying, audioRef);
    // if (isPlaying) {
    //   const playPromise = audioRef.current.play();
    //   //? How is this a Promise?
    //   if (playPromise !== undefined) {
    //     playPromise.then((audio) => {
    //       audioRef.current.play();
    //     });
    //   }
    // }
    if (isPlaying) {
      audioRef.current.play();
    }
    // audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
