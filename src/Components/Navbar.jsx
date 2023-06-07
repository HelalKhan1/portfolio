

import { Link } from 'react-scroll';

import React from "react";


const Navbar = () => {

    return (

        <>
            
            <div className=" bg-dark fixed-top">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            
                            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="#">Helal Khan</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                                        <ul className="navbar-nav">

                                            <li className="nav-item">
                                                <Link to="home" smooth={true} duration={800} offset={-50} >
                                                    <a className="nav-link" href="Home">Home</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="about" smooth={true} duration={800} offset={-50} >
                                                    <a className="nav-link" href="About">About</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="skill" smooth={true} duration={800} offset={-50} >
                                                    <a className="nav-link" href="Skills">Skills</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="projects" smooth={true} duration={800} offset={-50} >
                                                    <a className="nav-link" href="Projects">Projects</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="service" smooth={true} duration={800} offset={-50} >
                                                    <a className="nav-link" href="Services">Services</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="contact" smooth={true} duration={800} offset={-50} >
                                                    <a className="nav-link" href="Contact">Contact</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}


export default Navbar;