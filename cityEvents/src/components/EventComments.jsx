import React, { useState } from "react";
import axios from "axios";

import PropTypes from "prop-types";

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