import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Passing Data of the comments to comment component
import SingleComment from "./SingleComment";

const API_URL = import.meta.env.VITE_API_URL;

const CommentsModule = ({ eventId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await // HOW TO FETCH COMMENST FROM EVENTID URL ????
      fetch(`${import.meta.env.VITE_API_URL}/api/comments/events/${eventId}`);
      if (response.ok) {
        const commentData = await response.json();
        console.log(commentData);
        setComments(commentData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [eventId]);

  return (
    <div className="CommentsListing">
      {comments.map((comment) => (
        // <SingleComment comment={comment} key={comment.commentId} />
<p>{comment}</p>
))}
    </div>
  );
};

CommentsModule.propTypes = {
  eventId: PropTypes.string.isRequired, // Adjust the type according to your actual eventId type
};

export default CommentsModule;
