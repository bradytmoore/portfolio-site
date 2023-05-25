import React from 'react';
import './App.css';
import btm from "./img/aboutpic.jpg";
import btm2 from "./img/aboutpic2.jpg";
import btm3 from "./img/aboutpic3.jpg";
import resume from "./img/btmresume.pdf";
import resumeIcon from "./img/file-solid.svg";
import globe from "./img/planet-earth.png";
import css from "./img/css3-alt.svg";
import html from "./img/html5.svg";
import javascript from "./img/js.svg";
import java from "./img/java.svg";
import react from "./img/react.svg";
import clouds from "./img/clouds.jpg";


function About() {
    return(
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

    )
}

export default About;