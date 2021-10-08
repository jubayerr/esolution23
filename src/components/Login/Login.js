import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log(loggedInUser);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser)
                history.replace(from)

            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <Header />
            <section className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className="card text-center py-5">
                                <div className="card-body">
                                    <h2 className="pb-5">Log In</h2>
                                    <button onClick={handleGoogleSignIn}>Log in with Google</button>
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

export default Login;