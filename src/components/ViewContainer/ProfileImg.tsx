import React, { CSSProperties } from "react";
import { ProfileData } from "./ProfileData";

interface Props {
  profile: ProfileData
}

function ProfileImg(props: Props) {
  return <img style={profile} src={props.profile.profileImg} alt={props.profile.alt} />;
}

export default ProfileImg;


const profile: CSSProperties = {
    width: '20%',
    position: 'absolute',
    borderRadius: '50%',
    left: '50%',
    top: '15rem',
    transform: 'translate(-50%, -50%)'
}


