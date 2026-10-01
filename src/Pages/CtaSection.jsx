import React from 'react'
import Card from 'react-bootstrap/Card';
import Img1 from "../assets/ctasec.jpg"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CtaSection.css';

function CtaSection() {
    return (
        <div className="ctasection text-center">
            <Card className="bg-dark text-white">
                <Card.Img src={Img1} alt="Card image" />

                <Card.ImgOverlay className="d-flex align-items-center">
                    <Container>
                        <Row>

                            <Col xs={12} lg={6}>
                                <Card.Title className="fs-3">
                                    Business Solutions and Crypto Investments
                                </Card.Title>
                            </Col>

                            <Col xs={12} lg={6}>
                                <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
                                    <Button variant="success" size="lg">
                                        Discover More
                                    </Button>

                                    <Button variant="danger" size="lg">
                                        Contact Us
                                    </Button>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default CtaSection