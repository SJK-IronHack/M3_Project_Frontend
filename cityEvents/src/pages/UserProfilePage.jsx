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
  // Mantine theme ->
  const theme = useMantineTheme();
  const cardStyles = {
    backgroundColor: theme.colors.dark[0],
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  };
  //


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
    <Container size="xs" gap="md" mt="xl">
      <Text size="xl">User page</Text>
        {userProfile && (
          <Paper
            style={cardStyles}
            color={theme.colors.dark[0]}
            sshadow="xl"
            padding="lg"
            radius="xl"
            width="500"
            height="700"
            shadow="md">

            <Text>Name: {userProfile.username}</Text>
            <div>
              <Text>
                Email: {userProfile.email}
              </Text>
            </div>
          </Paper>
        )}
              <Text size="xl">Events Created by {userProfile.name}</Text>

      <Card style={cardStyles}
        color={theme.colors.dark[0]}
        sshadow="xl"
        padding="lg"
        radius="xl"
        width="500"
        height="700"
        shadow="md">
        <ul>
          {userEvents.map((event) => (
            <Card key={event._id}>{event.name}</Card>
          ))}
        </ul>
      </Card>
    </Container>
  );
}
export default UserProfilePage;