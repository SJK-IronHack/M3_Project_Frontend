import { Box, TextField } from "@mui/material";

const EventForm = ({ handleChange, event }) => {
  return (
    <Box>
      <TextField
        id="title"
        name="title"
        label="Title"
        variant="standard"
        value={event.title}
        onChange={(event) => handleChange("title", event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="organiser"
        name="organiser"
        label="Organiser"
        variant="standard"
        value={event.organiser}
        onChange={(event) => handleChange("organiser", event.target.value)}
        fullWidth
      />
      <TextField
        id="date"
        name="date"
        label="Date"
        variant="standard"
        type="date"
        value={event.date}
        onChange={(event) => handleChange("date", event.target.value)}
        fullWidth
      />
      <TextField
        id="location"
        name="location"
        label="Location"
        variant="standard"
        value={event.location}
        onChange={(event) => handleChange("location", event.target.value)}
        fullWidth
      />
      <TextField
        id="price"
        name="price"
        label="Price"
        variant="standard"
        type="number"
        value={event.price}
        onChange={(event) => handleChange("price", event.target.value)}
        fullWidth
      />
      <TextField
        id="description"
        name="description"
        label="Description"
        variant="standard"
        value={event.description}
        onChange={(event) => handleChange("description", event.target.value)}
        fullWidth
      />
      <TextField
        id="image"
        name="image"
        label="Image"
        variant="standard"
        value={event.image}
        onChange={(event) => handleChange("image", event.target.value)}
        fullWidth
      />
    </Box>
  );
};
export default EventForm;
