import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg='white' variant='white'>
                <Container className='p-0'>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#pricing"><Link to={'/'}>Home</Link></Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets" className='d-flex align-items-center'>
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            </Nav.Link>
                            }
                            <Nav.Link eventKey={2} href="#memes">
                                {user ?
                                    <Button variant="secondary" className='mx-0 rounded-0'>Logout</Button> :

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