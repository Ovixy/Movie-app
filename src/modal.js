import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function AddMovieModal(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      details: event.target.details.value,
      rating: event.target.rating.value,
      year: event.target.year.value,
      genre: event.target.genre.value,
      image: event.target.image.value,
    };

    // fetch post request to add movie
    fetch("http://localhost:4000/movies/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Label>Movie name</Form.Label>
                <Form.Control
                  type="search"
                  name="name"
                  placeholder="Type movie name."
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Label>Movie genre</Form.Label>
                <Form.Select name="genre">
                  <option>Select genre</option>
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="sf">SF</option>
                  <option value="drama">Drama</option>
                  <option value="animation">Animation</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="search"
                  name="image"
                  placeholder="Insert image url."
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="number"
                  name="year"
                  placeholder="Type year of the movie."
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Control
                  name="details"
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Control
                  name="rating"
                  className="movie-rating"
                  type="number"
                  placeholder="Add movie rating."
                />
              </Form.Group>
            </Col>
          </Row>
          <Button onClick={props.onHide} type="submit">
            Submit movie
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddMovieModal;
