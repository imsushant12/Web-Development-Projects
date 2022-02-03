import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export class App extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Navbar />
        <News
          pageSize={30}
          apiKey={process.env.REACT_APP_NEWS_API_KEY}
          category="general"
        />
      </div>
    );
  }
}

export default App;
