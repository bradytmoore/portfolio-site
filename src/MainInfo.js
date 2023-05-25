import React from 'react';
import './App.css';
import btm from "./img/aboutpic.jpg";
import btm2 from "./img/aboutpic2.jpg";
import btm3 from "./img/aboutpic3.jpg";
import lcspf from "./img/lcspf.jpg";
import compinven from "./img/companyinventory.png";
import compsec from "./img/compsecuritydecryption.png";
import huffenc from "./img/huffmanencoding.png";
import passpro from "./img/passwordprogram.png";
import playlist from "./img/playlistprogram.png";
import resume from "./img/btmresume.pdf";
import resumeIcon from "./img/file-solid.svg";
import globe from "./img/planet-earth.png";
import css from "./img/css3-alt.svg";
import html from "./img/html5.svg";
import javascript from "./img/js.svg";
import java from "./img/java.svg";
import react from "./img/react.svg";
import clouds from "./img/clouds.jpg";




function MainInfo() {
    

    

    return (
    <div id="MainContent">
        
        <div className="ContentArea">
        <h1 className="MainDetails">Brady Moore</h1>
        <h1 className="MainDetails">Web Developer/Software Engineer</h1>
            
        </div>


        <div id="AboutMe">
                <div className="AboutMeHeader">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1>-About Me-</h1>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="AboutMeContent">
                    <img className="AboutMePic" alt="Brady Moore" src={btm} />
                    

                </div>

                <div className="AboutMeContent2">
                    <h2>Aspiring Web Developer</h2>
                    <br/>
                    <br/>
                    <h3>Graduate from the University of Mississippi</h3>
                    <h3>(August 2018 - May 2023)</h3>
                    <br/>
                    <h3>Bachelor of Arts: Political Science</h3>
                    <h3>Minor: Computer Science</h3>
                    <h3>GPA: 3.31</h3>
                    <br/>
                    <h2>Main Profeciencies: </h2>
                    <img className="Icons" alt="React" src={react} />
                    <img className="Icons" alt="html5" src={html} />
                    <img className="Icons" alt="JavaScript" src={javascript} />
                    <img className="Icons" alt="CSS" src={css} />
                    <img className="Icons" alt="Java" src={java} />

                    <br/>
                    <br/>
                    <h2>Resume Download:</h2>
                    <div class="resicon">
                    <button class="ResButton"><a href={resume} download>
                        <img className="Icon" alt="Resume Icon" src={resumeIcon}/>
                        
                    </a>
                    </button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    

                </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

        </div>


        <div id="Projects">
            <br/>
            <br/>
            <h1>-Projects-</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="ProjectContent">
                <img className="Icons" alt="React" src={react} />
                <img className="Icons" alt="html5" src={html} />
                <img className="Icons" alt="JavaScript" src={javascript} />
                <img className="Icons" alt="CSS" src={css} />


                <h1>LCS Player Finder</h1>
                <a href="https://lcsapp-74977.web.app/">
                <img className="bradypic2" alt="LCS Player Finder Picture" src={lcspf} />
                </a>

            </div>
            <div className="ProjectContent">
            <img className="Icons" alt="Java" src={java} />

                <h1>Company Inventory Program</h1>
                <a href="https://github.com/bradytmoore/Company-Inventory-Program">
                <img className="bradypic2" alt="Company Inventory Program" src={compinven} />
                </a>

            </div>
            <div className="ProjectContent">
            <img className="Icons" alt="Java" src={java} />

                <h1>Triple Encryption</h1>
                <a href="https://github.com/bradytmoore/Triple-Encryption">
                <img className="bradypic2" alt="Triple Encryption Program" src={compsec} />
                </a>

            </div>
            <div className="ProjectContent">
            <img className="Icons" alt="Java" src={java} />

                <h1>Huffman Encoding</h1>
                <a href="https://github.com/bradytmoore/Huffman-Encoding-Program">
                <img className="bradypic2" alt="Huffman Encoding Program" src={huffenc} />
                </a>
            </div>
            <div className="ProjectContent">
            <img className="Icons" alt="Java" src={java} />

                <h1>Password Manager</h1>
                <a href="https://github.com/bradytmoore/Password-Manager">
                <img className="bradypic2" alt="Password Manager Program" src={passpro} />
                </a>

            </div>
            <div className="ProjectContent">
            <img className="Icons" alt="Java" src={java} />

                <h1>Playlist Program</h1>

                <a href="https://github.com/bradytmoore/Playlist-Program">
                <img className="bradypic2" alt="Playlist Program" src={playlist} />
                </a>

            </div>
        </div>
        <br/>
        <br/>
        <br/>
    
    
    </div>
    

    );

    

}

export default MainInfo;