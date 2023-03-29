
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image'
import './css/about.css'

function About() {
  return (
    <Container>
      <Row class = "first-row">
            <Col className='h1'>
                About Me
            </Col>
        </Row>
        <Row>
            <Col>
              My name is Michael Walker. I am currently finishing my Computer Science degree at University of Nebraska - Lincoln 
              and I am pursuing a career in software engineering after graduation.
            </Col>
        </Row>
    </Container>
  );
}

export default About;