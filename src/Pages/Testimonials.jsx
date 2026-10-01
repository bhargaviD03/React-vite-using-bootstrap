import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img1 from "../assets/testimonials-01.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Testimonials() {
    return (
        <div className='testimonials p-4'>
            <h3 className="text-center text-primary fw-bold mb-4 fs-3">
                Testimonials

            </h3>
            <h1 className="text-center text-danger fw-bold mb-4 fs-1">
                What They Say
            </h1>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Img1} alt="Card graphic layout" />
                            <Card.Body>
                                <Card.Title>Andrew Garfield</Card.Title>
                                <Card.Text>
                                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col> <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img1} alt="Card graphic layout" />
                        <Card.Body>
                            <Card.Title>Andrew Garfield</Card.Title>
                            <Card.Text>
                                “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Img1} alt="Card graphic layout" />
                            <Card.Body>
                                <Card.Title>Andrew Garfield</Card.Title>
                                <Card.Text>
                                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials