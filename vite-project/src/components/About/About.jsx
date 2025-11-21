import React from 'react';
import "./About.scss";

const About = () => {
    return (
        <div className="about">
            <div className="aboutTextImg">
                <div className="aboutDescription">
                    <div className="aboutHeading">
                        <p>ПРО-БИТ — это не просто клуб, а сообщество геймеров.</p>
                    </div>
                    <div className="aboutSubtitle">
                        <p>У нас вы найдёте оборудование уровня киберспортивных арен и атмосферу, где рождаются чемпионы!</p>
                    </div>
                    <div className="aboutAdvantages">
                        <ul>
                            <li><a>Лучшие сборки ПК, цена = качество</a></li>
                            <li><a>Турниры с призами</a></li>
                            <li><a>VIP‑кабины с шумоизоляцией</a></li>
                            <li><a>Напитки и снеки</a></li>
                        </ul>
                    </div>
                </div>
                <div className="aboutImg">
                    <img id="about" src="./assets/img/about.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;