import React from 'react';
import './App.css';
import firebase from 'firebase';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      name: '',
    }
  }
  componentDidMount() {
    const db = firebase.database();
    const dbRef = db.ref('name');
    // const fs = firebase.firestore()

    dbRef.on('value', (elem) => { this.setState({ name: elem.val() }); });
    console.log(this.state.name)
  }
  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value
    })
  }
  createAcaunt = () => {
    const { email, pass } = this.state
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .catch(error => console.log(error))
    console.log(email, pass)

  }
  render() {
    console.log(this.state.name)

    return (
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};
