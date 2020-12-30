import React from 'react';
import { Link } from 'react-router-dom';

function Photo(props) {
  return (
    <div className="col">
      <Link to={`/${props.photo.id}`}>
        <img src={props.photo.url} alt="" />
      </Link>
    </div>
  );
}

export default Photo;
