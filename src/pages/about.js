import {
  Navbar,
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import AddMovieModal from "../modal.js";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function About() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <AddMovieModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></AddMovieModal>

      <Container className="search"></Container>
    </>
  );
}

export default About;
