const api_path = import.meta.env.VITE_API_URL;

export const fetchEvents = () => {
  return fetch(api_path, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWIyNzgwNzE2MGIwZGViZGFiZjNhOWUiLCJpYXQiOjE3MDY1NTIyNTcsImV4cCI6MTcwNjU3Mzg1N30.3UT7-bzZebs8wt0R-gjtZSLWTEht57QMiEgbvO4aS8A",
    },
  }).then((response) => response.json());
};
