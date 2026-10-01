import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from "../assets/client-02.jpg"
import './Hero.css';
function Hero() {
    return (
        <div id="home" className="hero-section">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        src={Img1}
                        alt=""
                        className="w-100 hero-img"
                    />
                    <Carousel.Caption className="top-50 start-50 translate-middle w-100">
                        <h3 className="fw-bold display-4 px-3">
                            Get <em className='text-danger'>ready</em> for your businesses & upgrade <em className='text-danger'>all aspects</em>
                        </h3>
                        <p>
                            Mexant HTML5 Template is provided for free of charge. This layout is based on React Boostrap 5 CSS framework.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        src={Img1}
                        alt=""
                        className="w-100 hero-img"
                    />
                    <Carousel.Caption className="top-50 start-50 translate-middle w-100">
                        <h3 className="fw-bold display-4 px-3">
                            Get <em className='text-danger'>ready</em> for your business & upgrade <em className='text-danger'>all aspects</em>
                        </h3>
                        <p>
                            Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={Img1}
                        alt=""
                        className="w-100 hero-img"
                    />
                    <Carousel.Caption className="top-50 start-50 translate-middle w-100">
                        <h3 className="fw-bold display-4 px-3">
                            Get <em className='text-danger'>ready</em> for your business & upgrade <em className='text-danger'>all aspects</em>
                        </h3>
                        <p>
                            Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero
