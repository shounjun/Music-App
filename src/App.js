import "./App.css";
import React from "react";
import "./Albums.js";
import Albums from "./Albums.js";

const discography = [
  {
    id: "alb1",
    title: "Hybrid Theory",
    releaseDate: 2000,
    numberSongs: 12,
    tracks: [
      "Papercut",
      "One Step Closer",
      "With You",
      "Points of Authority",
      "Crawling",
      "Runaway",
      "By Myself",
      "In the End",
      "A Place for My Head",
      "Forgotten",
      "Cure for the Itch",
      "Pushing Me Away",
    ],
  },

  {
    id: "alb2",
    title: "Meteora",
    releaseDate: 2003,
    numberSongs: 13,
    tracks: [
      "Foreword",
      "Don't Stay",
      "Somewhere I Belong",
      "Lying from You",
      "Hit the Floor",
      "Easier to Run",
      "Faint",
      "Figure.09",
      "Breaking the Habit",
      "From the Inside",
      "Nobody's Listening",
      "Session",
      "Numb",
    ],
  },

  {
    id: "alb3",
    title: "A Thousand Suns",
    releaseDate: 2010,
    numberSongs: 15,
    tracks: [
      "The Requiem",
      "The Radiance",
      "Burning in the Skies",
      "Empty Spaces",
      "When They Come for Me",
      "Jornada Del Muerto",
      "Waiting for the End",
      "Blackout",
      "Wretches and Kings",
      "Wisdom, Justice, and Love",
      "Iridescent",
      "Fallout",
      "The Catalyst",
      "The Messenger",
    ],
  },
];

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Music App</h1>
        <Albums discography={discography}></Albums>
      </div>
    </div>
  );
}

export default App;
