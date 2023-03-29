import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Experience() {
    return (
      <Container>
        <Row>
            <Col className='h1'>
                Experience
            </Col>
        </Row>
    <Tabs
      defaultActiveKey="education"
      id="experience-tabs"
      className="mb-3"
    >
      <Tab eventKey="education" title="Education">
        Content about my educational history will go here.
      </Tab>
      <Tab eventKey="professional" title="Professional">
        Content about my professional history will go here
      </Tab>
      <Tab eventKey="resume" title="Resume">
        This will be a picture of my resume, along with a download button (pdf).
      </Tab>
    </Tabs>
    </Container>
    );
  }
  
  export default Experience;