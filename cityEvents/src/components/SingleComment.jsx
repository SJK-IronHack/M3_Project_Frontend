

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