import { useState } from "react";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css';
import Img2 from "../assets/calculator-image1.png"

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ""
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();
        if (validate()) {
            setFormData({
                name: "",
                email: "",
                password: "",
                cpassword: ""
            });
            alert("Registration successful");
        }
    };

    return (

        <div className="calculator container-fluid min-vh-100 d-flex align-items-center justify-content-center">
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <div className="text-white p-3 rounded"><img className="d-none d-md-block" src={Img2} alt="" /></div>
                </Col>
                <Col>
                    <div className="text-white p-3 rounded"> <div className="card bg-transparent  shadow-none border-0 shadow-lg p-4 rounded-4" style={{ maxWidth: '448px', width: '100%' }}>
                        <div className="card-body ">

                            <h3 className="text-center text-primary fw-bold mb-4 fs-3">
                                Your Freedom

                            </h3>
                            <h1 className="text-center text-danger fw-bold mb-4 fs-1">
                                Get a Financial Plan
                            </h1>

                            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">

                                <div className="">
                                    <label htmlFor="name" className="text-white form-label fw-semibold text-secondary small mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className={`form-control py-2 px-3 ${errors.name ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.name}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-white form-label fw-semibold text-secondary small mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className={`form-control py-2 px-3 ${errors.email ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="text-white form-label fw-semibold text-secondary small mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        className={`form-control bg-grey py-2 px-3 ${errors.password ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.password}
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-danger w-100 py-2.5 fw-bold mt-2">
                                    Register
                                </button>

                            </form>

                        </div>
                    </div></div>
                </Col>
            </Row>


        </div>



    );
}

export default Contact;