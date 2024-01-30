import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import EventForm from '../components/EventForm';
// import { updateEvent } from '../api/editEvent';

const EditEventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({
    title: '',
    description: '',
    price: 0,
    image: '',
    organiser: '',
    location: '',
    date: '',
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
    updateEvent(eventId, event).then(() => navigate('/'));
  };

  const handleChange = (field, value) => {
    setEvent((prevEvent) => ({ ...prevEvent, [field]: value }));
  };

  return (
    <Box style={{ paddingX: 24, paddingY: 4 }}>
      <form onSubmit={handleSubmit} name="edit-event">
        <EventForm handleChange={handleChange} event={event} />
        <Button style={{ marginTop: 8 }} fullWidth variant="filled">
          Update
        </Button>
      </form>
    </Box>
  );
};

export default EditEventPage;
