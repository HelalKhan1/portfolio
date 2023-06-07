
import React from "react";



const Footer = () => {
    return (
        <>
            <div className="bg-dark pt-4 text-white" id="contact">
                <div class="container-fluid pb-4">
                    <div class="row">
                        <div class="col-md-5 pb-4">
                            <div className="center">
                                <h1>Contact With Me</h1>
                            </div>
                            <div className="center">
                                <div> You can contact me anytime </div>

                                <div className="brandhover">
                                    <i class="fa-regular fa-envelope"/>
                                    &nbsp;Email: <a href="mailto:helal.khan.9192@gmail.com">helal.khan.9192@gmail.com</a>
                                </div>

                                <div className="brandhover">
                                    <i class="fa-regular fa-phone"/>
                                    &nbsp;Phone: <a href="tel:01742619119">01742619119</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-7">
                            <div className="center">
                                <h1>Follow Me</h1>
                            </div>
                            <div className="container-fluid">
                                <div className="row ">
                                    <div className="col-3 center">
                                        <div className="d-flex justify-content-center iconhover">
                                            <div className="icon "><a href="https://www.facebook.com/helalkhan.shawon.16?mibextid=LQQJ4d" > <i class=" fa-brands fa-facebook-f"></i></a></div>
                                        </div>
                                        <div className="brandhover"><a href="https://www.facebook.com/helalkhan.shawon.16?mibextid=LQQJ4d">Faceboook</a></div>
                                    </div>

                                    <div className="col-3 center">
                                        <div className="d-flex justify-content-center iconhover">
                                            <div className="icon "><a href="https://instagram.com/helal_khan_shawon?igshid=OGQ5ZDc2ODk2ZA==" > <i class="fa-brands fa-instagram"></i></a></div>
                                        </div>
                                        <div className="brandhover"><a href="https://instagram.com/helal_khan_shawon?igshid=OGQ5ZDc2ODk2ZA==">Instagram</a></div>
                                    </div>

                                    <div className="col-3 center">
                                        <div className="d-flex justify-content-center iconhover">
                                            <div className="icon "><a href="#" > <i class="fa-brands fa-linkedin-in"></i></a></div>
                                        </div>
                                        <div className="brandhover"><a href="#">Linkedin</a></div>
                                    </div>

                                    <div className="col-3 center">
                                        <div className="d-flex justify-content-center iconhover">
                                            <div className="icon "><a href="https://github.com/HelalKhan1" > <i class="fa-brands fa-github"></i></a></div>
                                        </div>
                                        <div className="brandhover"><a href="https://github.com/HelalKhan1">Github</a></div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-center pt-4 ">
                    <p> © 2023 Copyright: <strong>Portfolio of Helal Khan</strong></p>
                </div>
            </div>
            
        </>
    )
}

export default Footer;