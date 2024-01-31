import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/AuthContext";
import {
  Card,
  Image,
  Title,
  Text,
  Container,
  Button,
  Group,
  Flex,
  useMantineTheme,
  Input,
} from "@mantine/core";

// Passing Data of the comments to comment component

const API_URL = import.meta.env.VITE_API_URL;

const CommentsModule = ({ eventId }) => {
  const [comments, setComments] = useState([]);
  const { token } = useContext(AuthContext);

  //Mantine theme ->
  const theme = useMantineTheme();
  const cardStyles = {
    backgroundColor: theme.colors.dark[0],
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  };
  //
  const fetchComments = async () => {
    try {
      const response = await // HOW TO FETCH COMMENST FROM EVENTID URL ????
        fetch(`${import.meta.env.VITE_API_URL}/api/comments/events/${eventId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        });
      if (response.ok) {
        const commentData = await response.json();
        console.log("here", commentData);
        setComments(commentData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [eventId]);
  {
    /*  console.log(comments); */
  }
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const createComment = (eventId, authToken) => {
      const commentsEndpoint = `${import.meta.env.VITE_API_URL}/api/comments/${eventId}`;

      return fetch(commentsEndpoint, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(eventId),
      }).then((response) => response.json());
    };
    createComment(event, token) // Pass the authentication token to createEvent
      .then((response) => {
        console.log("Comment creation response:", response);
        // Fetch events after creating a new event
        return fetchComments(token); // Pass the authentication token to fetchEvents
      })
      .then((_events) => {
        console.log("Fetched events after creation:", _events);
        setComments(_events);
        navigate("/");
        alert("Event added");
      })
      .catch((error) => {
        console.error("Error while creating/fetching events:", error);
      });
  };

  return (
    <Group
      className="CommentsListing"
      mt="lg"
    >
      <Flex direction="column" gap="xs">
        {comments.map((comment) => (
          <Text size="xs" truncate="end" key={comment._id}>{comment.description}</Text>
        ))}
        <Flex direction="row" gap="md" >
          <form onSubmit={handleCommentSubmit}>
            <Input size="xs" radius="xl" placeholder="Write a comment" />
            <Button variant="filled" size="xs" radius="xl" bg={theme.colors.dark[1]}>Post</Button>
          </form>

        </Flex>
      </Flex>

    </Group>
  );
};

CommentsModule.propTypes = {
  eventId: PropTypes.string.isRequired, // Adjust the type according to your actual eventId type
};

export default CommentsModule;
