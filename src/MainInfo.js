import React from 'react';
import './App.css';
import Nav from './Nav';
import Data from './data.json';
import { useParams } from 'react-router-dom';
import btm from "./img/bradytmoore.jpg";
import btm2 from "./img/bradytmoore2.jpg";
import lcspf from "./img/lcspf.jpg";
import compinven from "./img/companyinventory.png";
import compsec from "./img/compsecuritydecryption.png";
import huffenc from "./img/huffmanencoding.png";
import passpro from "./img/passwordprogram.png";
import playlist from "./img/playlistprogram.png";


function MainInfo() {
    const params = useParams();

    

    return (
    <div className="MainContent">
        <div className="ContentArea">
        {/* <img id="bradypic" src={Data[0].picture} /> */}
        <img className="bradypic" src={btm} />
        </div>
        <div className="ContentArea">
            <h1 className="MainDetails">Welcome!</h1>
            <h2 className="MainDetails">Web Developer/Software Engineer</h2>
            
        </div>


        <div id="AboutMe">
                <div className="AboutMeHeader">
                    <h1>About Me</h1>
                </div>
                <div className="AboutMeContent">
                    <img className="bradypic2" src={btm2} />

                </div>
                <div className="AboutMeContent">
                    <p>I'm a Web Developer from Mississippi;</p>

                </div>
        </div>


        <div id="Projects">
            <h1>Projects</h1>
            <div className="ProjectContent">
                <h1>LCS Player Finder</h1>
                <img className="bradypic2" src={lcspf} />

            </div>
            <div className="ProjectContent">
                <h1>Company Inventory Program</h1>
                <img className="bradypic2" src={compinven} />

            </div>
            <div className="ProjectContent">
                <h1>Triple Encryption</h1>
                <img className="bradypic2" src={compsec} />

            </div>
            <div className="ProjectContent">
                <h1>Huffman Encoding</h1>
                <img className="bradypic2" src={huffenc} />

            </div>
            <div className="ProjectContent">
                <h1>Password Manager</h1>
                <img className="bradypic2" src={passpro} />

            </div>
            <div className="ProjectContent">
                <h1>Playlist Program</h1>
                <img className="bradypic2" src={playlist} />

            </div>
        </div>
    
    </div>

    );

    

}

export default MainInfo;