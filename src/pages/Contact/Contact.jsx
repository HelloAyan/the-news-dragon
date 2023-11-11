import React from 'react'
import useTitle from '../../hook/useTitle';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    useTitle('Contact')
    return (
        <div>
            <h3 className='text-center pt-5 '>Contact Coming Soon...</h3>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div>Get in Touch</div>
                    </Col>
                    <Col lg={6}>
                        map
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Contact;