import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import MainInfo from './MainInfo';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";


function App() {
  return (
    
      <Router>
        <div className="App">
          <Nav/>
        </div>

        {/* <Routes>
          <Route path="/" element={<MainInfo /> }/>
        </Routes> */}
        <MainInfo />
        <br/>
        <br/>
        

        <footer>
          <ul className="Footer">
            <h1>Contact Me:</h1>
              <li>
                  brady.moore112@gmail.com
              </li>
              <li>
                  769-232-0388
              </li>
              <li>
                <a href="https://www.linkedin.com/in/brady-moore-916531229/">
                  <img alt="LinkedIn Icon by Freepik" className="FootIco" src={linkedin}/>
                </a>
              </li>
              <li>
                <a href="https://github.com/bradytmoore">
                    <img alt="Github Icon By IconsBox" className="FootIco" src={github}/>
                </a>
              </li>
              
          </ul>
        </footer>
      </Router>
    


  );
}

export default App;
