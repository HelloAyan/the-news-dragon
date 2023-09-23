import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../../assets/1.png';
import second from '../../../../assets/2.png';
import third from '../../../../assets/3.png';

const Editorsinside = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">

            <Col >
                <Card>
                    <Card.Img variant="top" src={first} />
                    <Card.Body>
                        <Card.Title>Joe Biden announces $3 billion in Ukraine weapons aid
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Col>
            <Col >
                <Card>
                    <Card.Img variant="top" src={second} />
                    <Card.Body>
                        <Card.Title>Joe Biden announces $3 billion in Ukraine weapons aid
                        </Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 5 mins ago</small>
                    </Card.Footer>
                </Card>
            </Col>
            <Col >
                <Card>
                    <Card.Img variant="top" src={third} />
                    <Card.Body>
                        <Card.Title>Joe Biden announces $3 billion in Ukraine weapons aid
                        </Card.Title>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Col>

        </Row>
    )
}

export default Editorsinside;