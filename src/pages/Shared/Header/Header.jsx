import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Container, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="Logo Image" />
                <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='d-flex bg-light p-2'>
                <Button variant="danger" className='rounded-0'>Latest</Button>
                <Marquee className='text-danger' speed={70}>
                    <span> <strong>Match Highlights :  </strong> </span> &nbsp; Germany  vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

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

export default Header;