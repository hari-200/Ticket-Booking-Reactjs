import React from "react";
import "./Catogery.css";
import { Container } from "react-bootstrap";

const languages = [
  "Hindi Movies",
  "English Movies",
  "Telugu Movies",
  "Tamil Movies",
  "Kannada Movies",
  "Bengali Movies",
  "Bhojpuri Movies",
  "Malayalam Movies",
];

const genres = [
  "Comedy Movies",
  "Action Movies",
  "Drama Movies",
  "Romance Movies",
  "Horror Movies",
  "Thriller Movies",
  "Crime Movies",
  "Mystery Movies",
  "Biopic Movies",
];

const CategorySection = () => {
  return (
    <Container>
    <div className="category-section container my-4">
      
      <h5 className="mb-3">Explore Latest Movies in Coimbatore by Language</h5>
      <div className=" d-flex align-items-center">
        {languages.map((language, index) => (
          <div key={index} className="chip">
            {language}
          </div>
        ))}
      </div>

      
      <h5 className="mt-4 mb-3">Explore Latest Movies in Coimbatore by Genre</h5>
      <div className="scroll-container d-flex align-items-center">
        {genres.map((genre, index) => (
          <div key={index} className="chip">
            {genre}
          </div>
        ))}
     
      </div>
      
    </div>
    </Container>
  );
};

export default CategorySection;
