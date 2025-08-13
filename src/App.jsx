import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// import { useState } from "react";
import './App.css'
import Login from "./compo/Login.jsx";
import Home from "./compo/Home.jsx";
import Layout from "./compo/Layout.jsx";
import Work1 from "./compo/Work1.jsx";
import Work2 from "./compo/Work2.jsx";

function App() {
  return (
    <>
      <h1 className="gaegu-korean">가빈 react과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login" element={<Login />} />
          <Route path="/react-site/work1" element={<Work1 />} />
          <Route path="/react-site/work2" element={<Work2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
