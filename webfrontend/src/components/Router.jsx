import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBeach from './beachManagement/AddBeach';
import Home from './Home';
import UpdateBeach from './beachManagement/UpdateBeach';
import ViewBeach from './beachManagement/ViewBeach';
import ViewBeaches from './beachManagement/ViewBeaches';
import Header from './Header';
import Footer from './Footer';

function Router() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addbeach" element={<AddBeach />} />
          {/* Pass the match object to UpdateBeach */}
          <Route
            path="/updatebeach/:id"
            element={<UpdateBeach/>}
          />
          {/* Update the Route for ViewBeach */}
          <Route
            path="/viewbeach/:id"
            element={<ViewBeach/>}
          />
          <Route path="/viewbeaches" element={<ViewBeaches />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default Router;