import React from "react";
import { Modal, Button } from "antd";

const EventDetails = ({ event, visible, onClose }) => {
  return (
    <Modal
      title={event.title}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>{event.description}</p>
      <img src={event.image} alt={event.title} style={{ width: "100%" }} />
    </Modal>
  );
};

export default EventDetails;
