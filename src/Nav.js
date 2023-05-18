import React from "react";
import './App.css';


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
                        <li class="NavLinks">Home</li>
                        <li class="NavLinks">About Me</li>
                        <li class="NavLinks">Projects</li>
                        <li class="NavLinks">Skills</li>
                    </ul>
                </div>
            </div>

        </nav>


    )
}

export default Nav;