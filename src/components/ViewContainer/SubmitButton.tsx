import React, { CSSProperties } from 'react';

interface Props {
  buttontext?: string;
}

const SubmitButton = (props: Props) => {
  return (
    <button value="" style={mainButton}> {props.buttontext} </button>
  );
};

export default SubmitButton;


const mainButton: CSSProperties = {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'end',
  textAlign: 'center',
  padding: '0.3rem 0 0.3rem 1rem',
  background: 'black',
  color: 'white',
  fontSize: '0.7rem',
  width:'4rem',
  height:'3rem',
  outline: '0',
  cursor: 'pointer',
}