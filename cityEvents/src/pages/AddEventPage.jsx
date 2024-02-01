import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";
import { createEvent } from "../api/saveEvent";
import { useState, useEffect, useContext } from "react";
import { fetchEvents } from "../api/fetchEvents";
import { AuthContext } from "../contexts/AuthContext";
import { Button, Container, Flex, useMantineTheme, Text } from '@mantine/core'

const AddEventPage = () => {

  // Mantine theme ->
  const theme = useMantineTheme();
  const cardStyles = {
    backgroundColor: theme.colors.dark[0],
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  };
//

  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    organiser: "",
    location: "",
    date: "",
  });

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (_event) => {
    _event.preventDefault();

    createEvent(event, token) // Pass the authentication token to createEvent
      .then((response) => {
        console.log("Event creation response:", response);
        // Fetch events after creating a new event
        return fetchEvents(token); // Pass the authentication token to fetchEvents
      })
      .then((_events) => {
        console.log("Fetched events after creation:", _events);
        setEvents(_events);
        navigate("/");
        alert("Event added");
      })
      .catch((error) => {
        console.error("Error while creating/fetching events:", error);
      });
  };

  const handleChange = (field, value) => {
    setEvent((event) => ({ ...event, [field]: value }));
  };

  // Use useEffect to fetch events when the component mounts
  useEffect(() => {
    fetchEvents(token) // Pass the authentication token to fetchEvents
      .then((_events) => {
        console.log("Fetched events on component mount:", _events);
        setEvents(_events);
      })
      .catch((error) => {
        console.error("Error while fetching events on component mount:", error);
      });
  }, [token]);

  return (
    <Container sx={{ paddingX: 24, paddingY: 4 }} size="sm" c={theme.colors.dark[4]}>
      <Text  size="xl">Add event</Text>

      <form onSubmit={handleSubmit} name="create-event">
        <EventForm handleChange={handleChange} event={event} />
        <Button  variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl" type="submit" sx={{ marginTop: 8 }}>
          Create
        </Button>
      </form>
    </Container>
  );
};

export default AddEventPage;
