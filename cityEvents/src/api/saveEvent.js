export const createEvent = (event, authToken) => {
  const eventsEndpoint = `${import.meta.env.VITE_API_URL}/api/events`;

  const formData = new FormData();
  formData.append("title", event.title);
  // ... other fields
  if (event.imageLink) {
    formData.append("imageLink", event.imageLink);
  } else if (event.image) {
    formData.append("image", event.image);
  }

  return fetch(eventsEndpoint, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: formData,
  }).then((response) => response.json());
};
