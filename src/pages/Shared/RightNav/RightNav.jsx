
import React, { useState } from 'react'
import { Button, ListGroup, Spinner } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


const RightNav = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleGoogleSignIn = async () => {
        setLoading(true); // Show loading indicator
        await googleSignIn();
        setLoading(false); // Hide loading indicator when the response is received
    };

    const handleGithubSignIn = async () => {
        setLoading(true); // Show loading indicator
        await githubSignIn();
        setLoading(false); // Hide loading indicator when the response is received
    };

    return (
        <div>
            <div>
                <h5>Login With</h5>
                <Button variant="outline-primary" className='mb-2' onClick={handleGoogleSignIn} >
                    {loading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        <> <FaGoogle /> <span>Login with Google</span> </>
                    )} </Button>
                <Button variant="outline-secondary" onClick={handleGithubSignIn}> <FaGithub /> Login with Github</Button>
                {loading && (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                )}
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