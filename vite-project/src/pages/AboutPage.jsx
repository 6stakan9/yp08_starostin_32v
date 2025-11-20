import React from 'react';
import Header from "../components/Header/Header.jsx";
import Button from "../components/Button/Button.jsx";
import Slider from "../components/Slider/Slider.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import STA from "../components/STA/STA.jsx";
import Footer from "../components/Footer/Footer.jsx";
// import diplomSvg from './../icon/diplom.svg'
// import settingSvg from './../icon/setting.svg'
// import calendarSvg from './../icon/calendar.svg'
// import shieldSvg from './../icon/shield.svg'
// import logoSvg from './../icon/logo.svg'

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
            <div className="advantages">
                <div className="personalManager">
                    <div className="personalManagerText">
                        <p>Персональный менеджер для корпоративных клиентов</p>
                    </div>
                </div>
                <div className="miniAdvantages">
                    <div className="miniAdvantage">
                        <div className="headingMiniAdvantages">
                            <p>Без депозитов:</p>
                        </div>
                        <div className="subtitleMiniAdvantages">
                            <p>платите только за время</p>
                        </div>
                    </div>
                    <div className="miniAdvantage">
                        <div className="headingMiniAdvantages">
                            <p>Скидка 15%</p>
                        </div>
                        <div className="subtitleMiniAdvantages">
                            <p>для студентов</p>
                        </div>
                    </div>
                    <div className="miniAdvantage">
                        <div className="headingMiniAdvantages">
                            <p>Зона отдыха</p>
                        </div>
                        <div className="subtitleMiniAdvantages">
                            <p>с диванами и ТВ</p>
                        </div>
                    </div>
                </div>
                <div className="freshContent">
                    <div className="freshContentTextTop">
                        <p>Бесплатные обновления игр </p>
                    </div>
                    <div className="freshContentTextBottom">
                        <p>Всегда свежий контент</p>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <Slider />
            </div>
            <div className="Reviews">
                <Reviews />
            </div>
            <div className="Reviews">
                <STA />
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;