import React from "react"
// import { Button } from "react-bootstrap"
import "../styles/index.css"

const FirstPage = () => (
  <section className="indexSection">
    <div className="container">
    <h1 className="one">Hi, my name is</h1>
    <h2 className="two">David Akpughe.</h2>
    <h3 className="three">I build things for the web.</h3>
    <div className="indexText">
      <p>
        I'm a software engineer based in Abuja, FCT specializing in building
        (and occasionally designing) exceptional, high-quality websites and
        applications.
      </p>
    </div>
    <div style={{ marginTop: "50px" }}>
      {/* <Button className="buttonIndex">Get In Touch</Button> */}
    </div>
    </div>
  </section>
)

export default FirstPage
