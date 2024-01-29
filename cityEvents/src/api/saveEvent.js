const api_path = import.meta.env.VITE_API_URL;

export const createEvent = (event) => {
  return fetch(api_path, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWIyNzgwNzE2MGIwZGViZGFiZjNhOWUiLCJpYXQiOjE3MDY1MTQ2MTAsImV4cCI6MTcwNjUzNjIxMH0.82uXPw-ErL2P1_udlnu_pQihAOQeq9P2SNUEQ1C6Tag",
    },
    body: JSON.stringify(event),
  }).then((response) => response.json());
};
