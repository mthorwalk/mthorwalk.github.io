import Card from 'react-bootstrap/Card';

function CollegeCard() {
  return (
    <Card>
      <Card.Header>College</Card.Header>
      <Card.Img variant='left' src={require('../pages/images/nebraska.png')} rounded width={200} style={{marginTop:20 + 'px', marginLeft:-10 + 'px'}} />
      <Card.Body>
        <Card.Title>University of Nebraska - Lincoln</Card.Title>
        <Card.Text>
          I graduate in 2023 from University of Nebraska - Lincoln with a major in Computer Science
          and a minor in business.
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
}

export default CollegeCard;