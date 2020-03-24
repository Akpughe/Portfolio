import React from "react"
import Layout from "../components/layout"
import FirstPage from "./firstpage"
import AboutPage from "./about"
import Experience from "./experience"
import Work from "./work"
import Contact from "./contact"
import '../styles/index.css'


const IndexPage = () => {
  return (
    <Layout>
      <div className="major">
      <FirstPage id="" />
      <AboutPage id="one" />
      <Experience id="" />
      <Work id="three" />
      <Contact/>
      </div>
    </Layout>
  )
}

export default IndexPage
