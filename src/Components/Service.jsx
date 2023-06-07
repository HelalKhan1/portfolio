
import React from "react";
import ServiceCard from "./ServiceCard";


const Hire = () => {
    return(
        <>
            <div className="about" id="service">
                <div className="container-fluid pt-6 ">
                    <div className="title d-flex justify-content-center">
                        <h1>My Services</h1>
                    </div>
    
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-md-6 p-2">
                                    <ServiceCard  title="UI/UX Dsigner" 
                                    body=" I am professional UI/UX deginer. I can design your website according to your rquirements. My desgin will be responsive so that every user can use it properly."
                                    footer="For further details, you can contact me."/>

                                </div>

                                <div className="col-md-6 p-2">
                                    <ServiceCard  title="Full Stack Developer" 
                                    body=" I am a full stack developer. I can develope front-end and back-end. I can develope front-end with reactJS and back-end in Pyhton."
                                    footer="If need any kind of website, you can knock me."/>

                                </div>

                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-md-6 p-2">
                                    <ServiceCard  title="Software developer" 
                                    body=" I am professional software developer. You can make any kind of software throuhg me. I can develope your software in Python."
                                    footer="If need any kind of software , you can knock me."/>

                                </div>

                                <div className="col-md-6 p-2">
                                    <ServiceCard  title="AI/ML model developer" 
                                    body=" I am professional AI and ML model developer. I can make any kind of model and intregate with any software."
                                    footer="If need any kind of AI/ML model or AI/ML model based software, you can knock me."/>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
        
    )
}

export default Hire;