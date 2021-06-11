import React from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import "../styles/pages/register.css"


const Register = () => {
    return (
        <Container className="mt-5">
        <Row className="align-items-center justify-content-center">
            <Col lg={4} md={6} sm={12} className="text-center mt-5 shadow p-3 mb-5 bg-white">
                <div className="pb-3 mx-auto" >
                    <h1 my-auto>Register</h1><br />
                    <IconContext.Provider value={{size:"80px", color:"#4C6A6e"}}>
                        <FaUserCircle />
                    </IconContext.Provider>
                </div>
                <Form>
                <Form.Group  controlId="userName">
                <Form.Control type="username" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="lastName">
                <Form.Control type="username" placeholder="Full Name" />
                </Form.Group>

                <Form.Group controlId="userName">
                <Form.Control type="username" placeholder="Last Name" />
                </Form.Group>

                <Form.Group controlId="emailAdd">
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="passWord">
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary btn-block" type="submit">
                    Register
                </Button>

                <div>
                    <small>already have an account?</small> 
                    <a href="/"><small className="login ml-2">Login</small></a>
                </div>
                </Form>
            </Col>
        </Row>
      </Container>
    )
}

export default Register
