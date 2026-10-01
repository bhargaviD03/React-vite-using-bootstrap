import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img1 from "../../assets/client-01.png"
function Footer() {
    return (
        <div className='footer bg-dark text-white'>
            <div className="imgpart p-3">
                <Container>
                    <Row className="imgpart p-3">
                        <Col><img src={Img1} alt="" /></Col>
                        <Col><img src={Img1} alt="" /></Col>
                        <Col><img src={Img1} alt="" /></Col>
                        <Col><img src={Img1} alt="" /></Col>
                        <Col><img src={Img1} alt="" /></Col>
                    </Row>
                </Container>
            </div>
            <div className="textpart justify-content-center mt-3">
                <p className='text-center'>Copyright © 2022 Mexant Co., Ltd. All Rights Reserved.</p>
                <p className='text-center'>Designed by TemplateMo Distributed By ThemeWagon</p>
            </div>

        </div>
    )
}

export default Footer