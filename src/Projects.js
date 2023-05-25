import React from 'react';
import './App.css';
import lcspf from "./img/lcspf.jpg";
import compinven from "./img/companyinventory.png";
import compsec from "./img/compsecuritydecryption.png";
import huffenc from "./img/huffmanencoding.png";
import passpro from "./img/passwordprogram.png";
import playlist from "./img/playlistprogram.png";
import css from "./img/css3-alt.svg";
import html from "./img/html5.svg";
import javascript from "./img/js.svg";
import java from "./img/java.svg";
import react from "./img/react.svg";



function Projects() {
    return(
        <div id="Projects">
            <br/>
            <br/>
            <h1>-Projects-</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <span className="ProjectSkills">
                <h1>LCS Player Finder</h1>
                
                    <div className= "IconList"><img className="Icons" alt="React" src={react} /></div>
                    <div className= "IconList"><img className="Icons" alt="html5" src={html} /></div>
                    <div className= "IconList"><img className="Icons" alt="JavaScript" src={javascript} /></div>
                    <div className= "IconList"><img className="Icons" alt="CSS" src={css} /></div>
                    
                    <a href="https://lcsapp-74977.web.app/">
                    <img className="bradypic3" alt="LCS Player Finder Picture" src={lcspf} />
                    </a>

                
            </span>
            

            <span className="ProjectSkills">
                <h1>Company Inventory Program</h1>
                
                <img className="Icons" alt="Java" src={java} />
                
                <a href="https://github.com/bradytmoore/Company-Inventory-Program">
                <img className="bradypic2" alt="Company Inventory Program" src={compinven} />
                </a>
                
            </span>

            

            <span className="ProjectSkills">
                <h1>Triple Encryption</h1>
                <img className="Icons" alt="Java" src={java} />
                <a href="https://github.com/bradytmoore/Triple-Encryption">
                <img className="bradypic2" alt="Triple Encryption Program" src={compsec} />
                </a>
                
            </span>

            

            <span className="ProjectSkills">
                <h1>Huffman Encoding</h1>
                <img className="Icons" alt="Java" src={java} />
                <a href="https://github.com/bradytmoore/Huffman-Encoding-Program">
                <img className="bradypic2" alt="Huffman Encoding Program" src={huffenc} />
                </a>
                
            </span>

            

            <span className="ProjectSkills">
                <h1>Password Manager</h1>
                <img className="Icons" alt="Java" src={java} />
                <a href="https://github.com/bradytmoore/Password-Manager">
                <img className="bradypic2" alt="Password Manager Program" src={passpro} />
                </a>
                
            </span>

            

            <span className="ProjectSkills">
                <h1>Playlist Program</h1>
                <img className="Icons" alt="Java" src={java} />
                <a href="https://github.com/bradytmoore/Playlist-Program">
                <img className="bradypic2" alt="Playlist Program" src={playlist} />
                </a>

                
            </span>

            
        </div>
    )
}

export default Projects;