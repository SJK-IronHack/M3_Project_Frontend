{/* <EventForm isLogin /> */}

import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../components/EventForm";
import { updateEvent, getEventById } from "../api/event"; // Assuming you have an API method for updating and getting events
import { useState, useEffect } from "react";

const EditEventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    organiser: "",
    location: "",
    date: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the event details when the component mounts
    getEventById(eventId).then((eventData) => {
      setEvent(eventData);
    });
  }, [eventId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEvent(eventId, event).then(() => navigate("/"));
  };

  const handleChange = (field, value) => {
    setEvent((prevEvent) => ({ ...prevEvent, [field]: value }));
  };

  return (
    <Box sx={{ paddingX: 24, paddingY: 4 }}>
      <form onSubmit={handleSubmit} name="edit-event">
        <EventForm handleChange={handleChange} event={event} />
        <Button variant="contained" type="submit" sx={{ marginTop: 8 }}>
          Update
        </Button>
      </form>
    </Box>
  );
};

export default EditEventPage;
