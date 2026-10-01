import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import './AboutUs.css';


function AboutUs() {

    return (
        <div className='aboutus p-4'>
            <Container>
                <h3 className="text-center text-primary fw-bold mb-4 fs-3">
                    About Us

                </h3>
                <h1 className="text-center text-danger fw-bold mb-4 fs-1">
                    Know Us Better
                </h1>
                <Row>
                    <Col xs={12} lg={7}>

                        <Nav
                            variant="pills"
                            defaultActiveKey="/home"
                            className="flex-column flex-sm-row"
                        >
                            <Nav.Item>
                                <Nav.Link href="/home">
                                    Web Design
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link-1">
                                    Graphics
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link-2">
                                    Web Coding
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className="table-responsive">
                            <Table className="mb-0">
                                <thead>
                                    <tr>
                                        <th>Project</th>
                                        <th>Title</th>
                                        <th>Budget</th>
                                        <th>Deadline</th>
                                        <th>Client</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Graphics Redesign</td>
                                        <td>$500 to $800</td>
                                        <td>2022</td>
                                        <td>Nov 24</td>
                                        <td>Media One</td>
                                    </tr>

                                    <tr>
                                        <td>New Artworks</td>
                                        <td>$500 to $800</td>
                                        <td>2022</td>
                                        <td>Nov 24</td>
                                        <td>Media One</td>
                                    </tr>

                                    <tr>
                                        <td>New Artworks</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>@mdo</td>
                                    </tr>

                                    <tr>
                                        <td>Complex Arts</td>
                                        <td>$500 to $800</td>
                                        <td>2022</td>
                                        <td>Nov 24</td>
                                        <td>Media One</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                    </Col>
                    <Col xs={12} lg={5}>



                        <Stack gap={3}>
                            <div className="p-2">Please tell us about your idea and how you want it to be</div>
                            <div className="p-2">You are allowed to use this template for your websites. You are NOT allowed to redistribute the template ZIP file on any other template websites.
                                Thank you for downloading and using our templates. Please tell your friends about our website.</div>
                            <div className="p-2"> <Button variant="success" size="lg" >
                                Discover More
                            </Button></div>
                        </Stack>

                    </Col>
                </Row>

            </Container>
        </div >
    )
}

export default AboutUs