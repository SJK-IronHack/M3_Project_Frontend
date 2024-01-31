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
      <Input size="xs" radius="xl" placeholder="Write a comment"/>
      <Button variant="filled"  size="xs" radius="xl" bg={theme.colors.dark[1]}>Post</Button>
      </Flex>
   </Flex>

    </Group>
  );
};

CommentsModule.propTypes = {
  eventId: PropTypes.string.isRequired, // Adjust the type according to your actual eventId type
};

export default CommentsModule;
