import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';

const API_URL = import.meta.env.VITE_API_URL;

function EventListing({ events }) {  // Change the prop name to 'events'
    const [eventList, setEventList] = useState([]);

    const fetchEvents = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/events`)
            if (response.ok) {
                const eventData = await response.json()
                console.log(eventData);
                setEventList(eventData)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <div className='EventListing'>
            {
                eventList.map((event) => (
                    <EventCard event={event} key={event.eventId} />
                ))
            }
        </div>
    )
}

export default EventListing;
