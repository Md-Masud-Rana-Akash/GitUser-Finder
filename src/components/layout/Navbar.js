import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({icon, title}) => {
    // static defaultProps = {
    //     title: 'Github Finder',
    //     icon: 'fab ga-github'
    // }
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <a href="/"><i className={icon}/> {title}</a>
                </h1>
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About</Link></li>
                </ul>
            </nav>
        )
}

export default Navbar
