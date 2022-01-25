import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMeQuery } from "./generated/graphql";
import { Home } from "./Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* list all the restaurants */}
        {/* <Route path="restaurants">
          <Route path="res_id" element={<Restaurant />} /> 
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
