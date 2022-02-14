import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general"
                pageSize={30}
                apiKey={process.env.REACT_APP_NEWS_API_KEY}
                category="general"
              />
            </Route>

            <Route exact path="/business">
              <News key="business"
                pageSize={30}
                apiKey={process.env.REACT_APP_NEWS_API_KEY}
                category="business"
              />
            </Route>

            <Route exact path="/entertainment">
              <News key="entertainment"
                pageSize={30}
                apiKey={process.env.REACT_APP_NEWS_API_KEY}
                category="entertainment"
              />
            </Route>

            <Route exact path="/general">
              <News key="general"
                pageSize={30}
                apiKey={process.env.REACT_APP_NEWS_API_KEY}
                category="general"
              />
            </Route>

            <Route exact path="/health">
              <News key="health"
                pageSize={30}
                apiKey={process.env.REACT_APP_NEWS_API_KEY}
                category="health"
              />
            </Route>

            <Route exact path="/science">
              <News key="science"
                pageSize={30}
                apiKey={process.env.REACT_APP_NEWS_API_KEY}
                category="science"
              />
            </Route>

            <Route exact path="/sports">
              <News key="sports"
                pageSize={30}
                apiKey={process.env.REACT_APP_NEWS_API_KEY}
                category="sports"
              />
            </Route>

            <Route exact path="/technology">
              <News key="technology"
                pageSize={30}
                apiKey={process.env.REACT_APP_NEWS_API_KEY}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
