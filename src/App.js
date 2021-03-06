import React, { useState, useRef } from "react";
//Import Styles
import "./style/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//Import Data
import data from "./data";

function App() {
  //Ref
  const audioRef = useRef(null);

  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]); //by defalut the first one in the song array
  const [isPlaying, setIsPlaying] = useState(false);
  const [LibraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`App ${LibraryStatus ? "library-active" : ""}`}>
      <Nav LibraryStatus={LibraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        LibraryStatus={LibraryStatus}
      />
      <div className="place-holder">
        <p>
          如何在互联网充斥的时代过一种纸质的智性生活，这是一个比我是谁，我从哪里来，我到哪里去更严肃的问题。
        </p>
      </div>
    </div>
  );
}

export default App;
