import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';


function App() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SRentCarLK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#features">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.motor1.com/images/mgl/0eNnjj/s3/2024-cadillac-celestiq.jpg"
          alt="First slide"
          height="700"
        />
        <Carousel.Caption>
          <h1>Best Cars for   the Best Journey</h1>
          <p>We provide Best cars with the best prices. We are expert in car rental. Enjoy your holidays with us. We make your drive memorable. We care for your safety.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgcdn.oto.com.sg/large/gallery/exterior/1/7/toyota-hiace-commuter-front-angle-low-view-350604.jpg"
          alt="Second slide"
          height="700"
        />
        <Carousel.Caption>
          <h1>Make your trip enjoyable</h1>
          <p>We provide Best cars with the best prices. We are expert in car rental. Enjoy your holidays with us. We make your drive memorable. We care for your safety.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://global.toyota/pages/news/images/2021/04/19/1020/20210419_01_ogp.jpg"
          alt="Third slide"
          height="700"
        />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
          We provide Best cars with the best prices. We are expert in car rental. Enjoy your holidays with us. We make your drive memorable. We care for your safety.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
          </div>
</div>
    </div>
  );
}

export default App;
