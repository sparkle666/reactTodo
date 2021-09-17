import React from 'react'

function Header(){
    return(
        <header style = {headerStyle}>
            <h2>Todo React App </h2>
        </header>
    )
}

const headerStyle = {
    color: "white",
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'black'
}
export default Header;