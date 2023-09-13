import './App.css';
import React from "react";
import EventCard from "./EventCard";
import eventsData from "./event.json";

function App({ event }) {
  //using map to display all events inside event.json
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {eventsData.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default App;
