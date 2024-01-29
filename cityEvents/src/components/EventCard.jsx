import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CommentsModule from "./EventComments";

export const EventCard = ({ event }) => {
  const { _id, title, organiser, date, location, price, description, image } =
    event;
  return (
    <Card raised sx={{ width: 400 }}>
      <CardMedia
        component="img"
        alt={title}
        height="240"
        image="https://picsum.photos/300"
        // image={image}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Box sx={{ marginY: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {organiser}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<EditIcon />}>
          Edit
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
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
