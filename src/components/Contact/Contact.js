import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact-us">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6 offset-3">
                        <h2>Contact Us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Name" /> <br />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                                <br />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={4} placeholder="Write you message..." />
                            </Form.Group>
                            <Button>Send Message</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;