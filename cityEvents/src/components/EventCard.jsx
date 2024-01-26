import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <Link to={`/${event._id}`}>
        <h2>{event.title}</h2>
        <p>
          <strong>Organiser:</strong> {event.organiser}
        </p>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Price:</strong> {event.price}
        </p>
        <p>
          <strong>Description:</strong> {event.description}
        </p>
        <img src={event.image} alt="Event" />
      </Link>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    organiser: PropTypes.string.isRequired,
    date: PropTypes.date.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
