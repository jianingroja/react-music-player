export const playAudio = (isPlaying, audioRef) => {
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
};
