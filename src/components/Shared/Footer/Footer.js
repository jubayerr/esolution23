import React from 'react';
import './Footer.css'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>eSolution</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corporis omnis distinctio doloremque eaque velit dolorum delectus rem qui praesentium!</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Important Pages</h4>
                        <p><a href="#">Portfolio</a></p>
                        <p><a href="#">Reviews</a></p>
                        <p><a href="#">Blog</a></p>
                    </div>
                    <div className="col-md-3">
                        <h4>Our Office</h4>
                        <p>phone: <strong>012 3456 789</strong></p>
                        <p>Email: <strong>esolution@gmail.com</strong></p>
                        <p> <strong>Bashundhara R/A, Pragati Sarani,
                        Dhaka, Bangladesh</strong></p>
                    </div>
                    <div className="col-md-3">
                        <h4>Social Account</h4>
                        <p><a href="#">Facebook</a></p>
                        <p><a href="#">Twitter</a></p>
                        <p><a href="#">Instagram</a></p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;