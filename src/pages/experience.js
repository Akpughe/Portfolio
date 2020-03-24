import React, { useState } from "react"
import { Tabs } from "antd"
// import Tabs from 'antd/es/button';
import "../styles/experience.css"
// import "../styles/ant-tabs.css"

const { TabPane } = Tabs

const Experience = () => {
  const tabby = [
    {
      id: "1",
      company: "Hack Academy",
      content: "This is a test",
    },
    {
      id: "2",
      company: "Pedda",
      content: "This is a test 1",
    },
    {
      id: "3",
      company: "BUCC",
      content: "This is a test 2",
    },
  ]
  const [mode] = useState("left")

  return (
    <section id="#two" className="experienceSection">
      <div className="container">
        <h3 className="experienceText">Where I've Worked</h3>
        <div>
        <Tabs tabPosition={mode}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
        </div>
      </div>
    </section>
  )
}

export default Experience
