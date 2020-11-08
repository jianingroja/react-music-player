import React, { useState, useRef } from "react";
//Import Styles
import "./style/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//Import Util
import data from "./util";
import LibrarySong from "./components/LibrarySong";

function App() {
  //Ref
  const audioRef = useRef(null);

  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]); //by defalut the first one in the song array
  const [isPlaying, setIsPlaying] = useState(false);
  const [LibraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className="App">
      <Nav LibraryStatus={LibraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        LibraryStatus={LibraryStatus}
      />
    </div>
  );
}

export default App;
