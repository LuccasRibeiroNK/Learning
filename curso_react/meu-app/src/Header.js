import React from 'react'

function Header(props) {
    return (
        <header className="header">
            <h1>{props.name}</h1>
            <Menu links={props.links}></Menu>

        </header>)
}

function Menu(props) {
    return (
        <ul className="menu">
            {props.links.map(link => <li>{link}</li>)}
        </ul>)
}

export default Header;