import React from 'react';
import './About.css'
import AboutImg from '../../../images/about.png'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <img src={AboutImg} alt="About" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="px-5">
                            <h2>About eSolution</h2>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate possimus, deserunt harum beatae eligendi consectetur perspiciatis exercitationem nihil ipsam, incidunt sed maxime, ipsa magnam nulla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;