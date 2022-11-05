import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Footer from '../components/Footer';


const Contact = () => {
  return (
    <Container>
      <div className='contact'>
        <h2>Contact Me</h2>
        <p>Hi there,contact me to ask me about anything you have in mind.</p>
      </div>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={6}>
            <Form.Label>First name:</Form.Label>
            <Form.Control type="firstname" placeholder="Enter your first name" id='first_name' />
          </Col>
          <Col sm={6}>
            <Form.Label >Last name:</Form.Label>
            <Form.Control type="lastname" placeholder="Enter your last name" id='last_name' />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id='email' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} id='message' />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="You agree to prviding your data to Oluwafemi who may contact you." />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Block level button
          </Button>
        </div>
      </Form>
      <Footer />
    </Container>
  );
};

export default Contact;