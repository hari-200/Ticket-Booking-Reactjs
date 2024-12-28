import React, { useState } from 'react';
import { Container, Nav, Row, Navbar, Col, NavDropdown, Modal, Button, Form, NavLink } from 'react-bootstrap';
import logo from './images/logo.png'; 
import profile from './images/profile.png';
import movie from './images/Movie 1.png';
import lubber from './images/Movie 2.png';
import goat from './images/goat.png';
import cini from './images/movie 4.jpg'
import mini from './images/movie 5.jpg'
import sini from './images/movie 6.jpg'
import gini from './images/movie 7.jpg'
import vini from './images/movie 8.png'
import apple from './images/apple.png';
import playstore from './images/playstore.png';
import { Link, Route, Routes } from 'react-router-dom';
import SearchPage from './Resultpage';
import Default from './Default';
import Bookings from './MyOrders';
import Theatre from './Theatre';
import Drop from './Drop';
import Single from './Single';
import Simple from './Simple';







































const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [moviesDropdownOpen, setMoviesDropdownOpen] = useState(false);
  const [theatresDropdownOpen, setTheatresDropdownOpen] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleGenerateOTP = () => {
    if (mobileNumber) {
      alert(`OTP has been sent to ${mobileNumber}`);
      setShowModal(false);
    } else {
      alert('Please enter a valid mobile number');
    }
  };

  return (
    
  
    <div>
      
      <Container fluid >
        <Row>
          <Navbar className='w-100 fixed-top shadow navbar-custom p-3' expand="lg">
            <Col lg={2}>
              <Navbar.Brand className='ms-5'>
              <Link to="/"><img src={logo} alt="logo" height={50} width={160} /> </Link>
                
              </Navbar.Brand>
            </Col>

            <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggle-custom" />

            <Navbar.Collapse id="navbar-nav">
              <Col lg={6}>
                <Nav className="me-auto ms-5">
                  <Nav.Link   className='font nav-link-custom ps-3 pe-3  '> <Link to="/" className='fact'>Home </Link></Nav.Link>

                  <NavDropdown title="Movies" id="movies-dropdown" className="font custom-dropdown-title " 
                    show={moviesDropdownOpen}
                    onMouseEnter={() => setMoviesDropdownOpen(true)}
                    onMouseLeave={() => setMoviesDropdownOpen(false)}
                    onClick={() => setMoviesDropdownOpen(!moviesDropdownOpen)}>
                    <Container>
                      <Row>
                      <Col >
                    <NavDropdown.Item href="#movie1">
                      <span><img src={movie} alt="movie" height={80} width={80} /></span>Meialagan
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#movie2">
                      <span><img src={lubber} alt="lubber" height={80} width={80} /></span>Lubber pandhu
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#movie3">
                      <span><img src={goat} alt="goat" height={80} width={80} /></span>Goat
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#movie3">
                      <span><img src={cini} alt="cini" height={80} width={80} /></span>Vettayan
                    </NavDropdown.Item>
                    </Col>
                    <Col>
                    <NavDropdown.Item href="#movie1">
                      <span><img src={mini} alt="mini" height={80} width={80} /></span>Black
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#movie2">
                      <span><img src={sini} alt="sini" height={80} width={80} /></span>Martin
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#movie3">
                      <span><img src={gini} alt="gini" height={80} width={80} /></span>Sir
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#movie3">
                      <span><img src={vini} alt="vini" height={80} width={80} /></span>Venom
                    </NavDropdown.Item>
                    </Col>
                    </Row>
                    </Container>
                  </NavDropdown>

                  <NavDropdown title="Theatres" id="theatres-dropdown" className="font custom-dropdown-title  " 
                    show={theatresDropdownOpen}
                    onMouseEnter={() => setTheatresDropdownOpen(true)}
                    onMouseLeave={() => setTheatresDropdownOpen(false)}
                    onClick={() => setTheatresDropdownOpen(!theatresDropdownOpen)}>
                    <NavDropdown.Item href="#theatre"><h3>Theatres in Coimbatore</h3></NavDropdown.Item>
                    <Container>
                      <Row>
                      <Col>
                    <NavDropdown.Item href="#theatre5"><p className='fw-bold'> Coimbatore</p></NavDropdown.Item>
                    <NavDropdown.Item href="#theatre1">Baba Cinemas 4K Dolby Atmos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#theatre2">Kalpana Theatre</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#theatre3">APA Cinemas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#theatre4">Cinepolis Fun Cinema</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#theatre6">SRK Miraj</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#theatre7">Inox prozonemall</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#theatre7">PVR BrooksMall</NavDropdown.Item>
                    </Col>
                    <Col>
                    <NavDropdown.Item href="#theatre5"><p className='fw-bold'> Annur</p></NavDropdown.Item>
                    <NavDropdown.Item href="#theatre1">Sri Karuna Multiplex</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#theatre2">Sri Vinayaga Cinemas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#theatre3">KVK Cinemas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#theatre5"><p className='fw-bold'> Annaikatti</p></NavDropdown.Item>
                    <NavDropdown.Item href="#theatre4">City cinema</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#theatre5"><p className='fw-bold'> Palladam</p></NavDropdown.Item>
                    <NavDropdown.Item href="#theatre6">Arnothaya ciniflex</NavDropdown.Item>
                    <NavDropdown.Divider />
                    
                    </Col>
                    </Row>
                    </Container>
                  </NavDropdown>

                  <Nav.Link     className='font nav-link-custom ps-3 pe-3' ><Link to="/orders" className='cat'>Orders</Link></Nav.Link>
                </Nav>
              </Col>

              <Col lg={2} className="d-flex justify-content-end ms-auto d-none d-xl-flex login-signup">
  <button
    className="login d-inline-flex align-items-center px-3 py-2"
    style={{ fontSize: '14px' }}
    onClick={handleShowModal}
  >
    Log in / Sign up
    <span className="ms-2">
      <img
        src={profile}
        alt="profile"
        style={{
          width: '45px',
          height: '45px',
          position:'relative',
          left:'19px'
          
        
          
        }}
      />
    </span>
  </button>
</Col>


              <Col lg={2} className="d-flex justify-content-end me-5 d-none d-xl-flex  app-icons">
               
                <a href="https://apps.apple.com/in/app/ticketnew-book-movie-tickets/id495490813" className="me-3">
                <div className='apple '>
                  <img src={apple} alt="apple" height={22} width={20} className='position-absolute' bottom={20}   />
                </div>
                </a>
               
                <a href="https://play.google.com/store/apps/details?id=ticketnew.android.ui">
                  <div className='playstore '>
                  <img src={playstore} alt="playstore" height={22} width={20} className='position-absolute' bottom={20} />
                  </div>
                </a>

              </Col>

            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>

      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>
            <img src={logo} alt="logo" height={50} width={160} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="mobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your mobile number" 
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleGenerateOTP}>
            Get OTP
          </Button>
        </Modal.Footer>
      </Modal>


      <Routes>
          <Route path='/' element={<Default/>}/>
          
          <Route path="/orders" element={<Bookings/>}/>
          <Route path='/search' element={<SearchPage/>}/>
           <Route path='/start'  element={<Theatre/>}/> 
           <Route path='/end'  element={<Drop/>}/> 
           <Route path='/up'  element={<Single/>}/> 
           <Route path='/bottom'  element={<Simple/>}/> 
           <Route path='/do' element={<Theatre/>}/>
           <Route path='/did' element={<Theatre/>}/>
      </Routes>
     
    





      
     
  

      
      
      
    
      
      
      
      

      
    
    
    </div>
  
    
  );
};

export default App;














