import React from 'react'
import reactIcon from '../assets/images/react-icon.svg'
import jsIcon from '../assets/images/javascript-icon.svg'
import reduxIcon from '../assets/images/redux-icon.svg'
import htmlIcon from '../assets/images/html-icon.svg'
import railsIcon from '../assets/images/rails-icon.svg'



import SkillsCss from '../styles/Skills.css'


const Skills = () => {
    return(
        <div className='skills-container' style={{backgroundColor: "lightblue"}}>
            <h3>Front End</h3>
            <div className='skills-subcontainer'>
                <img className='skill' src={htmlIcon} alt='react-logo'/>
                <img className='skill' src={jsIcon} alt='js-logo'/>
                <img className='skill' src={reactIcon} alt='react-logo'/>
                <img className='skill' src={reduxIcon} alt='react-logo'/>
            </div>
            <h3>Back End</h3>
                <div className='skills-subcontainer'>
                    <img className='skill' src={railsIcon} alt='rails-logo'/>
                </div>

            <h3>Other End</h3>
        </div>
    )
}

export default Skills 