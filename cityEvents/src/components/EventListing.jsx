import React, { useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import EventCard from "./EventCard";
import { useMantineTheme, Button } from "@mantine/core";

const API_URL = import.meta.env.VITE_API_URL;

function EventListing({ events }) {
  const theme = useMantineTheme();

  const [eventList, setEventList] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/events`);
      if (response.ok) {
        const eventData = await response.json();
        console.log('event data:', eventData);
        setEventList(eventData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Carousel
      className="EventListing"
      orientation="horizontal"
      slideSize={{ base: "50%%", sm: "35%", md: "20%" }}
      align="start"
      slideGap="md"
      loop
      dragFree
      withControls={false}
    >
      {eventList.map((event) => (
        <Carousel.Slide key={event._id}>
          <EventCard event={event} fetchEvents={fetchEvents} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default EventListing;
