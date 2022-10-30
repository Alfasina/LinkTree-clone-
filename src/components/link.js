import React from 'react';


const Link = ({name, link}) => {
  return (
    <a href={link} className='links'>{name}</a >
  );
}

export default Link;
