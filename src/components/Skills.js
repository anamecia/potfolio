import React from 'react'
import reactIcon from '../assets/images/react-icon.svg'
import jsIcon from '../assets/images/javascript-icon.svg'
import reduxIcon from '../assets/images/redux-icon.svg'
import htmlIcon from '../assets/images/html-icon.svg'
import cssIcon from '../assets/images/css-icon.svg'
import nodeIcon from '../assets/images/nodejs-icon.svg'
import rubyIcon from '../assets/images/ruby-icon.svg'
import railsIcon from '../assets/images/rails-icon.svg'
import githubIcon from '../assets/images/github-icon.svg'
import sqliteIcon from '../assets/images/sqlite-icon.svg'
import postgresqlIcon from '../assets/images/postgresql-icon.svg'
import mongodbIcon from '../assets/images/mongodb-icon.svg'
import figmaIcon from '../assets/images/figma-icon.svg'



import SkillsCss from '../styles/Skills.css'


const Skills = () => {
    return(
        <div className='skills-main-container'>
            <div className='skills-container'>
            <h1 id='section-title'>Skills</h1>
            <h3>Front End</h3>
            <div className='skills-subcontainer'>
                <img className='skill' src={htmlIcon} alt='react-logo'/>
                <img className='skill' src={cssIcon} alt='css-logo'/>
                <img className='skill' src={jsIcon} alt='js-logo'/>
                <img className='skill' src={reactIcon} alt='react-logo'/>
                <img className='skill' src={reduxIcon} alt='redux-logo'/>
            </div>
            <h3>Back End</h3>
                <div className='skills-subcontainer'>
                    <img className='skill' src={nodeIcon} alt='node-logo'/>
                    <img className='skill' src={rubyIcon} alt='ruby-logo'/>
                    <img className='skill' src={railsIcon} alt='rails-logo'/>
                </div>

            <h3>Other</h3>
                <div className='skills-subcontainer'>
                    <img className='skill' src={githubIcon} alt='github-logo'/>
                    <img className='skill' src={sqliteIcon} alt='sqlite-logo'/>
                    <img className='skill' src={postgresqlIcon} alt='postgres-logo'/>
                    <img className='skill' src={mongodbIcon} alt='mongodb-logo'/>
                    <img className='skill' src={figmaIcon} alt='figma-logo'/>

                </div>
            </div>
        </div>
    )
}

export default Skills 