import React from 'react'
import { Link } from 'react-scroll'
import '../styles/Navbar.css'


const NavBar = () => {
    return(
        <div className='navbar-container'>
            <div className='logo-container'>
                <h1>Logo</h1>
            </div>
            <div className='link-container'>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration= {500}
                > Home </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration= {500}
                > About </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration= {500}
                > Skills</Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration= {500}
                > Projects </Link>
                <Link
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    duration= {500}
                > Contacts </Link>
            </div>
        </div>
    )
}

export default NavBar 