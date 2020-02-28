import React from 'react';
import {CSSProperties} from 'react'

type Props = React.PropsWithChildren<{
  
}>

const Title = (props: Props) => {
  return (
  <h3 style={title}>{props.children}</h3>
  );
};

export default Title;


const title: CSSProperties = {
textAlign: 'center',
width: '100%'
}

