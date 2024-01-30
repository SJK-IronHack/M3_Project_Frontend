const deleteEvent = (eventId, authToken) => {
  const eventEndpoint = `${import.meta.env.VITE_API_URL}/api/events/${eventId}`;

  return fetch(eventEndpoint, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => response.json());
};

export default deleteEvent;
