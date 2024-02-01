
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from '../pages/Home';
import Test from '../pages/Test'
import Account from '../pages/Account';
import QuizGenerator from '../backend/components/QuizGenerator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {
    return (
        <Router>
            <div className="custom-header-container">
                <Navbar className="custom-navbar" expand="lg">
                    <Navbar.Brand as={Link} to="/"><img src="/turt.png" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="mr-auto">
                            <NavDropdown title={<span className="navbar-toggler-icon"></span>} id="basic-nav-dropdown" align="end">
                                <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/quiz">Quiz</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/account">Account</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quiz" element={<Test />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/quiz-gen" element={<QuizGenerator />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Header;
