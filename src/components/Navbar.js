import React from 'react'
import { Link } from 'react-scroll'


const NavBar = () => {
    return(
        <div className='navbar-container'>
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            > Home </Link>
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            > About </Link>
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            > Skills</Link>
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            > Projects </Link>
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            > Contacts </Link>

        </div>
    )
}

export default NavBar 