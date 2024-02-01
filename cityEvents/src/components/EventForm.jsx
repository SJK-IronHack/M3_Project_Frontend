import { Input, Textarea, NumberInput, FileInput, Container, useMantineTheme, TextInput } from '@mantine/core';
import { Calendar, DatePicker, DatePickerInput, DateTimePicker, DatesProvider } from '@mantine/dates';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';



const EventForm = ({ handleChange, event }) => {

  // Mantine theme ->
  const theme = useMantineTheme();
  const cardStyles = {
    backgroundColor: theme.colors.dark[0],
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  };
  //

  return (
    <Container>
      {/* form is missing??? */}
      <div>
        <TextInput
          c={theme.colors.dark[3]}
          tt="uppercase"
          size="xs" radius="xl"
          id="title"
          name="title"
          label="Title"
          placeholder="Title"

          value={event.title}
          onChange={(event) => handleChange('title', event.target.value)}
          required
        />
      </div>
      <div>
        <TextInput
          c={theme.colors.dark[3]}

          tt="uppercase"
          size="xs" radius="xl"
          id="organiser"
          name="organiser"
          label="Organiser"
          placeholder="Organiser"

          value={event.organiser}
          onChange={(event) => handleChange('organiser', event.target.value)}
        />
      </div>
      <div>
        <DatesProvider>
          <DatePicker
           label="Date"
            value={event.date}
            onChange={(date) => handleChange('date', date)} />
        </DatesProvider>
        {/* <DatePicker
          placeholder="Pick dates range"
          id="date"
          name="date"
          label="Date"
          value={event.date}
          onChange={(date) => handleChange('date', date)}
        /> */}
      </div>
      <div>
        <TextInput
          c={theme.colors.dark[3]}

          tt="uppercase"
          size="xs" radius="xl"
          id="location"
          name="location"
          label="Location"
          placeholder="Location"
          value={event.location}
          onChange={(event) => handleChange('location', event.target.value)}
        />
      </div>
      <div>
        <NumberInput
          c={theme.colors.dark[3]}
          tt="uppercase"
          size="xs" radius="xl"
          id="price"
          name="price"
          label="Price"
          value={event.price}
          onChange={(value) => handleChange('price', value)}
        />
      </div>
      <div>
        <Textarea
          c={theme.colors.dark[3]}
          tt="uppercase"
          size="xs" radius="xl"
          id="description"
          name="description"
          label="Description"
          placeholder="Description"
          value={event.description}
          onChange={(event) => handleChange('description', event.target.value)}
        />
      </div>
      <div>
        <FileInput
          c={theme.colors.dark[3]}
          tt="uppercase"
          size="xs" radius="xl"
          id="image"
          name="image"
          label="Upload Image"
          placeholder="Upload Image"
          value={event.image}
          onChange={(event) => handleChange('image', event.target.value)}
        />
      </div>
      <div>

      </div>
    </Container>
  );
};

export default EventForm;
