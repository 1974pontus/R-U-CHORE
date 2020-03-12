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
    display: "flex",
    alignItems: "end",
    justifyContent: "end",
    textAlign: "center",
    padding: "0.5rem",
    background: "black",
    color: "white",
    fontSize: "0.7rem",
    width: "4rem",
    height: "3rem",
    outline: "0",
    cursor: "pointer"
  }