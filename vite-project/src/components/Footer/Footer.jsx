import React from 'react';
import "./Footer.scss";
import Applications from "../Applications/Applications.jsx";

const Footer = () => {



    return (
        <footer>
            <div className="descriptionFooter">
                <div className="descriptionFooterTop">
                    <div className="descriptionFooterTopLeft">
                        <div className="descriptionFooterTopLeftLogo">
                            ПРО-БИТ
                        </div>
                        <div className="descriptionFooterTopLeftOrganization">
                            ©2025 ООО “ПРО-БИТ”
                        </div>
                    </div>
                    <div className="descriptionFooterTopRight">
                        <div className="descriptionFooterTopRightNumber">
                            8 (888) 888-88-88
                        </div>
                        <div className="descriptionFooterTopRightMail">
                            info@pro-bit.ru
                        </div>
                        <div className="descriptionFooterTopRightMedia">
                            <div className="MediaIcon">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="descriptionFooterBottom">
                    <nav className="descriptionFooterBottomNavigation">
                        <ul>
                            <li><a>Контакты</a></li>
                            <li><a>О нас</a></li>
                            <li><a>Наши клубы</a></li>
                            <li><a>Витрина</a></li>
                        </ul>
                    </nav>
                    <div className="descriptionFooterBottomApplications">
                        <Applications img="./assets/icon/GooglePlay_white.svg" name={"Google Play"}/>
                        <Applications img="./assets/icon/Apple_white.svg" name={"App Store"}/>
                        <Applications img="./assets/icon/Huawei_white.svg" name={"AppGallery"}/>
                        <Applications img="./assets/icon/RuStore_white.svg" name={"RuStore"}/>
                    </div>
                </div>
            </div>
            <div className="agreements">
                <ul>
                    <li><a>Политика обработки персональных данных</a></li>
                    <li><a>Согласие на рассылку</a></li>
                    <li><a>Согласие на обработку персональных данных</a></li>
                    <li><a>Лицензионное соглашение (Оферта)</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;