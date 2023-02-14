import React from 'react'
import '../pages/Home.css'

//icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import {ReactComponent as FirebaseIcon} from "../assets/firebase.svg"

//media imports
import muratoneWeb from '../assets/muratone.png'

export default function Hero3wp() {
  return (
    <div className="container heroOne d-flex justify-content-evenly align-items-center">
            <div className="me-4">
                <h3>muratone.com</h3>
                <div className="mt-3">
                <FontAwesomeIcon className="icon-item me-2" icon={faReact} size="2x"/>
                <FontAwesomeIcon className="icon-item mx-2" icon={faBootstrap} size="2x"/>
                <FirebaseIcon className="external-icon mx-2 icon-item"/>
                </div>
                <p className="mt-3"> DJ profile website with user authentication <br /> and integrated LinkTree component</p>
                <a className="btn btn-md btn-light me-3 greenBtn">demo</a>
                <a className="btn btn-md btn-outline-light greenBtn"><FontAwesomeIcon className="me-2" icon={faGithub} size="1x"/>repo</a>
            </div>
            <div className="image-wrapper">
                <img src={muratoneWeb} className="shadow imageSS img-fluid" />
            </div>
    </div>
)
}
