import React, { useState } from "react";
import axios from "axios";

import PropTypes from "prop-types";

// Passing Data of the comments to comment component
import CommentsModule from "./EventComments";

const API_URL = import.meta.env.VITE_API_URL;

const [comments, setComments ] = useState();
const fetchEvents = async () => {
    try {
        const response = await 
        // HOW TO FETCH COMMENST FROM EVENTID URL ????
        fetch(`${import.meta.env.VITE_API_URL}/api/:eventId/comments`)
        if (response.ok) {
            const eventData = await response.json()
            console.log(eventData);
            setEventList(eventData)
        }
    } catch (error) {
        console.log(error);
    }
}


const CommentsModule = ({ comment }) => {
    const {
      like,
      description,
      createdBy,
      event,
    } = comment;
return (
    <div className="comments-module">
        {like} ? <p> Liked </p>
<p>{description}</p>
    </div>
)

}

export default CommentsModule;