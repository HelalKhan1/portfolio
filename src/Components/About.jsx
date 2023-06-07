
import React from 'react';
import img2 from '../images/HK.png';


function About() {
return (
	<>
        <div className="about" id="about">
            <div className="container-fluid pt-6 ">
                <div className="title d-flex justify-content-center">
                    <h1>About Me</h1>
                </div>
            
                <div className="row">
                    <div className="col-md-6 p-2 text-black center">
                    <img src= {img2} className="img-fluid" width="400" height="250"/> 

                    </div>
                    <div className="col-md-6 p-2 text-black">
                        <div className="title1 ">
                            <h1>Myself</h1>
                        </div>
                        <p>My name is Helal Khan. I'm a fresh CSE graduate and a professional 
                            web/software developer. </p>
                        <p>Currently I am living at Banasree, Rampura, Dhaka.</p>
                        

                        <div className="title1 ">
                            <h1>Education</h1>
                        </div>
                        <p>I completed Higher Secondary Certificate from Sristy College of Tangail in 2018.</p>
                        <p>Form 2019 to 2023 I studied Computuer Science and Engineering at East West University.
                            I have completed my graduation from East West University in 2023.</p>
                        <p>I have excellent proficiency in reading, writing, speaking and listening in Bangla and English.</p>

                        <div className="title1 ">
                            <h1>Hobies</h1>
                        </div>
                        <p>I love travelling, watching movies.</p>                    
                    </div>
                </div>
            </div>
        </div>
	</>
);
}

export default About;
