// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import News from './components/News'
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<News pageSize={5} key="general" country="in" category="general" />} />
            <Route exact path="/business" element={<News pageSize={5} key="business" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News pageSize={5} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News pageSize={5} key="health" country="in" category="health" />} />
            <Route exact path="/science" element={<News pageSize={5} key="science" country="in" category="science" />} />
            <Route exact path="/sports" element={<News pageSize={5} key="sports" country="in" category="sports" />} />
            <Route exact path="/technology" element={<News pageSize={5} key="technology" country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
