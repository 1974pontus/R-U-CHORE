import React, { CSSProperties } from 'react';

export interface Props {
  imageSrc: string,
  alt: string
}

function Header(props: Props) {
  return (
      <img style={header} src={props.imageSrc} alt={props.alt} />);
};

export default Header;

const header: CSSProperties = {
    width: '100%',
    height: '15rem',
    background: 'pink',
    objectFit: 'cover'
}