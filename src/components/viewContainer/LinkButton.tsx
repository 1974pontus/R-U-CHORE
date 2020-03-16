import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

function LinkButton() {
    return (
        <Link to="/">
            <button style={showButton}>Home</button>
        </Link>
    )
}

export default LinkButton

const showButton: CSSProperties = {
    textAlign: "center",
    padding: "0.5rem",
    background: "black",
    color: "#c7dbfa",
    fontSize: "0.7rem",
    border: "none",
    outline: "0",
    cursor: "pointer",
    float: "right",
    marginRight: "1rem"
  }