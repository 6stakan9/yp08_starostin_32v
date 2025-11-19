import React from 'react';
import Header from "../components/Header/Header.jsx";
import Button from "../components/Button/Button.jsx";

const AboutPage = () => {
    return (
        <>
            <Header />
            <div className="welcome">
                <div className="welcomeBox">
                    <div className="WelcomeHeading">
                        <div className="WelcomeName">
                            <p>Врывайся в игру!</p>
                        </div>
                        <div className="WelcomeSubtitle">
                            <p>Сеть топовых киберспортивных клубов и арен.</p>
                        </div>
                    </div>
                    <Button />
                </div>
            </div>
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
        </>
    );
};

export default AboutPage;