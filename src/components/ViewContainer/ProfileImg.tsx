import React, { CSSProperties } from "react";
import imageSrc from '../img/leo.jpg'

function ProfileImg(){

  
  return (
    <div>
      <img src={imageSrc} style={profile} alt="Leo DiCaprio in romeo and juliet" />
     
    </div>
    
  );
};

export default ProfileImg;


const profile: CSSProperties = {
    width: '20%',
    position: 'absolute',
    borderRadius: '50%',
    left: '50%',
    top: '15rem',
    transform: 'translate(-50%, -50%)'
}