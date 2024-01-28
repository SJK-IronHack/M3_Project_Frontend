import React, { useState } from "react";
import axios from "axios";

import PropTypes from "prop-types";

// Passing Data of the comments to comment component
import SingleComment from "./SingleComment";

const API_URL = import.meta.env.VITE_API_URL;



const CommentsModule = ({ comment }) => {

    const [comments, setComments ] = useState();
    const fetchComments = async () => {
        try {
            const response = await 
            // HOW TO FETCH COMMENST FROM EVENTID URL ????
            fetch(`${import.meta.env.VITE_API_URL}/api/:eventId/comments`)
            if (response.ok) {
                const commentData = await response.json()
                console.log(commentData);
                setComments(commentData)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <div className='CommentsListing'>
            {
                comments.map((comment) => (
                    <SingleComment comment={comment} key={comment.commentId} />
                ))
            }
        </div>
    )

}

export default CommentsModule;