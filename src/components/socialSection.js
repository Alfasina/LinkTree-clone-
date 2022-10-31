import Profile from './profile';

import { image } from './data';

const SocialSection = () => {
  return (
    <div>
        
        {console.log(image)}
        <div>
            {image.map( (profil)=><Profile {...profil} />)}
        </div>
      
    </div>
  );
}

export default SocialSection;
