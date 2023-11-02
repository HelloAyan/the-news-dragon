import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { Button, Container, Form, Modal, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hook/useTitle';

const Login = () => {

    // First written code (owner me)
    // const { signIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    // const redirectHome = location.state?.from?.pathname || '/';
    // useTitle('Login');

    // const handleSignIn = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const password = form.password.value;
    //     const email = form.email.value;
    //     console.log(email, password);

    //     signIn(email, password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             navigate(redirectHome, { replace: true });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }




    // tried to do real-time validation (help from documentation)
    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state
    const navigate = useNavigate();
    const location = useLocation();
    const redirectHome = location.state?.from?.pathname || '/';
    useTitle('Login');

    const handleSignIn = async (event) => {
        event.preventDefault();
        // Reset errors and show loading spinner
        setEmailError('');
        setPasswordError('');
        setLoading(true);

        // Validate the email and password fields
        if (!isValidEmail(email)) {
            setEmailError('Please insert a valid email address');
            setLoading(false); // Hide loading spinner
            return;
        }

        if (!isValidPassword(password)) {
            setPasswordError('Please write your correct password; it should be 6 digits or more');
            setLoading(false); // Hide loading spinner
            return;
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(redirectHome, { replace: true });
            })
            .catch(error => {
                console.log(error);
                showErrorModal('Email or password is not correct. Please try again.');
            })
            .finally(() => {
                setLoading(false); // Hide loading spinner after response
            });
    }

    useEffect(() => {
        if (showError) {
            setLoading(false); // Hide loading spinner when showing the error modal
        }
    }, [showError]);

    const isValidEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    }

    const isValidPassword = (password) => {
        return password.length >= 6;
    }

    const showErrorModal = (message) => {
        setErrorMessage(message);
        setShowError(true);
    }


    return (
        // <Container className='w-50 mt-4'>
        //     <h3 className='text-center mb-4'>Please Login</h3>
        //     <Form onSubmit={handleSignIn}>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control type="email" placeholder="Enter email" name='email' required />

        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" placeholder="Password" name='password' required />
        //         </Form.Group>

        //         <Button variant="primary" type="submit">
        //             Login
        //         </Button>

        //         <Form.Group className='mt-2'>
        //             <Form.Text className="text-success">
        //                 Don't have an account? <Link to={'/register'}>Register Now!</Link>
        //             </Form.Text>
        //         </Form.Group>

        //         <Form.Text className="text-success">

        //         </Form.Text>
        //         <Form.Text className="text-danger">

        //         </Form.Text>
        //     </Form>
        // </Container>

        <Container className='w-50 mt-4'>
            <h3 className='text-center mb-4'>Please Login</h3>
            <Form noValidate onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) setEmailError('');
                        }}
                        required
                    />
                    <Form.Text className="text-danger">{emailError}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (passwordError) setPasswordError('');
                        }}
                        required
                    />
                    <Form.Text className="text-danger">{passwordError}</Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    {loading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        'Login'
                    )}
                </Button>

                <Form.Group className='mt-2'>
                    <Form.Text className="text-success">
                        Don't have an account? <Link to={'/register'}>Register Now!</Link>
                    </Form.Text>
                </Form.Group>
            </Form>

            <Modal show={showError} onHide={() => setShowError(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{errorMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowError(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Login;