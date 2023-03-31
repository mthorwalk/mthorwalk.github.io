import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/home.css'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const [questions, setQuestions] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        console.log("Information provided: Name: " + name + ", Email: " + email + ", Org: " + organization);
      };

    return (
    <Container>
        <Row class="mb-3 mt-3">
            <Col className='h5'>
                Please fill out this form to get in touch!
            </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name*</Form.Label>
                <Form.Control type="text" value={name} required="true" placeholder="Enter name" 
                              onChange={(event) => setName(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" value={email} required="true" placeholder="Enter email"
                              onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="organization">
                <Form.Label>Organization</Form.Label>
                <Form.Control type="text" value={organization} placeholder="Enter organization"
                              onChange={(event) => setOrganization(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="questions">
                <Form.Label>Questions</Form.Label>
                <Form.Control as="textarea" value={questions} placeholder="Enter questions"
                              onChange={(event) => setQuestions(event.target.value)} />
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