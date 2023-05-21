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
import resume from "./img/btmresume.pdf";
import resumeIcon from "./img/file-solid.svg";
import globe from "./img/planet-earth.png";




function MainInfo() {
    const params = useParams();

    

    return (
    <div id="MainContent">
        <div className="ContentArea">
        {/* <img id="bradypic" src={Data[0].picture} /> */}
        <img className="bradypic" alt="Brady Moore" src={btm} />
        </div>
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
                    <h1>About Me</h1>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="AboutMeContent">
                    <img className="AboutMePic" alt="Brady Moore" src={btm2} />

                </div>
                <div className="AboutMeContent2">
                    <h2>An aspiring Web Developer with a sense of wonderlust <img alt="Planet Earth by Freepik" className="AboutIco" src={globe}/></h2>
                    <br/>
                    <br/>
                    <h3>Graduate from the University of Mississippi</h3>
                    <br/>
                    <h3>Bachelor of Arts: Political Science</h3>
                    <h3>Minor: Computer Science</h3>
                    <h3>GPA: 3.31</h3>
                    <br/>
                    <h2>Main Profeciencies: </h2>
                    <img className="Icons" alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
                    <img className="Icons" alt="html5" src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
                    <img className="Icons" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                    <img className="Icons" alt="CSS" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
                    <img className="Icons" alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />

                    <br/>
                    <br/>
                    <h2>Resume Download:</h2>
                    <div class="resicon">
                    <a href={resume} download>
                        <img className="Icon" alt="Resume Icon" src={resumeIcon}/>
                        
                    </a>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
        </div>


        <div id="Projects">
            <br/>
            <br/>
            <h1>Projects</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="ProjectContent">
                <img className="Icons" alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
                <img className="Icons" alt="html5" src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
                <img className="Icons" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                <img className="Icons" alt="CSS" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />


                <h1>LCS Player Finder</h1>
                <img className="bradypic2" alt="LCS Player Finder Picture" src={lcspf} />
                

            </div>
            <div className="ProjectContent">
            <img className="Icons" alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />

                <h1>Company Inventory Program</h1>
                <img className="bradypic2" alt="Company Inventory Program" src={compinven} />

            </div>
            <div className="ProjectContent">
            <img className="Icons" alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />

                <h1>Triple Encryption</h1>
                <img className="bradypic2" alt="Triple Encryption Program" src={compsec} />

            </div>
            <div className="ProjectContent">
            <img className="Icons" alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />

                <h1>Huffman Encoding</h1>
                <img className="bradypic2" alt="Huffman Encoding Program" src={huffenc} />

            </div>
            <div className="ProjectContent">
            <img className="Icons" alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />

                <h1>Password Manager</h1>
                <img className="bradypic2" alt="Password Manager Program" src={passpro} />

            </div>
            <div className="ProjectContent">
            <img className="Icons" alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />

                <h1>Playlist Program</h1>
                <img className="bradypic2" alt="Playlist Program" src={playlist} />

            </div>
        </div>
        <br/>
        <br/>
        <br/>
    
    
    </div>

    );

    

}

export default MainInfo;