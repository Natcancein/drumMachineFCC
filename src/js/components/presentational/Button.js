
import React from 'react'

const Button = ({ alt, image, drumKey, handleClick, handleDisplay, src, result }) => {
  return (
    <div 
    onClick={(e) => {
      handleDisplay(e);
      handleClick();
    }}
    className="drum-pad" 
    id={drumKey} 
    alt={alt}
    >
      <img  src={image} 
      height="120" width="120"/>
      <audio 
      id={drumKey}
      src={src} 
      autoPlay
      type="audio/mp3"
      ref ={result}
      >
      </audio>
    </div>
  );
};

export default Button
