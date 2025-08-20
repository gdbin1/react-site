import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    {/* <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/work1">Day_0812</Link>
                    </li>
                    <li>
                        <Link to="/work2">Day_0813</Link>
                    </li>
                    <li>
                        <Link to="/work3">Day_0814</Link>
                    </li>
                    <li>
                        <Link to="/work4">Day_0818</Link>
                    </li> */}
                    <li>
                        <Link to="/miniblog">MiniBlog</Link>
                    </li>
                    {/* <li>
                        <Link to="WebDisign1">WebDisign_1</Link>
                    </li> */}
                </ul>
            </nav>

        </>
    );
};

export default Nav;