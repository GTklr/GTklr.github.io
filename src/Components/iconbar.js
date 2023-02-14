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
        <div className="row container w-75 mx-auto">
            <div className="icon-container d-flex justify-content-evenly p-3 py-4 shadow-lg">
            <FontAwesomeIcon className="col icon-item" icon={faHtml5}  size="4x"/>
            <FontAwesomeIcon className="col icon-item" icon={faCss3Alt}  size="4x"/>
            <FontAwesomeIcon className="col icon-item" icon={faJs}  size="4x"/>
            <FontAwesomeIcon className="col icon-item" icon={faReact} size="4x"/>
            <FontAwesomeIcon className="col icon-item" icon={faBootstrap} size="4x"/>
            <FontAwesomeIcon className="col icon-item" icon={faEnvira} size="4x"/>
            <FontAwesomeIcon className="col icon-item" icon={faNode} size="4x"/>
            </div>
        </div>
    </div>
  )
}