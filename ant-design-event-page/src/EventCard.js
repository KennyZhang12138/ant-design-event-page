import React from "react";
import { Card, Button } from "antd";

const EventCard = ({ event }) => {
  return (
    <Card
      title={event.title}
      extra={<Button type="primary">Details</Button>}
      style={{ width: 300, margin: "16px" }}
    >
      <img src={event.image} alt={event.title} style={{ width: "100%" }} />
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>{event.description}</p>
    </Card>
  );
};

export default EventCard;
