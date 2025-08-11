import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// import { useState } from "react";
import './App.css'
import Login from "../compo/Layout";
import Home from "../compo/Home";
import Layout from "../compo/Login";

function App() {
  return (
    <>
      <h1>✨✨✨과제방✨✨✨</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
