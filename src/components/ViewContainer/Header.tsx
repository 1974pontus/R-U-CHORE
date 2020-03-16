import React, { CSSProperties } from 'react';
import { ProfileData } from './ProfileData';

interface Props {
  profile: ProfileData
}

//gets props from profile data
function Header(props: Props) {
  return (
      <img style={header} src={props.profile.headerImg} alt={props.profile.alt}/>);
};

export default Header;

const header: CSSProperties = {
    width: '100%',
    height: '15rem',
    objectFit: 'cover',
}