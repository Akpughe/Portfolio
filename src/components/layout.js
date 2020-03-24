import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/layout.css"
import "../styles/dist/css/bootstrap.min.css"


const Layout = props => {
  return (
    <div className="main">
      <div className="site">
        <Header />
      </div>
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
