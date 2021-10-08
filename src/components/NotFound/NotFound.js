import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <Header />
            <section className="notfound py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className="card text-center">
                                <div className="card-body">
                                    <div className="py-5">
                                        <h2>Content not found</h2>
                                        <p className="text-danger">404... Error!!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default NotFound;