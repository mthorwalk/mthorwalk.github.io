import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/home.css'

function Home() {
    return (
    <Container>
        <Row>
            <Col className='h1'>
                Michael Walker - Software Engineer - TEST HASHROUTER
            </Col>
        </Row>
        <Row>
            <Col>
                Thank you for taking the time to review my website portfolio, I will expand on 
                this paragraph as I gain a better idea of what I want in my portfolio. I will include
                a general overview of all website content, along with my technicaly skills.
            </Col>
        </Row>
    </Container>
    );
  }
  
  export default Home;