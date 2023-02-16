import React from 'react'
import "./Home.css"

//icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import profPic from "../assets/3.png"

export default function Home() {
  return (
    <div className='HomeDiv'>
        <div className="container">
          <div className="row">
                <div className="
                col-lg-6 col-md-6 col-sm-12 
                text-center text-md-start my-auto 
                pt-md-0 pt-5 ps-0 ps-md-5">
                    <h1>Hi, I'm Redza Ramzan</h1>
                    <div className="typewriter text-start">
                      <h2>Front-End Developer</h2>
                    </div>
                    <p className="pt-3">Self-taught front-end developer who loves building things.</p>
                    <a className="btn btn-md btn-light me-3 greenBtn">contact</a>
                    <a className="btn btn-md btn-outline-light greenBtn"><FontAwesomeIcon className="me-2" icon={faGithub} size="1x"/>repo</a>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 pt-4 pt-md-5">
                    <img src={profPic} className="profilePic w-100 img-fluid"/>
                </div>
          </div>
        </div>
    </div>
  )
}
