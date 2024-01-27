import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const EventCard = ({ event }) => {

  const {eventId, title, organiser, date, location, price, description, image} = event
  return (
    <div className="event-card">
      <Link to={`/${eventId}`}>
        <h2>{title}</h2>
        <p>
          <strong>Organiser:</strong> {organiser}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Price:</strong> {price}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <img src={image} alt="Event" />
      </Link>
    </div>
  );
};

// EventCard.propTypes = {
//   event: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     organiser: PropTypes.string.isRequired,
//     date: PropTypes.date.isRequired,
//     location: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default EventCard;
