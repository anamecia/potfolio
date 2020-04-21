import React from 'react'
import '../styles/Projects.css'
import Bettereads from '../assets/images/bettereads.png'

const Projects = () => {
    return(
        <div className='projects-main-container' id='projects'>
            <div className='projects-subcontainer'>
                <h1>Projects</h1>
                <div className='projects-list'>
                <div className='project'>
                        <h3>Open Air</h3>
                        <a href='https://youtu.be/xMCj48WSKLc'><img className='project-image' src={Bettereads}/></a>
                    </div>
                    <div className='project'>
                        <h3>Bettereads</h3>
                        <a href='https://youtu.be/xMCj48WSKLc'><img className='project-image' src={Bettereads}/></a>
                    </div>
                    <div className='project'>
                        <h3>FOODy</h3>
                        <a href='https://youtu.be/xMCj48WSKLc'><img className='project-image' src={Bettereads}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects