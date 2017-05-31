import React from "react"

import { BrowserRouter as Router, Route } from "react-router-dom"

import ActivityList from "./ActivityList"

const App = () => (
  <div className="ui main text container">
    <h1 className="ui center aligned header">
      <i className="compass icon" />
      kidDO
    </h1>
    <Router>
      <div>
        <Route exact path="/" component={ActivityList} />
      </div>
    </Router>
  </div>
)

export default App
