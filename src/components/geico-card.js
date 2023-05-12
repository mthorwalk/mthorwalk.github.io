import Card from 'react-bootstrap/Card';

function GEICOCard() {
  return (
    <Card>
      <Card.Header>Post-Grad</Card.Header>
      <Card.Img variant='left' src={require('../pages/images/geico.png')} rounded width={200} style={{marginTop:20 + 'px', marginLeft:20 + 'px'}} />
      <Card.Body>
        <Card.Title>GEICO</Card.Title>
        <Card.Text>
          After my graduation from college in may of 2023, I will start full-time as a software engineer with GEICO.
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
}

export default GEICOCard;