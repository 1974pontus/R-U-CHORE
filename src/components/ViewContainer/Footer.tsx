import React, { CSSProperties } from 'react';
import SubmitButton from './SubmitButton'



function Footer() {
return (
    <footer style={footerContainer}>
        <input style={inputFelt} type="text" id="name" name="name" placeholder="Type your name"/>
        <SubmitButton>Done</SubmitButton> 
        {/* prop */}
    </footer>
)
}

export default Footer

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

