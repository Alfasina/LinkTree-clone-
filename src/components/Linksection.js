import React from 'react';
import Profile from './profile';
import Link from './link';
import { linkData } from './data';
import { profileData } from './data';
import { image } from './data';

const LinkSection = () => {
  return (
    <div className='flexcol'>
      <div className='flexcol'>
        {image.map((img)=><Profile {...img} key={img.id}/>)}
      </div>
   
      <section className='flexcol linkSection'>
        {linkData.map((link, index)=><Link key={index} {...link}/>)}
      </section>
    </div>
  );
}

export default LinkSection;
