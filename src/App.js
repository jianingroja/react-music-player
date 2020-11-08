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
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
