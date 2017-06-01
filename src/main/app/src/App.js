import React from "react"

import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import { Button, Menu } from "semantic-ui-react"

import ActivityList from "./ActivityList"
import CreateActivity from "./CreateActivity"

const mainContainerStyle = {
  marginTop: "6em"
}

const App = ({ history }) => {
  return (
    <Router>
      <div>
        <Menu fixed="top" inverted>
          <Menu.Item header>
            <Link to="/">
              <h1>
                <i className="compass icon" />
                kidDO
              </h1>
            </Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/create-activity" className="ui button primary">
                Create activity
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className="ui main text container" style={mainContainerStyle}>
          <Route exact path="/" component={ActivityList} />
          <Route path="/create-activity" component={CreateActivity} />
        </div>
      </div>
    </Router>
  )
}

export default App
