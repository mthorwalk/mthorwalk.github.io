import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/home.css'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const [questions, setQuestions] = useState('');
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
    
        console.log("Information provided: Name: " + name + ", Email: " + email + ", Org: " + organization);

        emailjs.sendForm('contact-service', 'contact-form', form.current, 'DAp5kjNPT-8LIEK56')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
      };

    return (
    <Container>
        <Row class="mb-3 mt-3">
            <Col className='h5'>
                Please fill out this form to get in touch!
            </Col>
        </Row>
        <Form ref={form} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name*</Form.Label>
                <Form.Control type="text" value={name} required="true" placeholder="Enter name" 
                              onChange={(event) => setName(event.target.value)} name="user_name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" value={email} required="true" placeholder="Enter email"
                              onChange={(event) => setEmail(event.target.value)} name="user_email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="organization">
                <Form.Label>Organization</Form.Label>
                <Form.Control type="text" value={organization} placeholder="Enter organization"
                              onChange={(event) => setOrganization(event.target.value)} name="user_org" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="questions">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" value={questions} placeholder="Enter message here"
                              onChange={(event) => setQuestions(event.target.value)} name="message" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <Row class="mt-3">* denotes required field</Row>
    </Container>
    );
  }
  
  export default Contact;