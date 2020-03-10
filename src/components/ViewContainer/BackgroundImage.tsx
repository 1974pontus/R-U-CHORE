import React, { CSSProperties } from "react";
import { ProfileData } from "./ProfileData";

interface Props {
  profile: ProfileData
}

function BackgroundImage(props: Props) {
  return <img style={bgStyle} src={props.profile.backgroundImg} alt={props.profile.alt} />;
}

export default BackgroundImage;


const bgStyle: CSSProperties = {

}
