import React from "react";

//icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

import profPic from "../assets/3.png";

export default function Home() {
  return (
    <div className="scroll-snap-start HomeDiv ">
      <div className="container lg:h-[90vh] sm:h-screen">
        <div className="h-full flex lg:flex-row flex-col  lg:text-left xs:text-centerpt-10 lg:pt-0 items-center lg:justify-center justify-between mx-5 pt-10">
          <div className="">
            <h1 className="text-5xl">Hi, I'm Redza Ramzan</h1>
            <div className="typewriter">
              <h2 className="text-3xl typewriter-text mt-3">
                A Front-end Developer
              </h2>
            </div>
            <p className="mt-3">
              Full stack digital marketing specialist turned Front-End developer
              who loves building things.
            </p>
            <div className="mt-3">
              <a
                href="#contactSection"
                className="inline-block px-4 py-2 mr-3 bg-yellowgreen text-white rounded hover:bg-yellowgreen transition-colors"
              >
                contact
              </a>
              <a
                href="https://github.com/GTklr"
                target="_blank"
                className="inline-block px-4 py-2 border hover:border-none text-white rounded hover:bg-yellowgreen hover:text-white transition-colors"
              >
                <FontAwesomeIcon className="mr-2" icon={faGithub} size="1x" />
                repo
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 pt-4 md:pt-20 lg:-mb-10">
            <img src={profPic} className="w-full" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}
