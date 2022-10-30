import React, {useState} from  'react';



const Profile = ({ src,camImage,name}) => {
    const [isVisible, setVisible]=useState(false)
  return (
    <>
<div className='profile-pic-con' style={{backgroundImage: `url(${src})`, width:'88px', borderRadius:'50%', overflow:'hidden'}} onMouseOver={()=>{setVisible(false); console.log(isVisible)}}>
    <div className='overlay' style={{visibility:`{${isVisible ? 'hidden':'visible'}}`,display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <img src={camImage} alt='id' className='cam'/>
    </div>
</div>
    <p className='profileName'>
        {name}
    </p>

    </>
  );
}

export default Profile;
