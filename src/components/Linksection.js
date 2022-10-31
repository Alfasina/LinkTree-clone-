import React from 'react';
import Profile from './profile';
import Link from './link';
import { linkData } from './data';
import { profileData } from './data';
import { image } from './data';
import avatarShare from '../Images/_Avatar share button-pc.svg'
import avatarShare2 from '../Images//_Avatar share button.svg'

const LinkSection = () => {
  return (
    <div className='flexcol linksectioncon'>
      <div className='circle'>
      <img src={avatarShare2} alt='share2'/>
      <img src={avatarShare} alt='share'/>
    </div>
      <div className='flexcol'>
        {image.map((img)=><Profile {...img} key={img.id}/>)}
      </div>
   
      <section className='flexcol linkSection'>
        {linkData.map((link, index)=><Link key={index} {...link}/>)}
        <div style={{display:'flex', justifyContents:'center', alignItems:'center'}}>
          {profileData.map((data)=><img src={data.icon} alt={data.id} key={data.id}/>)}
      </div>
      </section>
      
    </div>
  );
}

export default LinkSection;
