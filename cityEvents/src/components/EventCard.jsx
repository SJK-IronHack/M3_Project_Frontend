import PropTypes from "prop-types";

import {
  Card,
  Image,
  Title,
  Text,
  Container,
  Button,
  Group,
  useMantineTheme,
  Pill,
} from '@mantine/core';
import CommentsModule from "./EventComments";
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();


export const EventCard = ({ event }) => {
  const { _id, title, organiser, date, location, price, description, image } =
  event;
  
  const theme = useMantineTheme();
    const cardStyles = {
      backgroundColor: theme.colors.dark[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    };

  return (
    <Card style= {cardStyles} color={theme.colors.dark[0]} sshadow="xl" padding="lg" radius="xl"  width='500' height='700' shadow="md">
      <Card.Section>
        <Image
          src="https://picsum.photos/300"
          alt={title}
          width={250}
        />
      </Card.Section>
      <Group  mt="md">
        <Text order={1} >{title}</Text>
      </Group>
      <Group justify="space-between" mt="md" mb="xs">

        <Pill  bg={theme.colors.dark[1]}>When: {date}</Pill>
        <Pill  bg={theme.colors.dark[1]} color={theme.colors.light[0]}>Price: {price}</Pill>
      </Group>
      <Container padding={2}>
        <Group spacing={2} style={{ marginY: 2 }}>
          <Text> Where: {location}</Text>
          <Text>{organiser}</Text>
        </Group>
        <Text>{description}</Text>
      </Container>
      <Container padding={2}>
        <Group position="apart">
          <Button variant="filled" color={theme.colors.dark[3]} size="xs" radius="xl" >  Edit </Button>
          <Button  variant="filled" color={theme.colors.dark[3]} size="xs" radius="xl" > Delete </Button>
        </Group>
      </Container>
      <CommentsModule eventId={_id} />
    </Card>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
