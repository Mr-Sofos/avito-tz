import React from 'react';
import PropTypes from 'prop-types'

function Image(props) {
  return (
    <div>
      <img src={props.url} alt="" />
    </div>
  );
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Image;
