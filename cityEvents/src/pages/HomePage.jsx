import { useEffect, useState } from "react";
import Header from "../Header";
import { EventCard } from "../components/EventCard";
import { fetchEvents } from "../api/fetchEvents";
import { Box, Grid } from "@mui/material";

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then((_events) => setEvents(_events));
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ paddingX: 8, paddingY: 16 }}>
        <Grid container spacing={8}>
          {events.map((event) => (
            <Grid item key={event._id}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
