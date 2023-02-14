import React from 'react'
import "./Home.css"
import profPic from "../assets/3-smal.jpg"

export default function Home() {
  return (
    <div className="container HomeDiv d-flex justify-content-evenly align-items-center">

            <div className="">
                <h1>Redza Ramzan [GTklr]</h1>
                <h2 className="text-start typewriter me-auto">Front-End Developer :)</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                <br /> Molestiae quibusdam aliquid mollitia quia vitae sit.</p>
                <a className="btn btn-outline-light"> Contact </a>
            </div>

            <div className="">
                <div className="overflow-hidden">
                    <img src={profPic} className="rounded shadow-lg pt-5" id="profilePic" width={"500"}/>
                </div>
            </div>
            

        
    </div>
  )
}
