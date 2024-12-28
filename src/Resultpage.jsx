import React, { useState } from 'react';
import { Tabs, Tab, ListGroup, Image, FormControl, InputGroup, Button, ButtonGroup, Row, Col, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import './Resultpage.css';

const movies = [
  { title: 'Kanguva', languages: 'Tamil, Telugu', imgSrc: 'https://assetscdn1.paytm.com/images/cinema/Kanguva-0285e160-9fff-11ef-b248-517fddcb4be4.jpg?format=webp' },
  { title: 'Amaran', languages: 'Tamil, Telugu', imgSrc: 'https://assetscdn1.paytm.com/images/cinema/Amaran-608x800-3b60ca10-4594-11ef-83ec-5d141d381675.jpg?format=webp' },
  { title: 'Lucky Baskhar', languages: 'Tamil, Telugu', imgSrc: 'https://assetscdn1.paytm.com/images/cinema/164851-aa6a8550-4296-11ef-99b5-d35223c98590.jpg?format=webp' },
  { title: 'Bloody Beggar', languages: 'Tamil', imgSrc: 'https://assetscdn1.paytm.com/images/cinema/bloody-beggar-1ed33680-9aa3-11ef-a547-a3a8f57842ad.jpg?format=webp' },
  { title: 'Brother', languages: 'Tamil', imgSrc: 'https://assetscdn1.paytm.com/images/cinema/brother-fc6bd700-9aa2-11ef-b348-97a17ee34f33.jpg?format=webp' },
  { title: 'KA (2024)', languages: 'Telugu', imgSrc: 'https://assetscdn1.paytm.com/images/cinema/KA--608x800-57fbd7f0-9364-11ef-bae8-d9c3d5234b5b.jpg?format=webp' },
];

const theatresData = {
  Chennai: [
    'Sangam Cinemas 4K RGB Laser Dolby Atmos, Kilpauk, Chennai',
    'Kamala Cinemas, Vadapalani, Chennai',
    'Devi Cineplex, Anna Salai, Chennai',
    'Ega Cinemas (RGB LASER, DOLBY AUDIO, COUPLE SOFA), Kilpauk, Chennai',
    'Casino Cinemas 4K RGB Laser 3D A/C Dolby 7.1.2, Mount Road, Chennai',
    'Woodlands Complex, Royapettah, Chennai',
    'Udhayam Complex, Jafferkhanpet, Chennai',
    'Kasi RGB Laser Dolby Atmos, Ashok Nagar, Chennai',
    'Rakki Cinemas 4K Dolby Atmos, Ambattur, Chennai',
    'Velco Cinemas, Anakaputhur, Chennai',
    'KK Cinemas, Minjur, Chennai',
    'Cinepolis BSR Mall OMR, Thoraipakkam, Chennai',
  ],
  Uthukottai: [
    'Sree Lakshmi Cinemas A/C 2K Dolby Atmos, Thiruninravur, Uthukottai',
    'Amirtham Cinema MSM A/C 3D 7.1 Surround, Tiruvottiyur, Uthukottai',
    'AVK Cinemas A/C 2K 3D, Mappedu, Uthukottai',
  ],
  Thiruvalangadu: [
    'MM Theatre M Cinemas 2K, Tondiarpet, Thiruvalangadu',
    'SRK Cinemas Barco 4K Laser Triplebeam 3D, Thiruvalangadu',
    'INOX National, Virugambakkam, Thiruvalangadu',
    'INOX Chennai Citi Centre, Mylapore, Thiruvalangadu',
    'INOX The Marina Mall OMR, Egatoor, Thiruvalangadu',
  ],
};

const SearchResultsPage = () => {
  const [key, setKey] = useState('movies');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const navigate = useNavigate(); // Initialize navigate

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const theatresToDisplay =
    selectedLocation === 'All'
      ? Object.values(theatresData).flat()
      : theatresData[selectedLocation] || [];

  return (
    <Container>
    <div className="search-results-page  tree">
      
   
      <Container>

      
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <FormControl
          placeholder="Search Movie or a Theatre"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
          
         
      </InputGroup>
       
      </Container>

      
      <Tabs
        id="search-results-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        
        <Tab eventKey="movies" title="Movies">
          <ListGroup variant="flush">
            {filteredMovies.map((movie, index) => (
              <ListGroup.Item key={index} className="d-flex align-items-center border-bottom">
                <Image src={movie.imgSrc} rounded width="50" height="75" className="me-3" />
                <div>
                  <h5 className="mb-1">{movie.title}</h5>
                  <small className="text-muted">{movie.languages}</small>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Tab>
        
        
        <Tab eventKey="theatres" title="Theatres">
          <div className="location-buttons mb-3">
            <ButtonGroup>
              <Button
                variant={selectedLocation === 'All' ? 'primary' : 'outline-primary'}
                onClick={() => handleLocationChange('All')}
              >
                All Locations
              </Button>
              {Object.keys(theatresData).map((location) => (
                <Button
                  key={location}
                  variant={location === selectedLocation ? 'primary' : 'outline-primary'}
                  onClick={() => handleLocationChange(location)}
                >
                  {location}
                </Button>
              ))}
            </ButtonGroup>
          </div>
          
          <Row>
            {theatresToDisplay.map((theatre, index) => (
              <Col xs={12} sm={6} md={4} key={index} className="mb-3">
                <ListGroup.Item className="border-bottom">{theatre}</ListGroup.Item>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </div>
    </Container>
  );
};

export default SearchResultsPage;










