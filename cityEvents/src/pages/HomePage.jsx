import { useEffect, useState } from "react";
import Header from "../components/Header";
import { EventCard } from "../components/EventCard";
import { fetchEvents } from "../api/fetchEvents";
import EventListing from "../components/EventListing";

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then((_events) => setEvents(_events));
  }, []);

  return (
    <>
      <EventListing slideSize="70%" height={200} align="start" slideGap="xs" loop dragFree withControls={false}/>
      
    </>
  );
}
