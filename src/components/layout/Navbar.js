import React from 'react'

const Navbar = ({icon, title}) => {
    // static defaultProps = {
    //     title: 'Github Finder',
    //     icon: 'fab ga-github'
    // }
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}/> {title}
                </h1>
            </nav>
        )
}

export default Navbar
