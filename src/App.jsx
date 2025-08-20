import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Login from "./compo/Login.jsx";
import Home from "./compo/Home.jsx";
import Layout from "./compo/Layout.jsx";
import Work1 from "./compo/Work1.jsx";
import Work2 from "./compo/Work2.jsx";
import Work3 from "./compo/Work3.jsx";
import Work4 from "./compo/Work4.jsx";
import Miniblog from "./compo/MiniBlog.jsx";
import MainContent from "./MainContent.jsx";
import Nav from "./Nav.jsx";
import MainPage from "./pages/MainPage.jsx";
import PostViewPage from "./pages/PostViewPage.jsx";
import PostWritePage from "./pages/PostWritePage.jsx";

import { createGlobalStyle } from 'styled-components';
import WebDisign1 from "./compo/WebDisign1.jsx";
// import TextCursor from "./TextCursor.jsx";

// import styled from 'styled-components'
// const GlobalCursorStyle = createGlobalStyle`
//  body {
//     cursor: url('/ren_02.cur'), pointer, auto; 
//   }`;
// const MainTitleText = styled.p
//     font-size: 24px;
//     font-weight: bold;
//     text-align: center;`;
function App() {
  return (
    <>

      {/* <GlobalCursorStyle /> */}
      <h1 className="gaegu-korean">가빈 react과제방</h1>
      {/* <TextCursor /> */}

      <BrowserRouter>
        <MainContent>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/react-site" element={<Layout />} >
              <Route path="login" element={<Login />} />
              <Route path="work1" element={<Work1 />} />
              <Route path="work2" element={<Work2 />} />
              <Route path="work3" element={<Work3 />} />
              <Route path="work4" element={<Work4 />} />
              <Route path="WebDisign1" element={<WebDisign1 />} />
            </Route>

            <Route path="/miniblog" element={<Miniblog />} >
              <Route index element={<MainPage />} />
              <Route path='post-write' element={<PostWritePage />} />
              <Route path='post/:postId' element={<PostViewPage />} />
            </Route>
          </Routes>
        </MainContent >
      </BrowserRouter >
    </>
  );
}

export default App
