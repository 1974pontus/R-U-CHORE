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
    width: '13rem',
    position: 'absolute',
    borderRadius: '50%',
    left: '50%',
    top: '15rem',
    transform: 'translate(-50%, -50%)',
}


const text: CSSProperties = {
  width: '13rem',
  position: 'absolute',
  borderRadius: '50%',
  left: '50%',
  top: '15rem',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '2.7rem',
  padding: '0 0 1rem 0'
  
}


