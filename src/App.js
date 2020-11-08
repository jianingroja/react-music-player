import React, { useState } from "react";
//Import Styles
import "./style/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
//Import Util
import data from "./util";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]); //by defalut the first one in the song array
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
