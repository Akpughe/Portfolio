import React from "react"
import { Icon } from "antd"

import "../styles/work.css"

const content = [
  {
    id: 1,
    h4: "OctoProfile",
    p:
      "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
  },
  {
    id: 1,
    h4: "To-do List",
    p:
      "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
  },
  {
    id: 1,
    h4: "Catch of the Day",
    p:
      "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
  },
  {
    id: 1,
    h4: "Reduxstagram",
    p:
      "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
  },
]

const Work = () => {
  return (
    <section id="#three" className="workSection">
      <div className="container">
        <h3 className="workText">Some Things I've Built</h3>
        <div className="grid">
          {content.map(c => {
            return (
              <>
                <div className="main">
                  <div className="sub">
                    <div className="top">
                      <div>
                        <Icon
                          style={{ color: "rgb(100, 255, 218)" }}
                          type="folder-open"
                        />
                      </div>
                      <div style={{}}>
                        <Icon className="git" type="github" />
                      </div>
                    </div>

                    <div key={c} style={{ color: "white" }}>
                      <h2 style={{ fontWeight: "600", color:"white" }}>{c.h4}</h2>
                      <p>{c.p}</p>
                    </div>

                    <div>
                      <ul>
                          <li>Stack</li>
                          <li>Stack</li>
                          <li>Stack</li>
                          <li>Stack</li>
                      </ul>
                  </div>
                  </div>

                  
                  
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Work
