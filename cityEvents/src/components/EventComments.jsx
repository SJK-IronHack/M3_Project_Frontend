import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/AuthContext";

// Passing Data of the comments to comment component

const API_URL = import.meta.env.VITE_API_URL;

const CommentsModule = ({ eventId }) => {
  const [comments, setComments] = useState([]);
  const { token } = useContext(AuthContext);

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
    <div className="CommentsListing">
      {comments.map((comment) => (
        <p key={comment.commentId}>{comment.description}</p>
      ))}
    </div>
  );
};

CommentsModule.propTypes = {
  eventId: PropTypes.string.isRequired, // Adjust the type according to your actual eventId type
};

export default CommentsModule;
