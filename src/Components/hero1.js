import React from 'react'
import '../pages/Home.css'
import './iconbar.css'

//icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import {ReactComponent as FirebaseIcon} from "../assets/firebase.svg"

//media imports
import muratoneWeb from '../assets/muratone.png'

export default function Hero1() {
  return (
    <div className="container">
        <div className="row pb-5">
            <div className="col-lg-6 col-12 my-auto projectText text-lg-start text-center pt-5">
                <div className="ps-0 ps-lg-5">
                    <h3>muratone.com</h3>
                    <div className="mt-3">
                    <FontAwesomeIcon className="icon-item me-2" icon={faReact} />
                    <FontAwesomeIcon className="icon-item mx-2" icon={faBootstrap}/>
                    <FirebaseIcon className="external-icon mx-2 icon-item"/>
                    </div>
                    <p className="mt-3"> DJ profile website with user authentication <br /> and integrated LinkTree component</p>
                    <a className="btn btn-md btn-light me-3 greenBtn">demo</a>
                    <a className="btn btn-md btn-outline-light greenBtn"><FontAwesomeIcon className="me-2" icon={faGithub} size="1x"/>repo</a>
                </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-last order-first px-5 px-lg-0 ">
                <img src={muratoneWeb} className="shadow imageSS img-fluid w-100" />
            </div>
        </div>
    </div>
)
}
