import React, { useState, useEffect } from 'react';
import axios from "axios";
import EventCard from './EventCard';

const API_URL = import.meta.env.VITE_API_URL;


function EventListing() {
    const [events, setEvents] = useState([])



    axios
        .get(`${API_URL}/api/events?${queryString}`)
        .then((response) => {
            setEvents(response.data)
        })
        .catch((error) => {
            console.log(error);
        }, [])
    const gettAllEvents = () => {
        axios
            .get(`${API_URL}/api/events`)
            .then(response)
    }


    return (
        <>
            {events &&
                events.map(
                    (event, index) => (
                        <EventCard
                            key={event._id}
                            {...event}
                        />
                    ))};
        </>
    )
}

export default EventListing;