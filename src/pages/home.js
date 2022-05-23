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
import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <AddMovieModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></AddMovieModal>

      <Container className="search">
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Button
                  className="btn-modal"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  Add Movie
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
      <br></br>
      <Container className="filter">
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Select>
                  <option>Filter genre</option>
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="sf">SF</option>
                  <option value="drama">Drama</option>
                  <option value="animation">Animation</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
      <Container className="filter">
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Select>
                  <option>Sort by views</option>
                  <option value="asc">Ascendent</option>
                  <option value="desc">Descendent</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
      <Container className="table">
        <Row>
          {movies.map(function (d, idx) {
            return (
              <Col key={d.id} md="6" lg="3">
                <Card>
                  <Card.Img
                    variant="top"
                    src={d.image}
                  />
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Text>
                     {d.details}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Rating: {d.rating}</ListGroupItem>
                      <ListGroupItem>{d.genre}</ListGroupItem>
                    </ListGroup>
                    <Card.Footer>
                      <Row className="action-buttons">
                        <Col>
                          <Button
                            className="search-submit"
                            variant="primary"
                            type="submit"
                          >
                            Edit
                          </Button>
                        </Col>
                        <Col style={{ textAlign: "right" }}>
                          <Button
                            className="search-submit"
                            variant="danger"
                            type="submit"
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
