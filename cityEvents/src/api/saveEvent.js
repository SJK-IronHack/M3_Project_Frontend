// saveEvent.js

export const createEvent = (event, authToken) => {
  const eventsEndpoint = `${import.meta.env.VITE_API_URL}/api/events`;

  return fetch(eventsEndpoint, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(event),
  }).then((response) => response.json());
};
