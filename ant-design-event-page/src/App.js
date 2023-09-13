import './App.css';
import React from "react";
import EventCard from "./EventCard";
import eventsData from "./event.json";

function App({ event }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {eventsData.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default App;
