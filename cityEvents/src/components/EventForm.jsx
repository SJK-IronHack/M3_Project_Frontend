import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const EventForm = ({ isLogin = true }) => {
  const [title, setTitle] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { saveToken } = useContext(AuthContext);

  const handleTitle = (event) => setTitle(event.target.value);
  const handleOrganiser = (event) => setOrganiser(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleLocation = (event) => setLocation(event.target.value);
  const handlePrice = (event) => setPrice(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleImage = (event) => setImage(event.target.value);

  const navigate = useNavigate();
  // HOW TO UPLOAD THE IMG FROM LOCAL DISC

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventToCreate = {
      title,
      organiser,
      date,
      location,
      price,
      description,
      image,
    };
    try {
      const response = await fetch("/events", "POST", eventToCreate);
      `${import.meta.env.VITE_API_URL}/auth/${isLogin ? "login" : "signup"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventToCreate),
        };
      if (response.status === 201) {
        const event = await response.json();
        console.log(event);
        navigate(`/events/${event._id}`);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitle} required />
      </label>
      <label>
        Organiser:
        <input type="text" value={organiser} onChange={handleOrganiser} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDate} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={handleLocation} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={handlePrice} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={handleDescription} />
      </label>
      <label>
        Image:
        <input type="text" value={image} onChange={handleImage} />
      </label>

      <button type="submit">{isLogin ? "Login" : "Signup"}</button>
    </form>
  );
};
export default EventForm;
