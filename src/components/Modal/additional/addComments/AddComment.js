import React from 'react';

function AddComment(props) {
  return (
    <div className="addComment">
      <div className="inputName">
        <input placeholder="Ваше имя" />
      </div>
      <div className="inputComm">
        <input placeholder="Ваш комментарий" />
      </div>
      <button className="myButton">Оставить комментарий</button>
    </div>
  );
}

export default AddComment;
