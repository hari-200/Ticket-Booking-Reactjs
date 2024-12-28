import React, { useState } from 'react';
import { Button, Modal, FormControl, InputGroup } from 'react-bootstrap';
import { FaMapMarkerAlt, FaChevronDown, FaSearch } from 'react-icons/fa';
import './Multidropdown.css';

function LocationSelector() {
  const [show, setShow] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Select Location');
  const [query, setQuery] = useState("");

  
  const topCities = ["Chennai", "Mumbai", "Delhi", "Bangalore", "Hyderabad","Pune","Gujarath"];
  const allCities = [
    "Ahmedabad", "Pune", "Kolkata", "Surat", "Jaipur", 
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane","Ahmedabad", "Pune", "Kolkata", "Surat", "Jaipur", 
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane"
  ];

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    handleClose();
  };

  const handleSearchChange = (e) => setQuery(e.target.value);

  
  const filteredTopCities = topCities.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );
  const filteredAllCities = allCities.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      
      <Button variant="outline-secondary" onClick={handleShow} className="d-flex align-items-center custom-button no-hover-bg ms-5">
        <FaMapMarkerAlt color='black' className="me-2" />
        {selectedCity}
        <FaChevronDown className="ms-2" />
      </Button>

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Your City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Search city"
              value={query}
              onChange={handleSearchChange}
            />
          </InputGroup>

          
          <h5>Top Cities</h5>
          <div className="d-flex flex-wrap mb-3">
            {filteredTopCities.map((city, index) => (
              <Button
                key={index}
                variant="outline-secondary"
                className="m-1"
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </Button>
            ))}
          </div>

          
          <h5>All Cities</h5>
          <div className="all-cities-list">
            {filteredAllCities.map((city, index) => (
              <div
                key={index}
                className="city-name"
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LocationSelector;



