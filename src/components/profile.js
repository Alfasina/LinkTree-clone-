import React, {useState} from  'react';



const Profile = ({ src,camImage,twitterName,slackName}) => {
    const [isVisible, setVisible]=useState('hidden')
  return (
    <>
<div className='profile-pic-con' style={{backgroundImage: `url(${src})`, width:'88px', borderRadius:'50%', overflow:'hidden',border: '5.5px solid #EBE9FE' }} onMouseLeave={()=>{setVisible('hidden'); console.log(isVisible)}} onMouseEnter={()=>{setVisible('visible'); console.log(isVisible)}}>
    <div className='overlay' style={{visibility:isVisible,display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <img src={camImage} alt='id' className='cam'/>
    </div>
</div>
    <p className='profileName'>
        {twitterName}
    </p>
    <p className='profileName' style={{display:'none'}}>
        {slackName}
    </p>
    </>
  );
}

export default Profile;
