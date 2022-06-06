import { useState } from "react";
import "./Disc.css";

function Disc(props) {
  const [show, setShow] = useState(false);
  const tracks = props.tracks;

  let songs = [];
  tracks.forEach((song, i) => {
    songs.push(<p key={i}>{song}</p>);
  });

  const songDisplay = () => {
    setShow(!show);
  };

  return (
    <div className="album-item" onClick={songDisplay}>
      <h1>{props.title}</h1>
      <p className="album-item__extra">Number of tracks: {props.numberSongs}</p>
      <p className="album-item__extra">Release year: {props.releaseDate}</p>
      {show ? <div className="album-item__extra">{songs}</div> : null}
    </div>
  );
}

export default Disc;
