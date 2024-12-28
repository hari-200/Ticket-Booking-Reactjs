import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./Comming.css";
import { Link } from "react-router-dom";

const upcomingMovies = [
  {
    title: "Pushpa 2",
    releaseDate: "22 Nov 24",
    language: "Tamil",
    genres: "Comedy, Family, Suspense",
    image: "https://thelucknowtribune.org/wp-content/uploads/2024/06/P2.jpg",
  },
  {
    title: "Sorgavasal",
    releaseDate: "29 Nov 24",
    language: "Tamil",
    genres: "Action, Crime, Drama",
    image: "https://i.ytimg.com/vi/MJtRce1O3T4/maxresdefault.jpg",
  },
  {
    title: "Zebra",
    releaseDate: "22 Nov 24",
    language: "Telugu",
    genres: "Crime, Thriller, Action, Comedy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoPmuySZ-MO-m6PLOVVvZpShFFM5_Gjc6-w&s",
  },
  {
    title: "Miss You",
    releaseDate: "29 Nov 24",
    language: "Tamil",
    genres: "Comedy, Romance",
    image: "https://i.ytimg.com/vi/y4f8q7t22SQ/hq720.jpg",
  },
];

const Movies = () => {
  return (
    <div className="m-5 p-4 cart ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Upcoming Movies</h5>
        <Button variant="link" className="text-primary p-0 ">
          View All
        </Button>
      </div>
      <Row>
        {upcomingMovies.map((movie, index) => (
          <Col key={index} lg={3} md={12} sm={12} xs={12}  className="mb-4 p-0 p-md-3 ">
            <Card className="h-100 shadow-sm">
              
              <Link to='/did'><Card.Img
                variant="top"
                src={movie.image}
                alt={movie.title}
                className="img-fluid"
              /></Link>
              <Card.Body>
                <Card.Text className="text-muted mb-1">
                  Release Date: <span className="fw-bold">{movie.releaseDate}</span>
                </Card.Text>
                <Card.Title className="h6 mb-1">{movie.title}</Card.Title>
                <Card.Text className="text-muted">
                  {movie.language} <br />
                  {movie.genres}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Movies;





