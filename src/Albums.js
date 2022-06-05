import React from "react";
import "./Albums.css";
import Disc from "./Disc";

function Albums(props) {
  const discs = props.discography;
  let albuns = [];
  discs.forEach((disc) => {
    albuns.push(
      <Disc
        key={disc.id}
        title={disc.title}
        numberSongs={disc.numberSongs}
        releaseDate={disc.releaseDate}
        tracks={disc.tracks}
      ></Disc>
    );
  });
  return <div className="album-item">{albuns}</div>;
}

export default Albums;
