import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from "./images/dog.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Sap from "./images/dog8.jpg";
import Gaurav from "./images/dog 6.jpg";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Rahul from "./images/dog3.jpeg";
import Jagat from "./images/dog2.jpg";
import Ankit from "./images/dog.jpg";
import Button from 'react-bootstrap/Card';
import Neeraj from "./images/dog8.jpg";

const Rohit = ()=>{
    return(
      <>
<Navbar bg="primary" expand="lg">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"><b>Home</b></Nav.Link>
        <Nav.Link href="#link"><b>Abought</b></Nav.Link>
        <Nav.Link href="#link"><b>Meet the team</b></Nav.Link>
        <Nav.Link href="#link"><b>Contact us</b></Nav.Link>
        <Nav.Link href="#link"><b>Services</b></Nav.Link>
        <Nav.Link href="#link"><b>Special offer</b></Nav.Link>
        <Nav.Link href="#link"><b>Set relation</b></Nav.Link>
        <Nav.Link href="#link"><b>Set advice</b></Nav.Link>
        <Nav.Link href="#link"><b>Boarding</b></Nav.Link>
        <Nav.Link href="#link"><b>Take a tour</b></Nav.Link>
        <Nav.Link href="#link"><b>Employment</b></Nav.Link>
        <Nav.Link href="#link"><b>Gaurav</b></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Sap}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Dr. Priyank Vyas Pet Hospital & Diagnostic Centre dog clinic and veterinary services</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={Gaurav}
      alt="Second slide"
    />
    <Carousel.Caption>
      
      <h3>
Dr. Priyank Vyas Pet Hospital & Diagnostic Centre dog clinic and veterinary services</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>First slide
Dr. Priyank Vyas Pet Hospital & Diagnostic Centre dog clinic and veterinary services</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h1>Our Clinick</h1>

Dr. Priyank Vya Pet Hospital & Diagnostic Centre dog clinic and <br/>veterinary services has its place in the list of Veterinary Clinics.<br/> Organization has an average score of 4 by NiceLocal visitors<br/> and concludes its business by the following address:<br/> Dehradun, Uttarakhand 248001, opposite Sakti Medicos, Subhash Nagar,<br/> Tilak Marg. GPS coordinates are: longitude — 77°59'28.99''E (77.991387),<br/> latitude — 30°16'38.15''N (30.277264).
<CardGroup>
  <Card>
    <Card.Img variant="top" src={ Ankit} />
    <Card.Body>
      <Card.Title><button>Pet of month</button></Card.Title>
      <Card.Text>
      It was with a very heavy heart that Lazy’s owner had to relocate and could not take her with him. True to her name, she is very easy-going and loves to lounge around all day. She likes atte

Read More..
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Jagat} />
    <Card.Body>
      <Card.Title><button>Hot deals</button></Card.Title>
      <Card.Text>
      It was with a very heavy herue to her name, she is very easy-going and loves to lounge around all day. She likes atte

Read More..{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Rahul} />
    <Card.Body>
      <Card.Title><button>Video of month</button></Card.Title>
      <Card.Text>
      It was with a very heavy heart that Lazy’s owner had to relocate and could not take her with him. True to her name, she is very easy-going and loves to lounge around all day. She likes atte

Read More..
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Neeraj} />
  <Card.Body>
    <Card.Title><h1>Dr priyanak vias</h1></Card.Title>
    <Card.Text>
    Assistant Professor at Graphic Era Deemed to be University.
     It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged.
       It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages,Lorem Ipsum is simply
         dummy text of the printing and typesetting industry. Lorem 
         Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknow type and scras
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<center>
<h1>Achivement and work experience</h1>
</center>


      </>


    )
}
export default Rohit;
