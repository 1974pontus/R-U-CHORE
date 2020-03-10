import React, { CSSProperties } from "react";
import { ProfileData } from "./ProfileData";

interface Props {
  profile: ProfileData
}

function ProfileImg(props: Props) {
  return <div>
    <img style={profile} src={props.profile.profileImg} alt={props.profile.alt} />
    <div style={text}> {props.profile.profileText} </div>
</div>;
}

export default ProfileImg;


const profile: CSSProperties = {
    width: '20%',
    position: 'absolute',
    borderRadius: '50%',
    left: '50%',
    top: '15rem',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
}


const text: CSSProperties = {
  width: '20%',
  position: 'absolute',
  borderRadius: '50%',
  left: '50%',
  top: '15rem',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
  
}


