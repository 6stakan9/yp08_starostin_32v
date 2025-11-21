import React from 'react';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Back_connection from "../components/Back_connection/Back_connection.jsx";


const Kontacts = () => {
    return (
        <>
            <Header />
            <div className="contacts">
                <h2 className="contacts__title">Контакты</h2>

                <div className="contacts__container">
                    <div className="contacts__form-block">
                        <h3 className="contacts__subtitle">Форма обратной связи</h3>

                        <Back_connection />

                        <div className="contacts__info">
                            <h3 className="contacts__subtitle"></h3>

                            <p><strong>Телефон:</strong> 8 (888) 888-88-88</p>
                            <p><strong>Email:</strong> info@pro-bit.ru</p>

                            <div className="contacts__socials">
                                <a href="#" target="_blank">YouTube</a>
                                <a href="#" target="_blank">VKontakte</a>
                                <a href="#" target="_blank">Telegram</a>
                            </div>
                        </div>
                    </div>


                    <div className="contacts__map">
                        <h3 className="contacts__subtitle">Мы на карте</h3>
                        <div className="map-wrapper">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=44.040017,56.280922&z=12&l=map&pt=43.978888,56.286103,pm2rdm"
                                width="100%"
                                height="400"
                                frameBorder="0"
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                        <p className="contacts__address">
                            <strong>Адрес:</strong> проспект Гагарина, 35к1, Нижний Новгород, ПРО-БИТ
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Kontacts;