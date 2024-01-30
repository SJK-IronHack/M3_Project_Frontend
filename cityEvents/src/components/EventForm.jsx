import { Col, Input, Textarea, DatePicker, NumberInput } from '@mantine/core';

const EventForm = ({ handleChange, event }) => {
  return (
    <>
      <Col span={12}>
        <Input
          id="title"
          name="title"
          label="Title"
          value={event.title}
          onChange={(event) => handleChange('title', event.target.value)}
          required
        />
      </Col>
      <Col span={12}>
        <Input
          id="organiser"
          name="organiser"
          label="Organiser"
          value={event.organiser}
          onChange={(event) => handleChange('organiser', event.target.value)}
        />
      </Col>
      <Col span={12}>
        <DatePicker
          id="date"
          name="date"
          label="Date"
          value={event.date}
          onChange={(date) => handleChange('date', date)}
        />
      </Col>
      <Col span={12}>
        <Input
          id="location"
          name="location"
          label="Location"
          value={event.location}
          onChange={(event) => handleChange('location', event.target.value)}
        />
      </Col>
      <Col span={12}>
        <NumberInput
          id="price"
          name="price"
          label="Price"
          value={event.price}
          onChange={(value) => handleChange('price', value)}
        />
      </Col>
      <Col span={12}>
        <Textarea
          id="description"
          name="description"
          label="Description"
          value={event.description}
          onChange={(event) => handleChange('description', event.target.value)}
        />
      </Col>
      <Col span={12}>
        <Input
          id="image"
          name="image"
          label="Image"
          value={event.image}
          onChange={(event) => handleChange('image', event.target.value)}
        />
      </Col>
    </>
  );
};

export default EventForm;
