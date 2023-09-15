import React from 'react';

export default function Preview(props) {
  return (
    <img
      id="preview"
      src={`https://api.memegen.link/images/preview.jpg?template=${props.memeTemplateText}&lines[]=${props.topText}&lines[]=${props.bottomText}`}
      alt="meme preview"
    />
  );
}
