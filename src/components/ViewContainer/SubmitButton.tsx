import React, { CSSProperties } from 'react';


type Props = React.PropsWithChildren<{
  
}>

const SubmitButton = (props: Props) => {
  return (
    <button style={mainButton}>{props.children}</button>
  );
};

export default SubmitButton;


const mainButton: CSSProperties = {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'end',
  padding: '0.5em',
  background: 'green',
  color: 'white',
  fontSize: '1rem',
  width:'4rem',
  height:'4rem',
  borderRadius: '50%',
  cursor: 'pointer',
}