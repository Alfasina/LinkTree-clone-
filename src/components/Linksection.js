import React from 'react';
import Profile from './profile';
import Link from './link';
import { linkData } from './data';
import { profileData } from './data';

const LinkSection = () => {
  return (
    <div>
      <div>
        {linkData.map((link, index)=><Link key={index} {...Link}/>)}
      </div>
    </div>
  );
}

export default LinkSection;
