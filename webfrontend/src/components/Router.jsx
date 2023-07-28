import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBeach from "./beachManagement/AddBeach";
import Home from "./Home";
import UpdateBeach from "./beachManagement/UpdateBeach";
import ViewBeach from "./beachManagement/ViewBeach";
import ViewBeaches from "./beachManagement/ViewBeaches";
function Router() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/addbeach" element={<AddBeach/>}/>
              <Route path="/updatebeach/:id" element={<UpdateBeach/>}/>
              <Route exact path="/viewbeach/:id" element={<ViewBeach />} />
              <Route path="/viewallbeachs" element={<ViewBeaches/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
