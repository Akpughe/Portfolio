import { Link } from "gatsby"
import { Icon } from "antd"
import React from "react"
import { animateScroll as scroll } from "react-scroll";

import "../styles/header.css"

const Header = ({ siteTitle }) => {
  if (typeof window !== 'undefined') {
    // Make scroll behavior of internal links smooth
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
  }
  return (
    <>
      <header>
        <nav className="nav_bar">
          <div className="logo">
            <Link>
              <h1>logo</h1>
            </Link>
          </div>
          <div className="nav_bar_list">
            <ol>
              <li>
                <Link id="/#about">About</Link>
              </li>
              <li>
                <Link to="/#experience">Experience</Link>
              </li>
              <li>
                <Link id="#three">Work</Link>
              </li>
              <li>
                <Link id="#four">Contact</Link>
              </li>
              <li>
                <button className="btn button">Resume</button>
              </li>
            </ol>
          </div>
        </nav>
      </header>

      <div className="left">
        <ul className="social">
          <li>
            <Link>
              <Icon type="github" />
            </Link>
          </li>
          <li>
            <Link>
              <Icon type="linkedin" />
            </Link>
          </li>
          <li>
            <Link>
              <Icon type="twitter" />
            </Link>
          </li>
          <li>
            <Link>
              <Icon type="instagram" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="right">
        <div className="mail">
          <Link>davidakpughe2@gmail.com</Link>
        </div>
      </div>
    </>
  )
}

export default Header
