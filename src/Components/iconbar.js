import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { faEnvira } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'

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
            <FontAwesomeIcon className="col icon-item" icon={faEnvira} />
            <FontAwesomeIcon className="col icon-item" icon={faNode} />
            </div>
        </div>
    </div>
  )
}