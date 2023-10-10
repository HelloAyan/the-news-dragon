import React from 'react'
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [accept, setAccept] = useState(false);
    const [register, setRegister] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        if (register) {
            return;
        }

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const accept = form.accept.value;
        console.log(name, photo, email, password, accept);



        createUser(email, password)
            .then(result => {
                setRegister(true);
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                navigate('/login');
                console.log('navigate is working');
                setRegister(false);
                console.log('Registration complete.');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleChecked = event => {
        console.log(accept);
        setAccept(event.target.checked);
    }

    return (
        <Container className='w-50 mt-4'>
            <h3 className='text-center mb-4'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" name='name' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Photo URL" name='photo' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" name='email' required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleChecked}
                        type="checkbox"
                        label="Accept Terms & Condition"
                        name='accept' />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accept || register}>
                    {register ? 'Registering...' : 'Register'}
                </Button>
                <Form.Group className='mt-2'>
                    <Form.Text className="text-success">
                        Already have an account? <Link to={'/login'} >Login </Link>
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

export default Register;