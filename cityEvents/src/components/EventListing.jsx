import React, { useState, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import EventCard from './EventCard';


const API_URL = import.meta.env.VITE_API_URL;

function EventListing({ events }) {

    const [eventList, setEventList] = useState([]);

    const fetchEvents = async () => {
        try {
            const response = await fetch(`${API_URL}/api/events`);
            if (response.ok) {
                const eventData = await response.json();
                console.log(eventData);
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
            className='EventListing'
            orientation="horizontal"
            slideSize={{ base: '70%', sm: '30%', md: '33.333333%' }}
             align="start" slideGap="xs" loop dragFree withControls={false}
        >
            {eventList.map((event) => (
                <Carousel.Slide>
                    <EventCard event={event} key={event._eventId} />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
}

export default EventListing;
