import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Container, Button, Navbar, Nav, NavDropdown, Spinner } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import NavigationBar from '../NavigationBar/NavigationBar';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


const Header = () => {

    const { loading } = useContext(AuthContext);

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

            {loading ? (<h2 className='text-center'>Loading</h2>) : (<NavigationBar />)}

        </Container>
    )
}

export default Header;