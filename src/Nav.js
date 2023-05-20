import React from "react";
import './App.css';
import './MainInfo';


function Nav() {

    return (

        <nav>
            <div id="NavBar">

                {/* <div class="NavStuff">
                    <h1 id="NameTitle"> Brady Moore </h1>
                    <h2 id="WebDevTitle"> Web Developer </h2>
                </div> */}
                <div class="NavStuff">
                    <ul id="LinkList">
                        <a href="#MainContent" class="NavLinks"><li>Home</li></a>
                        <a href="#AboutMe" class="NavLinks"><li>About Me</li></a>
                        <a href="#Projects" class="NavLinks"><li>Projects</li></a>
                        {/* <li class="NavLinks">Skills</li> */}
                    </ul>
                </div>
            </div>

        </nav>


    )
}

export default Nav;