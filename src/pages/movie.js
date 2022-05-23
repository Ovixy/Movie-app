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
import { Routes, Route, Link, useParams } from "react-router-dom";

// create an array of objects with movies data containing an id, name, year, rating and image
const movies = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 2,
    name: "The Godfather",
    year: 1972,
    rating: 9.2,
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 3,
    name: "The Godfather: Part II",
    year: 1974,
    rating: 9.0,
    image:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
  },
];

function Movie() {
  let { userId } = useParams();
  const [movie, setMovie] = React.useState(null);


  useEffect(() => {
    setMovie(movies[userId - 1]);
  }, [userId]);


  return (
    <div>
      <Container>
        <h1>Movie name: {movie?.name}</h1>
      </Container>
    </div>
  );
}

export default Movie;
