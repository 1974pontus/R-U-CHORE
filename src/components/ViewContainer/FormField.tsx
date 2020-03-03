import React, { CSSProperties } from 'react';

interface Props {
  inputplaceholder: string;
  buttontext: string;
}


function FormField(props: Props) {
return (
    <form style={footerContainer}>
        <input style={inputFelt} type="text" id="name" name="name" placeholder={props.inputplaceholder} /> 
        <button value="" style={mainButton}> {props.buttontext} </button> 
        {/* prop */}
    </form>
)
}


const footerContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    bottom: '0',
    marginBottom: '0.4rem'
  }


const inputFelt: CSSProperties = {
  padding: '1rem',
  outline: '0',
  color: 'blue'
}


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


export default FormField
