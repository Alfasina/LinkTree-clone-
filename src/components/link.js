import React from 'react';


const Link = ({name, link}) => {
  return (
    <a href={link} className='links' title={link}>{name}</a >
  );
}

export default Link;
