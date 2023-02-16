import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faHtml5, faReact, faBootstrap, faNode, faEnvira, faCss3Alt, faJs} from '@fortawesome/free-brands-svg-icons'

import "./iconbar.css"

export default function Iconbar() {
  return (
    <div className="iconSection">
        <div className="row container mx-auto">
            <div className="icon-container d-flex justify-content-evenly p-3 py-4 shadow-lg">
            <FontAwesomeIcon className="col icon-item" icon={faHtml5}  />
            <FontAwesomeIcon className="col icon-item" icon={faCss3Alt}  />
            <FontAwesomeIcon className="col icon-item" icon={faJs}  />
            <FontAwesomeIcon className="col icon-item" icon={faReact} />
            <FontAwesomeIcon className="col icon-item" icon={faBootstrap} />
            <FontAwesomeIcon className="col icon-item LearningIcons" icon={faEnvira} />
            <FontAwesomeIcon className="col icon-item LearningIcons" icon={faNode} />
            </div>
        </div>
    </div>
  )
}