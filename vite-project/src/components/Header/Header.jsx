import React from 'react';
import './Header.scss';
import { NavLink } from "react-router-dom";
// import {ReactSVG} from "react-svg";
// import {useTheme} from "../../app/ThemeContext.js";
// import ThemeSwitcher from './ThemeSwicther/ThemeSwitcher.jsx';

const Header = () => {

    // const {  toggleTheme } = useTheme();

    return (
        <header>
            <div className="logo">
                <NavLink id="link_pages" to={"/AboutPage"}>
                    <img id="logo" src="./assets/icon/logo.png" alt="логотип"/>
                </NavLink>
            </div>
            <nav className="menu">
                <ul>
                    <li><NavLink id="link_pages" to={"/Kontacts"}>Контакты</NavLink></li>
                    <li><NavLink id="link_pages" to={"/AboutUs"}>О нас</NavLink></li>
                    <li><NavLink id="link_pages" to={"/ShowcaseGoods"}>Витрина</NavLink></li>
                    {/*<li> <ThemeSwitcher toggleTheme={toggleTheme}/></li>*/}
                </ul>
            </nav>
        </header>
    );
};

export default Header;