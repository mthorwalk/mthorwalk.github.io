import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HighSchoolCard from '../components/highschool-card';
import CollegeCard from '../components/college-card';
import NetsmartCard from '../components/netsmart-card';
import GEICOCard from '../components/geico-card';

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
        <HighSchoolCard></HighSchoolCard>
        <CollegeCard></CollegeCard>
      </Tab>
      <Tab eventKey="professional" title="Professional">
        <NetsmartCard></NetsmartCard>
        <GEICOCard></GEICOCard>
      </Tab>
      <Tab eventKey="resume" title="Resume">
        <embed src="https://resume-michael-walker.tiiny.site" title="resume" width="100%" height="1000px"></embed>
      </Tab>
    </Tabs>
    </Container>
    );
  }
  
  export default Experience;