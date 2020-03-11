import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'



function LinkButton() {
    return (
        <Link style={showButton} to="/">
            Home
        </Link>
    )

}


export default LinkButton

const showButton: CSSProperties = {
    textAlign: "center",
    width: "2rem",
    height: '2rem',
    backgroundColor: 'pink',
    color: 'white',
    display:'flex',
    justifyContent: 'flexStart'
  }