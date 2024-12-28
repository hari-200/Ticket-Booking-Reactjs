import React from 'react'
import { Container } from 'react-bootstrap';



const Bookings = () => {
  return (
    <div>
      <Container className='pic'>
      <h3>My Bookings</h3>
      <img src="https://assetscdn1.paytm.com/movies_new/_next/static/media/no-shows-found.7f82dc78.svg" alt="myorders" height={150} width={150} />
      <h5>No Orders</h5>
      </Container>
    </div>
  )
}

export default Bookings
