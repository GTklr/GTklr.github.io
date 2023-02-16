import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className="footer" id="contactSection">
        <div className="container bg-succes">
            <div className="footerDiv mx-auto">
                <div className="text-center p-2">
                    <a href="https://www.linkedin.com/in/reyzaboleh/" target="_blank"><FontAwesomeIcon className="footer-icon mx-2" icon={faLinkedin} size="1x" /></a>
                    <a href="mailto:redzaramzan@gmail.com" target="_blank"><FontAwesomeIcon  className="footer-icon mx-2" icon={faSquareEnvelope} size="1x" /></a>

                </div>
            </div>
            
        </div>
    </div>
  )
}
