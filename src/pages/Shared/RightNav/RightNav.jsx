
import React from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h5>Login With</h5>
                <Button variant="outline-primary" className='mb-2'> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            </div>

            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item> <FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <Qzone></Qzone>

            <div className='mt-4'>
                <img src={bg} alt="" />
            </div>
        </div>
    )
}

export default RightNav;