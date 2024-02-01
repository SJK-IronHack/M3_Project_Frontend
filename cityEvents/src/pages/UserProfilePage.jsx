import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Card, Container, Paper, Text, useMantineTheme } from "@mantine/core";
// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = import.meta.env.VITE_API_URL;
function UserProfilePage() {
  const [userProfile, setUserProfile] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const { userId, isLoading } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(undefined);
  //Mantine theme ->
  const theme = useMantineTheme();
  const cardStyles = {
    backgroundColor: theme.colors.dark[0],
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  };
  //Mantine theme ->


  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (userId) {
          const authToken = localStorage.getItem('authToken')
          const response = await fetch(`${API_URL}/api/users/user/${userId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          });
          const parse = await response.json();
          console.log(parse);
          setUserProfile(parse)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [userId])
  console.log(userId);
  if (errorMessage) return <div>{errorMessage}</div>;
  if (!userProfile) return <div>Loading...</div>;


  return (
    <Container size="sm" c={theme.colors.dark[4]}>
      <Container>
      <Text size="xl">User page</Text>
      {userProfile && (
        <Card
          style={cardStyles}
          bg={theme.colors.dark[5]}
          padding="lg"
          radius="xl"
          width="500"
          height="700"
          shadow="md"
          p="xl"
        >
          <Text>Name: {userProfile.username}</Text>
          <div>
            <Text>
              Email: {userProfile.email}
            </Text>
          </div>
        </Card>
      )}
      <Text size="xl">Events Created by {userProfile.username}</Text>

      <Card
        style={cardStyles}
        bg={theme.colors.dark[5]}
        shadow="md"
        padding="lg"
        radius="xl"
        width="500"
        height="700"
        p="xl"
      >
        <ul>
          {userEvents.map((event) => (
            <Card key={event._id}>{event.name}</Card>
          ))}
        </ul>
      </Card>
      </Container>
    </Container>
  );
}
export default UserProfilePage;