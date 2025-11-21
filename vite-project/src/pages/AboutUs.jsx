import React from 'react';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Slider from "../components/Slider/Slider.jsx";

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="AboutUs">
                <div className="history">
                    <div className="img">
                        <img id="about_img" src="./assets/img/photo_for_gallery_6.png" alt=""/>
                    </div>
                    <div className="description">
                        <div className="titleHistory">
                            <p>Наша история — это история постоянного развития технологий.</p>
                        </div>
                        <div className="descriptionHistory">
                            <p>Мы начинали с нескольких мощных компьютеров, а сегодня предлагаем нашим гостям топовое железо, профессиональные периферийные устройства и скорость интернета, которая покоряет любые вершины киберспорта</p>
                        </div>
                    </div>
                </div>
                <div className="mission">
                    <div className="description">
                        <div className="titleMission">
                            <p>Наша миссия — объединять людей через игры.</p>
                        </div>
                        <div className="descriptionMission">
                            <p>Мы создаем пространство, где каждый, от новичка до профессионального киберспортсмена, найдет себе место по душе, сможет прокачать свои навыки и стать частью большой gaming-семьи.</p>
                        </div>
                    </div>
                    <div className="img">
                        <img id="about_img" src="./assets/img/photo_for_gallery_1.png" alt=""/>
                    </div>
                </div>
                <div className="team">
                    <div className="img">
                        <img id="about_img" src="./assets/img/photo_for_gallery_2.png" alt=""/>
                    </div>
                    <div className="description">
                        <div className="titleTeam">
                            <p>Команда</p>
                        </div>
                        <div className="descriptionTeam">
                            <p>В нашей команде — увлечённые геймеры, техники и администраторы, которые всегда готовы помочь. Мы следим за состоянием оборудования, поддерживаем порядок в клубе и делаем всё, чтобы каждый визит оставлял только позитивные эмоции.</p>
                        </div>
                    </div>
                </div>
                <div className="principles">
                    <div className="description">
                        <div className="titlePrinciples">
                            <p>Принципы</p>
                        </div>
                        <div className="descriptionPrinciples">
                            <ul>
                                <li>Честная игра и уважение игроков.</li>
                                <li>Чистота, порядок, комфорт.</li>
                                <li>Постоянное обновление оборудования.</li>
                                <li>Прозрачная ценовая политика.</li>
                                <li>Забота о каждом госте клуба.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="img">
                        <img id="about_img" src="./assets/img/photo_for_gallery_9.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="photo">
                <p>Фото клуба</p>
                <Slider />
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;