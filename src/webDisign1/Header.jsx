import React from 'react';
import './Web.css'
const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='logo'>로고</div>
                <nav>
                    <ul className='main-menu'>
                        <li><a href="#">MENU1</a>
                            <ul className='sub-menu'>
                                <li><a href="">SubMenu1</a></li>
                                <li><a href="">SubMenu2</a></li>
                                <li><a href="">SubMenu3</a></li>
                                <li><a href="">SubMenu4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">MENU2</a>
                            <ul  className='sub-menu'>
                                <li><a href="">SubMenu1</a></li>
                                <li><a href="">SubMenu2</a></li>
                                <li><a href="">SubMenu3</a></li>
                                <li><a href="">SubMenu4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">MENU3</a>
                            <ul  className='sub-menu'>
                                <li><a href="">SubMenu1</a></li>
                                <li><a href="">SubMenu2</a></li>
                                <li><a href="">SubMenu3</a></li>
                                <li><a href="">SubMenu4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">MENU4</a>
                            <ul  className='sub-menu'>
                                <li><a href="">SubMenu1</a></li>
                                <li><a href="">SubMenu2</a></li>
                                <li><a href="">SubMenu3</a></li>
                                <li><a href="">SubMenu4</a></li>
                            </ul>
                        </li>
                    </ul >
                </nav>
            </header>
        </>
    );
};

export default Header;