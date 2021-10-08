import React, { useContext } from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { name } = loggedInUser
    return (
        <section className="header">
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className="container">
                    <Link className="navbar-brand" to="/"><span className="bran-left">e</span><span className="bran-right">Solution</span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/admin">Admin</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/login">{name}</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </section>
    );
};

export default Header;