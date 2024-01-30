// editEvent.js

export const editEvent = (eventId, eventData) => {
    const eventEndpoint = `${import.meta.env.VITE_API_URL}/api/events/${eventId}`;
    const API_URL = import.meta.env.VITE_API_URL;

    return fetch(eventEndpoint, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(eventData),
    }).then((response) => response.json());
  };
  