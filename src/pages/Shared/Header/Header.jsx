import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Container, Button } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="Logo Image" />
                <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='d-flex bg-light p-2'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={70}>
                    <span> <strong>Match Highlights :  </strong> </span> &nbsp; Germany  vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </Container>
    )
}

export default Header;