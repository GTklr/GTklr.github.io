import React from 'react'
import '../pages/Home.css'
import './iconbar.css'
import './hero.css'

//icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import {ReactComponent as FirebaseIcon} from "../assets/firebase.svg"
import {ReactComponent as SanityIcon} from "../assets/Sanity.svg"

//media imports
import digitalweb from '../assets/00digital.png'

export default function hero4() {
  return (
    <div className="container SectionDiv ScrollSnapStart">
        <div className="row">
            <div className="col-lg-6 col-12 order-lg-last  px-5 px-lg-0 d-flex order-first">
                <img src={digitalweb } className="imageSS img-fluid w-100" />
            </div>
            <div className="col-lg-6 col-12 my-auto text-lg-start text-center HeroLeftDetails">
                <div className="ps-0 ps-lg-5 mt-3">
                    <h3>00digital.com</h3>
                    <div className="mt-">
                    <FontAwesomeIcon className="icon-item me-2" icon={faReact} />
                    <FontAwesomeIcon className="icon-item mx-2" icon={faCss3Alt}t/>
                    <FontAwesomeIcon className="icon-item mx-2 px-2" icon={faJs}  />
                    <FirebaseIcon className="external-icon mx-2 icon-item"/>
                    <SanityIcon className="external-icon mx-3 icon-item"/>
                    </div>
                    <p className="mt-3"> Business profile website built on React with Three.JS 3D elements + Tailwind CSS + Sanity.io CMS for blog</p>
                    <a href="https://00digital.com/" target="_blank" className="btn btn-md btn-light me-3 greenBtn">visit</a>
                </div>
            </div>
            
        </div>
    </div>
)
}
