import { useState, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
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
      const response = await fetchWithToken("/events", "POST", eventToCreate);
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
        {" "}
        Title:
        <input type="text" value={title} onChange={handleTitle} required />
      </label>
      <label>
        Organiser:
        <input type="text" value={organiser} onChange={handleOrganiser} />{" "}
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDate} />{" "}
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={handleLocation} />{" "}
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={handlePrice} />{" "}
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={handleDescription}
        />{" "}
      </label>
      <label>
        Image:
        <input type="text" value={image} onChange={handleImage} />{" "}
      </label>

      <button type="submit">{isLogin ? "Login" : "Signup"}</button>
    </form>
  );
};
export default EventForm;
