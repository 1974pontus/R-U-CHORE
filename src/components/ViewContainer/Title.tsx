import React, {CSSProperties} from 'react';

interface Props{
name: string

}

const Title = (props: Props) => {
  return (
  <h3 style={title}>{props.name}</h3>
  );
};

export default Title;


const title: CSSProperties = {
marginTop: '10rem',
textAlign: 'center',
width: '100%'
}

