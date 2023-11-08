import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user, logOut, signIn } = useContext(AuthContext);


    console.log('email user singIn info: ', signIn);


    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg='white' variant='white'>
                <Container className='p-0'>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <NavLink to={'/'} className='px-2 text-decoration-none fs-5'>Home</NavLink>
                            <NavLink to={'/about'} className='px-2 text-decoration-none fs-5' >About</NavLink>
                            <NavLink to={'/contact'} className='px-2 text-decoration-none fs-5' >Contact</NavLink>

                        </Nav>
                        <Nav>
                            {user && <div className='d-flex align-items-center'>
                                <div className='px-2 text-primary fs-6'>Welcome, {user.displayName ? user.displayName.split(' ')[0] : ''} </div> {user.photoURL ? <img src={user.photoURL} style={{ width: '40px', height: '40px', borderRadius: '50%' }} /> : <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}
                            </div>
                            }
                            <Nav.Link eventKey={2} href="#memes">
                                {user ?
                                    <Button variant="secondary" className='mx-0 rounded-0' onClick={handleLogout}>Logout</Button> :

                                    <Link to={'/login'}>
                                        <Button variant="secondary" className='mx-0 rounded-0'>Login</Button>
                                    </Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default NavigationBar;