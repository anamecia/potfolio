import React from 'react'
import linkedinIcon from '../assets/images/linkedin.svg'
import mediumIcon from '../assets/images/medium.svg'
import githubIcon from '../assets/images/github.svg'

import '../styles/Contacts.css'

const Contacts = () => {
    return(
        <div className='contacts-main-container'>
            <div className='contacts-subcontainer'>
                <h3>Do you want to work in a project together or just have a chat ...</h3>
                <div className='links-container'>
                    <a href='https://www.linkedin.com/in/anameciarobalo/'><img className='link' src={linkedinIcon} alt='linkedin icon'/></a>
                    <a href='https://github.com/anamecia>github'><img className='link' src={githubIcon} alt='github icon'/></a>
                    <a href='https://medium.com/@anameciarobalo'><img className='link' src={mediumIcon} alt='medium icon'/></a>
                </div>
            </div>
        </div>
    )
}

export default Contacts 