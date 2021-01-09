import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Container, Navbar, Nav} from "react-bootstrap";
import './App.css';

import Footer from "./components/Footer";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Sankung Sillah",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "contact", path: "/contact" },
      ],
      home: {
        title: "Sankung Sillah",
        subtitle: "My portfolio",
        text: "Checkout my projects",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Me",
      },
    };
  }
  render(){

    return (
      <Router>
        <Container fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Sankung</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer/>
        </Container>
        
      </Router>
    );
  }
}

export default App;
