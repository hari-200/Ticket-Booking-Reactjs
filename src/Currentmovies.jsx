import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "./Currentmovies.css";
import { Link } from "react-router-dom";

const MovieListing = () => {
  const [filters, setFilters] = useState({
    language: "All",
    genres: [],
    format: "All",
  });

  const movies = [
    {
      title: "Kanguva",
      image:
        "https://english.mathrubhumi.com/image/contentid/policy:1.9243952:1705397404/New%20Project%20(37).jpg?$p=7e4c243&f=16x10&w=852&q=0.8",
      rating: "81%",
      badge: null,
      language: "Hindi",
      genre: "Action",
      format: "2D",
    },
    {
      title: "Amaran",
      image:
        "https://images.herzindagi.info/her-zindagi-english/images/2024/10/30/article/image/amaran-1730273519615.jpg",
      rating: "94%",
      badge: null,
      language: "Tamil",
      genre: "Drama",
      format: "3D",
    },
    {
      title: "Lucky Baskhar",
      image: "https://i.ytimg.com/vi/FonKx5wvuHI/maxresdefault.jpg",
      rating: "95%",
      badge: null,
      language: "Telugu",
      genre: "Adventure",
      format: "2D",
    },
    {
      title: "Bloody Beggar",
      image:
        "https://static.toiimg.com/thumb/msid-109819903,width-1280,height-720,imgsize-39840,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      rating: "95%",
      badge: null,
      language: "Malayalam",
      genre: "Thriller",
      format: "3D",
    },
    {
      title: "Brother",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Iu69i_H_73PMnEQarSfM4xzRPkhiSxPAbQ&s",
      rating: "95%",
      badge: null,
      language: "Tamil",
      genre: "Comedy",
      format: "2D",
    },
    {
      title: "Venom",
      image: "https://m.media-amazon.com/images/I/71AX0J--IqL.jpg",
      rating: "95%",
      badge: null,
      language: "English",
      genre: "Fantasy",
      format: "2D",
    },
  ];

  
  const filteredMovies = movies.filter((movie) => {
    const matchesLanguage =
      filters.language === "All" || movie.language === filters.language;

    const matchesGenre =
      filters.genres.length === 0 || filters.genres.includes(movie.genre);

    const matchesFormat =
      filters.format === "All" || movie.format === filters.format;

    return matchesLanguage && matchesGenre && matchesFormat;
  });

  const handleFilterChange = (key, value) => {
    if (key === "genres") {
      setFilters((prev) => ({
        ...prev,
        genres: prev.genres.includes(value)
          ? prev.genres.filter((genre) => genre !== value)
          : [...prev.genres, value],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  const clearFilters = () => {
    setFilters({
      language: "All",
      genres: [],
      format: "All",
    });
  };

  return (
    <Container fluid className="mt-4 whole    ">
      <Row>
        
        <Col
          md={2}
          className="border-end m-5 p-4 left d-none d-xl-block"
        >
          <h5>Languages</h5>
          <Form>
            {["All", "English", "Telugu", "Malayalam", "Hindi", "Tamil"].map(
              (lang, index) => (
                <Form.Check key={index} type="radio" name="language">
                  <Form.Check.Input
                    defaultChecked={lang === "All"}
                    onChange={() => handleFilterChange("language", lang)}
                  />
                  <Form.Check.Label onClick={() => handleFilterChange("language", lang)}>
                    {lang}
                  </Form.Check.Label>
                </Form.Check>
              )
            )}
          </Form>

          <hr />
          <h5>Genres</h5>
          <Form>
            {["Action", "Drama", "Adventure", "Thriller", "Comedy", "Fantasy"].map(
              (genre, index) => (
                <Form.Check key={index} type="checkbox">
                  <Form.Check.Input
                    checked={filters.genres.includes(genre)}
                    onChange={() => handleFilterChange("genres", genre)}
                  />
                  <Form.Check.Label onClick={() => handleFilterChange("genres", genre)}>
                    {genre}
                  </Form.Check.Label>
                </Form.Check>
              )
            )}
          </Form>

          <hr />
          <h5>Format</h5>
          <Form>
            {["All", "2D", "3D"].map((format, index) => (
              <Form.Check key={index} type="radio" name="format">
                <Form.Check.Input
                  defaultChecked={format === "All"}
                  onChange={() => handleFilterChange("format", format)}
                />
                <Form.Check.Label onClick={() => handleFilterChange("format", format)}>
                  {format}
                </Form.Check.Label>
              </Form.Check>
            ))}
          </Form>

          <hr />
          <Button
            variant="link"
            className="text-decoration-none"
            onClick={clearFilters}
          >
            Clear all filters
          </Button>
        </Col>

        
        <Col xl={9} md={12} sm={12}className="right mt-5 mb-5   ">
          <Row className=" g-4 m-0    ">
            <h3>Movies in Coimbatore</h3>
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie, index) => (
                <Col md={6} lg={4} sm={12} xs={12} p-sm-0  key={index} className="p-0 p-md-3 "  >
                  <Card className="shadow-sm ">
                    <Link to='/do'><Card.Img variant="top" src={movie.image} className="img-fluid" /></Link>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>
                          ❤️ <strong>{movie.rating}</strong>
                        </span>
                        {movie.badge && (
                          <span className="badge bg-success">{movie.badge}</span>
                        )}
                      </div>
                      <Card.Title className="h6">{movie.title}</Card.Title>
                      <Card.Text className="text-muted">
                        U/A • {movie.language} • {movie.format}
                      </Card.Text>
                      <Button variant="primary" size="sm"  >
                        Book Ticket
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No movies match the selected filters.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieListing;










