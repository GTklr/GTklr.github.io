import React from 'react'
import "./Home.css"

//icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import profPic from "../assets/3-smal.jpg"

export default function Home() {
  return (
    <div className='HomeDiv'>
        <div className="container HomeDiv d-flex justify-content-evenly align-items-center">
                <div>
                    <h1>Hi, I'm Redza Ramzan</h1>
                    <h2 className="text-start typewriter me-auto">Front-End Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    <br /> Molestiae quibusdam aliquid mollitia quia vitae sit.</p>
                    <a className="btn btn-md btn-light me-3 greenBtn">contact</a>
                    <a className="btn btn-md btn-outline-light greenBtn"><FontAwesomeIcon className="me-2" icon={faGithub} size="1x"/>repo</a>
                </div>

                <div>
                    <img src={profPic} className="profilePic"  width={"500"}/>
                </div>
        </div>
    </div>
  )
}
