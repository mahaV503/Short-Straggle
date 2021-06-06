
import {Container, Form, Jumbotron} from '../node_modules/react-bootstrap/';
import {Button} from '../node_modules/react-bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <Container>
      <Jumbotron>
        Short Straggle
     </Jumbotron>
      <Form onSubmit={this.mySubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={this.myChangeHandler}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group >
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
}

ReactDOM.render(<MyForm />, document.getElementById('from'));

