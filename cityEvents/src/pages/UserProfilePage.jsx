import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Box, Card, Container, Flex, Grid, Group, Button, Pill, Text, useMantineTheme } from "@mantine/core";
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


  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        if (userId) {
          const authToken = localStorage.getItem('authToken')
          const response = await fetch(`${API_URL}/api/events/createdBy/${userId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          });
          const parse = await response.json();
          console.log("events:", parse);
          setUserEvents(parse)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserEvents();
  }, [userId])

  const handleDelete = (e, _id) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
    const eventEndpoint = `${import.meta.env.VITE_API_URL}/api/events/${_id}`;

    fetch(eventEndpoint, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        if (response.status === 204) {
          fetchEvents();
        }
      })
      .catch((error) => console.log(error));
  };

  console.log("User Id:", userId);
  if (errorMessage) return <div>{errorMessage}</div>;
  if (!userProfile) return <div>Loading...</div>;



  return (
    <Container size="sm" c={theme.colors.dark[4]} >
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



        <Box
          size="xl"
        >
          {userEvents.map((event) => (
            <Card
              key={event._id}
              bg={theme.colors.dark[5]}
              padding="lg"
              radius="xl"
              width="500"
              height="700"
              shadow="md"
              p="xl"
              mb="md"
            >
              <Flex
                justify="space-between" align="stretch" direction="row" gap="md"
              >
                <Flex direction="column" justify="flex-start" gap="sm">
                <Flex
                  gap="md"
                  
                >
                  <Pill bg={theme.colors.dark[4]} >{event.organiser}</Pill>
                  <Pill bg={theme.colors.dark[4]} >{event.location}</Pill>
                </Flex>
                <Text c={theme.colors.light[3]}>{event.title}</Text>
                </Flex>
                <Flex gap="md" direction="row" justify="flex-end">
                  <Button variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl" 
                  // onClick={handleEditClick}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl"
                    onClick={(e) => {
                      handleDelete(e, event._id);
                    }}>
                    Delete
                  </Button>
                  <Button variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl">Event page</Button>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Box>

      </Container>
    </Container>
  );
}
export default UserProfilePage;