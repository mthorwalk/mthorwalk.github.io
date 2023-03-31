import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/default.css'
import Figure from 'react-bootstrap/Figure'
import './css/about.css'


function About() {
  return (

    <Container>
      <Row class="mb-3 mt-3">
          <Col className='h1'>
            About Me
          </Col>
      </Row>
      <Row class="mb-3">
        <Col>
        <Figure>
      <Figure.Image
          src={require('./images/headshot-mw.jpg')} rounded width={200}/>
          <Figure.Caption>
            My name is Michael Walker. I am currently finishing my Computer Science degree at University of Nebraska - Lincoln 
            and I am pursuing a career in software engineering after graduation.
          </Figure.Caption>
        </Figure>
        </Col>
        <Col >
            
        </Col>
      </Row>
      <Row class="mb-3">
      </Row>
    </Container>
  );
}

export default About;