// editEvent.js

export const getEventById = (eventId, authToken) => {
  const eventEndpoint = `${import.meta.env.VITE_API_URL}/api/events/${eventId}`;

  return fetch(eventEndpoint, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch event with ID ${eventId}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error while fetching event by ID:", error);
    });
};

const updateEvent = (eventId, eventData, authToken) => {
  const eventEndpoint = `${import.meta.env.VITE_API_URL}/api/events/${eventId}`;

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

export default {
  getEventById,
  updateEvent,
};
