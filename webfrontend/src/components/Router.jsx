import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddLocation from './beachManagement/AddLocation';
import UpdateLocation from './beachManagement/UpdateLocation';
import ViewBeach from './beachManagement/ViewBeach';
import ViewBeaches from './beachManagement/ViewBeaches';
import Header from './Header';
import Footer from './Footer';
import Home from './Dashboard/Home';
import ViewBeaches1 from './beachManagement/ViewBeaches1';
import ViewBeaches2 from './beachManagement/ViewBeaches2';
import ViewBeaches3 from './beachManagement/ViewBeaches3';
import ViewBeaches4 from './beachManagement/ViewBeaches4';
import ViewBeaches5 from './beachManagement/ViewBeaches5';
import ViewBeaches6 from './beachManagement/ViewBeaches6';
import ViewBeaches7 from './beachManagement/ViewBeaches7';
import ViewBeaches8 from './beachManagement/ViewBeaches8';

function Router() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addlocation" element={<AddLocation />} />
          {/* Pass the match object to UpdateBeach */}
          <Route
            path="/updatelocation/:id"
            element={<UpdateLocation/>}
          />
          {/* Update the Route for ViewBeach */}
          <Route
            path="/viewlocation/:id"
            element={<ViewBeach/>}
          />
          <Route path="/viewlocations" element={<ViewBeaches />} />
          <Route path="/view1" element={<ViewBeaches1 />} />
          <Route path="/view2" element={<ViewBeaches2 />} />
          <Route path="/view3" element={<ViewBeaches3 />} />
          <Route path="/view4" element={<ViewBeaches4 />} />
          <Route path="/view5" element={<ViewBeaches5 />} />
          <Route path="/view6" element={<ViewBeaches6 />} />
          <Route path="/view7" element={<ViewBeaches7 />} />
          <Route path="/view8" element={<ViewBeaches8 />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default Router;