import React from 'react';

function Image(props) {
  return (
    <div>
      <img src={props.images.url} alt="" />
    </div>
  );
}

export default Image;
