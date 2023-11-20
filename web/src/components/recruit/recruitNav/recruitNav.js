import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';

function RecruitNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex justify-content-around align-items-center w-100 overflow-hidden">
                    <NavLink to="/recruit" className='logo' activeClassName='active-link'>
                        Super Cool Jobs
                    </NavLink>

                    <NavLink to="/recruit/profile" className='link-text' activeStyle={{ borderBottom: '2px solid gray' }}>
                        Recruit Profile
                    </NavLink>
                    <NavLink to="/recruit/posting" className='link-text' activeStyle={{ borderBottom: '2px solid gray' }}>
                        Recruit Posting
                    </NavLink>
                    <Nav.Link>
                        <button type="submit" className="btn btn-outline-dark w-80 p-3 px-5">
                            Log Out
                        </button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default RecruitNav;
