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
      <img src={avatarShare2} className='mobile' alt='share2'/>
      <img src={avatarShare} className='pc' alt='share'/>
    </div>
      <div className='flexcol'>
        {image.map((img)=><Profile {...img} key={img.id}/>)}
      </div>
   
      <section className='flexcol linkSection'>
        {linkData.map((link, index)=><Link key={index} {...link}/>)}
        <div style={{display:'flex', justifyContents:'center', alignItems:'center', padding:'24px 0'}}>
          {profileData.map((data)=><a href={data.link} title={data.link}><img style={{margin:'0 12px'}} src={data.icon} alt={data.id} key={data.id}/></a>)}
      </div>
      </section>
      
    </div>
  );
}

export default LinkSection;
