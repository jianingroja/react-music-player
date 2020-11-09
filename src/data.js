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
      color: ["#0a514c", "#278983"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
    },
    {
      name: "Anemone",
      artist: "Philanthrope, Dotlights",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#D88561", "#A0423D"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10259",
    },
    {
      name: "Hidden Structure",
      artist: "Leavv, Flitz&Suppe",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#639C95", "#428567"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
    },
    {
      name: "Tumbling",
      artist: "Swørn",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#CF6481", "#854D84"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9225",
    },
    {
      name: "this again..",
      artist: "SwuM, quickly, quickly",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/f3dda653e5ff94d787639ef56cb8e922d321a04f-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#DA7121", "#922B1F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8953",
    },
    {
      name: "String Along",
      artist: "Miscél",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/53eef8b1ac9bf40038b2b5dc7ca2d13fc19cf95e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#6E9CBD", "#7279A7"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10315",
    },
  ];
}

export default chillHop;
