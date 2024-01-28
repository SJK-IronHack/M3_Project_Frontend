const api_path = import.meta.env.VITE_API_URL;

export const fetchEvents = () => {
  return fetch(api_path, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWIyNzgwNzE2MGIwZGViZGFiZjNhOWUiLCJpYXQiOjE3MDY0NjQ3MDEsImV4cCI6MTcwNjQ4NjMwMX0.AKuR2hKokacCtxkT-mAGu98wYJ2qVaPYHFZkpWAebx0",
    },
  }).then((response) => response.json());
};
