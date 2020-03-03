import React, { CSSProperties } from "react";

export interface Props {
  imageSrc: string,
  alt: string
}

function ProfileImg(props: Props) {
  return <img style={profile} src={props.imageSrc} alt={props.alt} />;
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


