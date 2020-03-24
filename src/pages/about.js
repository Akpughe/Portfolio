import { Link } from "gatsby"
import React from "react"
import "../styles/about.css"

const AboutPage = () => (
  <section id="one" className="aboutSection">
    <div className="container">
      <h3 className="aboutText">About Me</h3>
      <div className="aboutContent">
        <div className="textContent">
          <p className="paragraphText">
            Hello! I'm David, a software engineer based in Abuja, FCT who enjoys
            building things that live on the internet. I develop exceptional
            websites and web apps that provide intuitive, pixel-perfect user
            interfaces with efficient and modern backends.
          </p>
          <p className="paragraphText">
            I am a student of <span>Babcock University</span>, I joined the
            engineering team at <span>Upstatement</span> where I work on a wide
            variety of interesting and meaningful projects on a daily basis.
          </p>
          <p className="paragraphText">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="aboutList">
            <li className="">JavaScript (ES6+)</li>
            <li className="">React</li>
            <li className="">Node.js</li>
            <li className="">HTML & CSS</li>
            <li className="">Express</li>
          </ul>
        </div>
        <div className="pictureContent">
          <Link>
            <svg></svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default AboutPage
