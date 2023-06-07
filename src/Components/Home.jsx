
import React from "react";
import Typing from "./Typing";
import img1 from '../images/helal.jpeg';

const Home = () => {
    return (
    
        <>
        <div className="home" id="home">
            <div className="container-fluid pt-6">
                <div className="row">
                    <div className="col-md-8 p-2 text-white order-2 order-md-1">
                        <div className="text-box">
                            <h1> I'm <Typing/></h1>
                            <p>Are you looking for a professional developer or a programmer ?</p>
                            <p> Then I'm here for you. You can reach out to me if you need any help 
                                in making a project or website for you or your bussiness. You can download 
                                my CV or contact me.</p>
                            

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-6">
                                    <a href="#" className="float-end">Contact me</a>
                                    </div>
                                    <div className="col-6">
                                    <a href="#" className="btn" download>Download CV</a>
                                    </div>
                                </div>
                            </div> 
                        </div>

                    </div>
                    <div className="col-md-4 p-2 text-white center order-1 order-md-2">
                        <img src= {img1} className="img-fluid" width="400" height="250"/> 
                    
                    </div>
                </div>
            </div>
        </div>

      </>



    )
}

export default Home;