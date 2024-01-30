import PropTypes from "prop-types";
import {
  Card,
  Image,
  Title,
  Text,
  Container,
  Button,
  Group,
} from "@mantine/core";
import CommentsModule from "./EventComments";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import deleteEvent from "../api/deleteEvent";
import editEvent from "../api/editEvent";

// const navigate = useNavigate();

export const EventCard = ({ event, fetchEvents }) => {
  const { _id, title, organiser, date, location, price, description, image } =
    event;
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`/editevent/${_id}`);
  };
  const [eventData, setEventData] = useState(event);
  // const handleDeleteClick = async () => {
  //   // Show confirmation dialog
  //   const shouldDelete = window.confirm(
  //     "Are you sure you want to delete this event?"
  //   );

  //   if (shouldDelete) {
  //     try {
  //       // Call the deleteEvent function
  //       await deleteEvent(_id, {}, token);
  //       // Call the onDelete function passed from the parent component
  //       onDelete(_id);
  //     } catch (error) {
  //       console.error("Error while deleting event:", error);
  //     }
  //   }
  // };

  ////
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    // Fetch the event details when the component mounts
    editEvent.getEventById(_id, authToken).then((data) => {
      setEventData(data);
    });
  }, [_id]);

  const handleDelete = (e, _id) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
    const eventEndpoint = `${import.meta.env.VITE_API_URL}/api/events/${_id}`;

    fetch(eventEndpoint, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        if (response.status === 204) {
          fetchEvents();
        }
      })
      .catch((error) => console.log(error));
  };

  ////
  return (
    <Card sshadow="sm" padding="lg" radius="md" withBorder width="500">
      <Card.Section>
        <Image
          src="https://picsum.photos/300"
          alt={title}
          // height={160}
          width={250}
        />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text order={2}>{title}</Text>
        <Text>{date}</Text>
        <Text>{price}</Text>
      </Group>
      <Container padding={2}>
        <Group spacing={2} style={{ marginY: 2 }}>
          <Text>{location}</Text>
          <Text>{organiser}</Text>
        </Group>
        <Text>{description}</Text>
      </Container>
      <Container padding={2}>
        <Group position="apart">
          <Button size="sm" onClick={handleEditClick}>
            Edit
          </Button>
          <Button
            size="sm"
            onClick={(e) => {
              handleDelete(e, event._id);
            }}
          >
            Delete
          </Button>
        </Group>
      </Container>
      <CommentsModule eventId={_id} />
    </Card>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    organiser: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired, // Change to PropTypes.string
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
