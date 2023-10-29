import React from 'react'
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hook/useTitle';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const redirectHome = location.state?.from?.pathname || '/';
    useTitle('Login');

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(redirectHome, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }



    return (
        <Container className='w-50 mt-4'>
            <h3 className='text-center mb-4'>Please Login</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Form.Group className='mt-2'>
                    <Form.Text className="text-success">
                        Don't have an account? <Link to={'/register'}>Register Now!</Link>
                    </Form.Text>
                </Form.Group>

                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    )
}

export default Login;