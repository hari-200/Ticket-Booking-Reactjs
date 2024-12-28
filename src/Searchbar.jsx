
import React, { useState } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Searchbar.css';

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleFocus = () => {
    navigate('/search'); 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <InputGroup>
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <FormControl
          type="search"
          placeholder="Search Movie or a Theatre"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
        />
      </InputGroup>
    </Form>
  );
}

export default SearchBar;


