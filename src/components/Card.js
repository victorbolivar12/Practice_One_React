import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function TextExample({element}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{element.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{element.email}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextExample;