import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";
import { createEvent } from "../api/saveEvent";
import { useState } from "react";

const AddEventPage = () => {
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

  const handleSubmit = (_event) => {
    _event.preventDefault();
    createEvent(event).then(() => navigate("/"));
  };

  const handleChange = (field, value) => {
    setEvent((event) => ({ ...event, [field]: value }));
  };

  return (
    <Box sx={{ paddingX: 24, paddingY: 4 }}>
      <form onSubmit={handleSubmit} name="create-event">
        <EventForm handleChange={handleChange} event={event} />
        <Button variant="contained" type="submit" sx={{ marginTop: 8 }}>
          Create
        </Button>
      </form>
    </Box>
  );
};

export default AddEventPage;
