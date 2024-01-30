import { Input, Textarea, NumberInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';


const EventForm = ({ handleChange, event }) => {
  return (
    <>
      <div>
        <Input
          id="title"
          name="title"
          label="Title"
          value={event.title}
          onChange={(event) => handleChange('title', event.target.value)}
          required
        />
      </div>
      <div>
        <Input
          id="organiser"
          name="organiser"
          label="Organiser"
          value={event.organiser}
          onChange={(event) => handleChange('organiser', event.target.value)}
        />
      </div>
      <div>
        <DatePicker
          id="date"
          name="date"
          label="Date"
          value={event.date}
          onChange={(date) => handleChange('date', date)}
        />
      </div>
      <div>
        <Input
          id="location"
          name="location"
          label="Location"
          value={event.location}
          onChange={(event) => handleChange('location', event.target.value)}
        />
      </div>
      <div>
        <NumberInput
          id="price"
          name="price"
          label="Price"
          value={event.price}
          onChange={(value) => handleChange('price', value)}
        />
      </div>
      <div>
        <Textarea
          id="description"
          name="description"
          label="Description"
          value={event.description}
          onChange={(event) => handleChange('description', event.target.value)}
        />
      </div>
      <div>
        <Input
          id="image"
          name="image"
          label="Image"
          value={event.image}
          onChange={(event) => handleChange('image', event.target.value)}
        />
      </div>
    </>
  );
};

export default EventForm;
