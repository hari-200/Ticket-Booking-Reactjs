import React, { useState } from "react";
import { Button, ButtonGroup, Row, Col } from "react-bootstrap";
import "./Toogle.css";
import SearchBar from "./Searchbar";
import LocationSelector from "./Multidropdown";
import MovieListing from "./Currentmovies";
import Upcomming from "./Upcommingmovies";


function ToggleButtons() {
  
  const [isNowShowing, setIsNowShowing] = useState(true);

  return (
    <div className="m-5">
  
      <Row>
        <Col lg={3} className=" d-none d-xl-flex" >
          <ButtonGroup>
            
            <Button
              variant={isNowShowing ? "light" : "outline-primary"}
              onClick={() => setIsNowShowing(true)}
              className="show"
            >
              Now Showing
            </Button>

            
            <Button
              variant={!isNowShowing ? "light" : "outline-primary"}
              onClick={() => setIsNowShowing(false)}
              className="now"
            >
              Coming Soon
            </Button>
          </ButtonGroup>
        </Col>

        <Col lg={6} className="d-none d-xl-flex">
          
          <SearchBar />
        </Col>

        <Col lg={3} className="d-none d-xl-flex">
          
          <LocationSelector />
        </Col>
      </Row>

      
      <div className="mt-5">
        {isNowShowing ? <MovieListing/> : <Upcomming/>}
      </div>
    </div>
  );
}

export default ToggleButtons;


