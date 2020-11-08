import { v4 as uuidv4 } from "uuid";

//State
function chillHop() {
  return [
    {
      name: "Pacific",
      artist: "Philanthrope, No Spirit",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/04/478079cd16fca3ef62a4667dff1673e96e2b635f-1024x1024.jpg",
      id: uuidv4(),
      active: true, //default playing
      color: ["#D67872", "#477E61"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9424",
    },
    {
      name: "Under the City Stars",
      artist: "Aso, Middle School, Aviino ",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-150x150.jpg",
      id: uuidv4(),
      active: false,
      color: ["#3CDACC", "#135359"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
    },
  ];
}

export default chillHop;
