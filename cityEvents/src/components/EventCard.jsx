import PropTypes from "prop-types";

import {
  Card,
  Image,
  Title,
  Text,
  Container,
  Button,
  Group,
  Flex,
  useMantineTheme,
  Pill,
  ScrollArea,
  Grid,
  Box,
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

  const theme = useMantineTheme();
  const cardStyles = {
    backgroundColor: theme.colors.dark[5],
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  };

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
        alert("Event deleted successfully")

      })
      .catch((error) => console.log(error));
  };

  ////
  return (
    <Card
      style={cardStyles}
      color={theme.colors.dark[0]}
      padding="lg"
      radius="xl"
      width="500"
      height="700"
      shadow="md"
    >
      <Card.Section>
        <Image
          src="https://picsum.photos/300"
          alt={title}
          size="xs"
          px="md"
          pt="md"
          radius="xl"
        />
      </Card.Section>

      <Flex justify="space-between" direction="column" mt="md" mb="xs">
        <Text order={2} size="xl">{title}</Text>
        <Flex direction="row"
          gap="md"
          justify="flex-end"
          mt="sm"  
        >
          <Pill bg={theme.colors.dark[4]} >{date}</Pill>
          <Pill bg={theme.colors.dark[4]} >{price}</Pill>
        </Flex>
      </Flex>
      <Group px={0} >
        <Flex
          justify="space-between" 
          mt="xs"
          gap="xxl"
          direction="column"
        >
          <Text tt="uppercase" size="xs"> Where: {location}</Text>
          <Text tt="uppercase" size="xs">Organiser: {organiser}</Text>
        </Flex>
        <Box w="auto" left>
          <Text size="sm" lineClamp={5}>{description}</Text>
        </Box>
      </Group>
      <Flex padding={2} align="flex-end" mt='md'>
        <Group >
          <Button variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl" onClick={handleEditClick}>
            Edit
          </Button>
          <Button
            variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl"
            onClick={(e) => {
              handleDelete(e, event._id);
            }}
          >
            Delete
          </Button>
          <Button variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl">Event page</Button>
        </Group>
      </Flex>
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
