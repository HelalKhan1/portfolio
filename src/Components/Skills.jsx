
import React from "react";
import CircularProgressBar from "./CircularProgressBar";


const Skills = () => {

    return(
        <>
		
        <div className="skills" id="skill">
            <div className="container-fluid pt-6">
            <div className="title d-flex justify-content-center">
                    <h1>My Skills</h1>
                </div>
                
                <div className="row">
                    <div className="col-md-6 p-2 ">
                        <div className="row">
                            <div className="col-6 ">
                                <div className="center">Python</div>
                                <div className="d-flex justify-content-center">
                                    <CircularProgressBar percentage="70"  offset="108"/>
                                </div> 
                            </div>

                            <div className="col-6 ">
                                <div className="center">JavaScript</div>
                                <div className="d-flex justify-content-center">
                                <CircularProgressBar percentage="60" offset="144"/>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 p-2 ">
                    <div className="row">
                        <div className="col-6 ">
                                <div className="center">React</div>
                                <div className="d-flex justify-content-center">
                                    <CircularProgressBar percentage="60" offset="144"/>
                                </div> 
                            </div>

                            <div className="col-6 ">
                                <div className="center">HTML and CSS</div>
                                <div className="d-flex justify-content-center">
                                    <CircularProgressBar percentage="80" offset="72"/>
                                </div> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

      </>
    )
}

export default Skills;