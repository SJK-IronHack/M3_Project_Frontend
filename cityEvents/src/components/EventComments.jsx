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
  Stack,
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
  //Mantine theme ->

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
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
  console.log(e.target.elements[0].value);
    try {
      const commentText = e.target.elements[0].value; // Assuming you have an input with name="commentText"
      
      if (!commentText) {
        // Handle case where comment text is empty
        return;
      }
  
      const commentsEndpoint = `${API_URL}/api/comments/${eventId}`;
  
      const response = await fetch(commentsEndpoint, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ description: commentText }), // Assuming your comment model has a "description" field
      });
  
      if (response.ok) {
        console.log("Comment creation response:", response);
        // Fetch comments after creating a new comment
        await fetchComments();
        // Clear the input field after successful submission
        e.target.elements.commentText.value = "";
      } else {
        // Handle error response
        console.error("Error while creating comment:", response.statusText);
      }
    } catch (error) {
      console.error("Error while creating/fetching comments:", error);
    }
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
          <form onSubmit={handleCommentSubmit}>
        <Flex       
      gap="md"
      justify="flex-end"
      align="flex-start"
      direction="row"
      wrap="nowrap" >
            <Input w="auto" size="xs" radius="xl" placeholder="Write a comment" />
            <Button w="content" variant="filled" size="xs" type="submit" radius="xl" bg={theme.colors.dark[1]}>Post</Button>
        </Flex>
          </form>

      </Flex>

    </Group>
  );
};

CommentsModule.propTypes = {
  eventId: PropTypes.string.isRequired, // Adjust the type according to your actual eventId type
};

export default CommentsModule;
