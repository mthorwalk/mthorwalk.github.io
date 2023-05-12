import Card from 'react-bootstrap/Card';

function NetsmartCard() {
  return (
    <Card>
      <Card.Header>Internship</Card.Header>
      <Card.Img variant='left' src={require('../pages/images/netsmart.png')} rounded width={200} style={{marginLeft:10 + 'px'}} />
      <Card.Body>
        <Card.Title>Netsmart</Card.Title>
        <Card.Text>
          During the summer of 2022, I was a Software Engineer Intern at Netsmart, a healthcare technology company.
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
}

export default NetsmartCard;