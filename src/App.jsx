import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ReceipeDetails from "./pages/ReceipeDetails";
import Favorites from "./pages/Favorites";
import TopNavbar from "./components/TopNavbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/receipe/:id" element={<ReceipeDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
