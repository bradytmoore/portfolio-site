import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import MainInfo from './MainInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
      </div>

      <Routes>
        <Route path="/" element={<MainInfo /> }/>
      </Routes>
      <br/>
      <br/>

      <footer>
        <ul className="Footer">
            <li>
                brady.moore112@gmail.com
            </li>
            <li>
                769-232-0388
            </li>
            <li>
              https://www.linkedin.com/in/brady-moore-916531229/
            </li>
        </ul>
      </footer>
    </Router>


  );
}

export default App;
