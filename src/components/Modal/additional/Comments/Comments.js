import React from 'react';

function Comments(props) {
  return (
    <div className="comments">
      <div className="comment-date">{props.comment.date}</div>
      <div className="comment-text">{props.comment.text}</div>
    </div>
  );
}

export default Comments;
