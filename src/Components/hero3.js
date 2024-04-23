import React from 'react'
import '../pages/Home.css'
import './iconbar.css'
import './hero.css'

//icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import {ReactComponent as FirebaseIcon} from "../assets/firebase.svg"
import {ReactComponent as FramerIcon} from "../assets/framerlogo.svg"

//media imports
import cloudnoiseWeb from '../assets/cloudnoise.png'

export default function hero3() {
  return (
    <div className="container SectionDiv ScrollSnapStart">
        <div className="row">
            <div className="col-lg-6 col-12 order-lg-last  px-5 px-lg-0 d-flex order-first">
                <img src={cloudnoiseWeb} className="imageSS img-fluid w-100" />
            </div>
            <div className="col-lg-6 col-12 my-auto text-lg-start text-center HeroLeftDetails">
                <div className="ps-0 ps-lg-5 mt-3">
                    <h3>cloudnoise.co</h3>
                    <div className="mt-">
                    <FontAwesomeIcon className="icon-item me-2" icon={faReact} />
                    <FontAwesomeIcon className="icon-item mx-2" icon={faCss3Alt}t/>
                    <FirebaseIcon className=" mx-3 external-icon"/>
                    <FramerIcon className=" mx-3  big-icon"/>
                    
                    </div>
                    <p className="mt-3"> Artist collective website on React +  Framer Motion +<br />  Tailwind CSS + Firebase authentication for blog postings.</p>
                    <a href="https://cloudnoise.co/" target="_blank" className="btn btn-md btn-light me-3 greenBtn">visit</a>
                </div>
            </div>
            
        </div>
    </div>
)
}
