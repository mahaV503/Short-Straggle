
import {Container, Form, Jumbotron} from '../node_modules/react-bootstrap/';
import {Button} from '../node_modules/react-bootstrap';

function App() {
  return (
    <Container>
    <Jumbotron>
      Short Straggle
   </Jumbotron>
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>index Value</Form.Label>
    <Form.Control type="text" placeholder="Enter index" />
    <Form.Text className="text-muted">
      Like NIFTY BANK, NIFTY fullforms
    </Form.Text>
  </Form.Group>

  <Form.Group >
  <Form.Label>PE</Form.Label>
    <Form.Control type="number" placeholder="PE" />
  </Form.Group>
  <Form.Group >
  <Form.Label>CE</Form.Label>
    <Form.Control type="number" placeholder="CE" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    
    </Container>
  );
}

export default App;
