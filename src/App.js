import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { Col, Container, Form, Navbar, Row, Button,Card } from "react-bootstrap";
import Movie from "./pages/movie";
import TopNavigation from "./components/topNavigation.js";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <TopNavigation></TopNavigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/movie/:userId" element={<Movie />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>

      <Card className="text-center">
    <Card.Body>
      <Card.Title>Made by</Card.Title>
      <Card.Text>Axentioi Ovidiu Vasile</Card.Text>
      <Button variant="primary" className="footer-button" href="https://www.linkedin.com/in/ovidiu-axentioi-852297189/">
        Linkedin
      </Button>
      <Button variant="primary" className="footer-button" href="https://github.com/Ovixy">
        Github
      </Button>
    </Card.Body>
  </Card>  
    </div>
  );
}

export default App;
