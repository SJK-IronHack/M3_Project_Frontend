const api_path = import.meta.env.VITE_API_URL;

export const createEvent = (event) => {
  return fetch(api_path, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWIyNzgwNzE2MGIwZGViZGFiZjNhOWUiLCJpYXQiOjE3MDY1NTIyNTcsImV4cCI6MTcwNjU3Mzg1N30.3UT7-bzZebs8wt0R-gjtZSLWTEht57QMiEgbvO4aS8A",
    },
    body: JSON.stringify(event),
  }).then((response) => response.json());
};
