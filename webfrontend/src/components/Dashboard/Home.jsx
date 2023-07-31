import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css'; // Import your custom CSS file for additional styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to VisitLanka</h1>
          <p>Your gateway to the paradise island!</p>

        </div>
      </section>

      {/* Brief description about VisitLanka */}
      <div style={{float:"left", width:"50%"}}>
      <section className="brief-description">
        <Container>
          <h2>About VisitLanka</h2>
          <p>
            VisitLanka is your ultimate guide to exploring the paradise island of Sri Lanka. 
            From pristine beaches to lush green landscapes, from ancient temples to vibrant cities, 
            Sri Lanka offers a diverse range of experiences for every traveler. Whether you are 
            seeking adventure, relaxation, or cultural immersion, VisitLanka has got you covered. 
            Plan your journey with our curated travel itineraries, discover hidden gems, and create 
            unforgettable memories in this tropical paradise. Start your adventure today and 
            experience the magic of Sri Lanka with VisitLanka.
          </p>
        </Container>
      </section>
      <section className="brief-description">
        <Container>
          <h2>Discover the Enchanting Beauty of Sri Lanka</h2>
          <p>Discover the enchanting beauty of Sri Lanka, a tropical paradise where stunning landscapes, 
          idyllic beaches, and ancient cultural heritage converge to offer an unforgettable experience. 
          Immerse yourself in the charm of ancient temples, vibrant cities, and the warm hospitality of the locals.
From thrilling adventures like trekking and wildlife safaris to serene beach resorts and rejuvenating Ayurvedic 
treatments, Sri Lanka caters to every traveler's desires. Experience a vibrant underwater world as you dive 
into crystal-clear waters and savor the delectable flavors of Sri Lankan cuisine, a fusion of diverse heritage.
Whether you seek romance, adventure, or family fun, Sri Lanka has it all. Let this magical island captivate 
your senses and create cherished memories. Welcome to Sri Lanka, a treasure trove of unforgettable moments."
Sri Lanka's appeal lies in its diverse offerings, making it an ideal destination for a variety of travelers 
seeking different experiences.</p>
        </Container>
      </section>
      </div>
      <div style={{float:"left", width:"50%"}}>
      <section className="brief-description">
      <Container>
          <Row>
          {/* <h2 style={{textAlign:"center"}}>Enjoy 😊</h2> */}
            <Col md={4}>
              <div className="feature-card">
                <h2>Explore Beautiful Destinations</h2>
                <p>Discover the best travel destinations in Sri Lanka with VisitLanka.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card">
                <h2>Plan Your Trip</h2>
                <p>Plan your dream vacation with our easy-to-use trip planner.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card">
                <h2>Capture Memories</h2>
                <p>Create lasting memories with unforgettable experiences.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
      <hr/>
    </div>
  );
};

export default Home;