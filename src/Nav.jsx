import React from 'react';
import { Link } from 'react-router-dom';


// import { BrowserRouter, Routes, Route } from 'react-router';
// import styled from 'styled-components'
// import MainPage from './pages/MainPage';
// import PostViewPage from './pages/PostViewPage';
// import PostWritePage from './pages/PostWritePage';
// const MainTitleText = styled.p`
//     font-size: 24px;
//     font-weight: bold;
//     text-align: center;`;

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/react-site">Home</Link>
                    </li>
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                    <li>
                        <Link to="work1">Day_0812</Link>
                    </li>
                    <li>
                        <Link to="work2">Day_0813</Link>
                    </li>
                    <li>
                        <Link to="work3">Day_0814</Link>
                    </li>
                    <li>
                        <Link to="work4">Day_0818</Link>
                    </li>
                    <li>
                        <Link to="miniblog">MiniBlog</Link>
                    </li>
                    <li>
                        <Link to="post-write">PostWritePage</Link>
                    </li>
                    <li>
                        <Link to="post/:postId">PostViewPage</Link>
                    </li>

                </ul>
            </nav>
            {/* <MainTitleText>소플의 미니 블로그</MainTitleText>
            <BrowserRouter>
                <Routes>
                    <Route
                        index
                        element={<MainPage />}
                    />
                    <Route
                        path='post-write'
                        element={<PostWritePage />}
                    />
                    <Route
                        path='post/:postId'
                        element={<PostViewPage />}
                    />
                </Routes>
            </BrowserRouter>
             <ul>
                    <li>
                        <Link to="/react-mainpage">메인</Link>
                    </li>
                      <li>
                        <Link to="/react-postviewpage">포스트뷰</Link>
                    </li>
                      <li>
                        <Link to="/react-postwrite">포스트라이트</Link>
                    </li>
                    </ul> */}
        </>
    );
};

export default Nav;