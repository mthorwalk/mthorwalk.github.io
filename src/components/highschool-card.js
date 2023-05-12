import Card from 'react-bootstrap/Card';

function HighSchoolCard() {
  return (
    <Card>
      <Card.Header>High School</Card.Header>
      <Card.Img variant='left' src={require('../pages/images/west-aurora-hs.png')} rounded width={150} style={{marginTop:20 + 'px', marginLeft:20 + 'px'}} />
      <Card.Body>
        <Card.Title>West Aurora High School</Card.Title>
        <Card.Text>
          I graduated in 2018 from West Aurora High School in Aurora, IL.
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
}

export default HighSchoolCard;