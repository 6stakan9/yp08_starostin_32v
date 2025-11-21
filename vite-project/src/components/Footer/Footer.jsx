import React from 'react';
import "./Footer.scss";
import Applications from "../Applications/Applications.jsx";
import {NavLink} from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <div className="descriptionFooter">
                <div className="descriptionFooterTop">
                    <div className="descriptionFooterTopLeft">
                        <div className="descriptionFooterTopLeftLogo">
                            <img className="logo" src="./assets/icon/logo_footer.png" alt="логотип"/>
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
                                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.7227 25C13.7898 24.874 10.0498 24.776 6.30978 24.629C5.50392 24.594 4.68429 24.4679 3.89909 24.2789C2.42513 23.9289 1.40575 23.0258 0.882287 21.5486C0.462139 20.3585 0.31061 19.1334 0.200407 17.8873C-0.0406624 14.9609 -0.0406624 12.0346 0.0764282 9.10833C0.145305 7.45616 0.186631 5.78998 0.620555 4.18681C0.882287 3.22771 1.19912 2.28961 1.96365 1.59654C2.76951 0.861464 3.71313 0.420418 4.7876 0.371412C7.73553 0.224397 10.6766 0.0423779 13.6245 0.014375C17.5918 -0.0276294 21.566 0.0283767 25.5333 0.105385C27.2483 0.140388 28.9772 0.231398 30.6784 0.455422C32.235 0.665444 33.399 1.54754 34.0189 3.0877C34.4942 4.27082 34.6733 5.50995 34.7766 6.77009C35.0452 9.92742 35.0521 13.0847 34.9006 16.2421C34.8248 17.8452 34.749 19.4554 34.3013 21.0166C33.7916 22.8088 32.7103 23.9919 30.9057 24.3979C30.2032 24.552 29.4731 24.608 28.7567 24.636C25.0098 24.769 21.2698 24.888 17.7227 25ZM13.9138 17.0402C17.0546 15.388 20.1609 13.7498 23.3293 12.0766C20.1678 10.3965 17.0615 8.75129 13.9138 7.07812C13.9138 10.4175 13.9138 13.7008 13.9138 17.0402Z" fill="currentColor"/>
                                </svg>
                                <svg width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.1818 0C2.40566 0 4.27059 0 5.31961 0C5.84413 0 6.25208 0.349675 6.42692 0.815908C6.95143 2.33117 8.11701 5.65307 9.45743 7.92596C11.2641 10.8982 12.4297 12.0055 13.1873 11.8889C13.9449 11.7141 13.7118 9.73261 13.7118 8.15908C13.7118 6.58554 13.8866 3.9047 13.129 2.68084L11.9634 0.990745C11.672 0.582792 11.9634 0.0582793 12.4297 0.0582793H19.0735C19.7146 0.0582793 20.2391 0.582791 20.2391 1.22386V9.67433C20.2391 9.67433 20.5305 11.1896 22.1623 9.61605C23.7941 8.04252 25.5425 5.12856 26.9994 2.15633L27.5822 0.757629C27.7571 0.349675 28.165 0.0582793 28.6313 0.0582793H32.9439C33.7598 0.0582793 34.3426 0.874188 34.0512 1.63182L33.585 2.85568C33.585 2.85568 32.0115 6.00275 30.3796 8.21736C28.7478 10.4902 28.3981 11.0148 28.6313 11.5975C28.8644 12.1803 33.0605 16.085 34.1095 17.95C34.4009 18.4745 34.634 18.9407 34.8671 19.3487C35.2751 20.1063 34.6923 21.097 33.8181 21.097H28.9227C28.5147 21.097 28.1068 20.8639 27.9319 20.5142L27.4657 19.7566C27.4657 19.7566 24.4934 16.2599 22.6868 15.1526C20.8219 14.1035 20.8801 15.6188 20.8801 15.6188V18.7076C20.8801 19.9897 19.8311 21.0388 18.549 21.0388H17.3834C17.3834 21.0388 10.9727 21.0388 5.84413 13.4042C1.82287 7.45973 0.482448 3.61331 0.0162149 1.3987C-0.100343 0.699349 0.424169 0 1.1818 0Z" fill="currentColor"/>
                                </svg>
                                <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.1587 0.329599L1.1503 12.1615C-0.0975151 12.7125 -0.519571 13.8159 0.848652 14.4147L8.8037 16.9162L28.0378 5.15409C29.088 4.41566 30.1632 4.61258 29.238 5.42484L12.7185 20.2249L12.1995 26.4883C12.6802 27.4554 13.5603 27.4599 14.1216 26.9792L18.692 22.7001L26.5195 28.4999C28.3375 29.5649 29.3267 28.8776 29.7178 26.9257L34.852 2.87045C35.3851 0.467685 34.476 -0.590966 32.1587 0.329599Z" fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="descriptionFooterBottom">
                    <nav className="descriptionFooterBottomNavigation">
                        <ul>
                            <li><NavLink id="link_pages" to={"/Kontacts"}>Контакты</NavLink></li>
                            <li><NavLink id="link_pages" to={"/AboutUs"}>О нас</NavLink></li>
                            <li><a>Наши клубы</a></li>
                            <li><NavLink id="link_pages" to={"/ShowcaseGoods"}>Витрина</NavLink></li>
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