import React from 'react';
import './Header.scss';

const Header = () => {

    return (
        <header>
            <div className="logo">
                ПРО-БИТ
            </div>
            <nav className="menu">
                <ul>
                    <li><a>Контакты</a></li>
                    <li><a>О нас</a></li>
                    <li><a>Наши клубы</a></li>
                    <li><a>Витрина</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;