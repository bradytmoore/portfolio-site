import React from 'react';
import './App.css';
import Nav from './Nav';
import Data from './data.json';
import { useParams } from 'react-router-dom';
import btm from "./img/bradytmoore.jpg";


function MainInfo() {
    const params = useParams();

    

    return (
    <div className="MainContent">
        <div className="ContentArea">
        {/* <img id="bradypic" src={Data[0].picture} /> */}
        <img id="bradypic" src={btm} />
        </div>
        <div className="ContentArea">
            <h1>Welcome!</h1>
            <p>My name is Brady Moore and I'm an aspiring Web Developer that recently graduated from the University of Mississippi.</p>
            <br/>
            <p>I mainly focus Frontend Development but I also have experience with Fullstack Development as well.</p>
            <br/>
            <p>Some of the main languages I use are:</p>
            <ul>
                <li className="Skills">Java</li>
                <li className="Skills">JavaScript</li>
                <li className="Skills">HTML</li>
                <li className="Skills">CSS</li>
                <li className="Skills">Python</li>
                <li className="Skills">R</li>
                <li className="Skills">C++</li>
                <li className="Skills">SQL</li>
            </ul>
        </div>
    
    </div>

    );

    

}

export default MainInfo;