import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import "./Upcommingmovies.css";

const Upcomming = () => {
  const [filters, setFilters] = useState({
    language: [],
    genres: [],
  });

  const movies = [
    {
      title: "Jolly O Gymkhana",
      image:
        "https://img.youtube.com/vi/WMxcJFRnGrw/maxresdefault.jpg?imwidth=686",
      releaseDate: "22 Nov 24",
      language: "Malayalam",
      genres: ["Comedy", "Family", "Suspense"],
    },
    {
      title: "Sorgavaasal",
      image:
        "https://i.ytimg.com/vi/MJtRce1O3T4/maxresdefault.jpg",
      releaseDate: "29 Nov 24",
      language: "Kannada",
      genres: ["Action", "Crime", "Drama"],
    },
    {
      title: "Zebra",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoPmuySZ-MO-m6PLOVVvZpShFFM5_Gjc6-w&s",
      releaseDate: "22 Nov 24",
      language: "English",
      genres: ["Crime", "Thriller", "Action", "Comedy"],
    },
    {
        title: "Miss You",
        image:
          "https://i.ytimg.com/vi/y4f8q7t22SQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNy-ywqEoAAfdlk30AkjBzOUl-sA",
        releaseDate: "29 Nov 24",
        language: "Telugu",
        genres: ["Comedy", "Suspense"],
      },
      {
        title: "Mechanic Rocky",
        image:
          "https://assets-in.bmscdn.com/discovery-catalog/events/et00405685-tcvcfdgknv-landscape.jpg",
        releaseDate: "22 Nov 24",
        language: "Hindi",
        genres: ["Action", "Comedy", "Drama"],
      },
      {
        title: "Parari",
        image:
          "https://m.timesofindia.com/photo/112869058/size-190675/112869058.jpg",
        releaseDate: "22 Nov 24",
        language: "Tamil",
        genres: ["Drama", "Comedy"],
      }
  ];

  
  const filteredMovies = movies.filter((movie) => {
    const matchesLanguage =
      filters.language.length === 0 ||
      filters.language.includes(movie.language);
    const matchesGenres =
      filters.genres.length === 0 ||
      filters.genres.some((genre) => movie.genres.includes(genre));
    return matchesLanguage && matchesGenres;
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  return (
    <Container fluid className="mt-4 get ">
      <Row>
        {/* Filters Section */}
        <Col md={2} className="top m-5 ">
          <h5>Languages</h5>
          <Form>
            {["English", "Hindi", "Telugu", "Tamil", "Kannada", "Malayalam"].map((lang, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={lang}
                checked={filters.language.includes(lang)}
                onChange={() => handleFilterChange("language", lang)}
              />
            ))}
          </Form>

          <h5 className="mt-4">Genres</h5>
          <Form>
            {["Action", "Comedy", "Drama", "Family", "Suspense", "Thriller", "Crime"].map((genre, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={genre}
                checked={filters.genres.includes(genre)}
                onChange={() => handleFilterChange("genres", genre)}
              />
            ))}
          </Form>

          <button
            className="clear-filters mt-4"
            onClick={() => setFilters({ language: [], genres: [] })}
          >
            Clear all filters
          </button>
        </Col>

        
        <Col md={9} className="bottom m-2 mb-5 mt-5 ">
          <h3 className="mb-4">Upcoming Movies in Coimbatore</h3>
          <Row className="g-4 ">
            {filteredMovies.map((movie, index) => (
              <Col md={4} key={index}>
                <Card>
                  <Card.Img variant="top" src={movie.image} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                      <strong>Release Date:</strong> {movie.releaseDate}
                    </Card.Text>
                    <Card.Text>
                      <strong>Language:</strong> {movie.language}
                    </Card.Text>
                    <Card.Text>
                      <strong>Genres:</strong> {movie.genres.join(", ")}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Upcomming;
