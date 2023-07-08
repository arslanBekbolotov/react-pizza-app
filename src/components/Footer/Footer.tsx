import React from 'react';
import {Link} from "react-router-dom";
import social from "../../assets/footer/social.svg";
import footerLogo from "../../assets/footer/footer-logo.svg";
import appStore from "../../assets/footer/app-store.svg";
import google from "../../assets/footer/google-play.svg";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_top">
                    <div className="footer_top_left">
                        <div className="footer__menu">
                            <ul className="footer__list_primary">
                                <li>
                                    <ul>
                                        <li><Link to={"/"}>Додо Пицца</Link></li>
                                        <li><Link to={"/"}>О нас</Link></li>
                                        <li><Link to={"/"}>Додо-книга</Link></li>
                                        <li><Link to={"/"}>Блог "Сила ума"</Link></li>
                                        <li><Link to={"/"}>Додо ИС</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><Link to={"/"}>Работа</Link></li>
                                        <li><Link to={"/"}>В пиццерии</Link></li>
                                        <li><Link to={"/"}>В контакт-центре</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><Link to={"/"}>Партнерам</Link></li>
                                        <li><Link to={"/"}>Франшиза</Link></li>
                                        <li><Link to={"/"}>Инвестиции</Link></li>
                                        <li><Link to={"/"}>Поставщикам</Link></li>
                                        <li><Link to={"/"}>Предложить помещение</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><Link to={"/"}>Это интересно</Link></li>
                                        <li><Link to={"/"}>Экскурсии и мастер-классы</Link></li>
                                        <li><Link to={"/"}>Корпоративные заказы</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__numbers">
                            <div className="footer__sum">
                                <h2 className="footer__text_bold">1 396 362 874 &#8381;</h2>
                                <p className="footer__text_semi-op">
                                    Выручка российской сети в этом месяце. В прошлом — 2 460 305
                                    416 &#8381;
                                </p>
                            </div>
                            <div className="footer__local">
                                <h2 className="footer__text_bold">688 пиццерий</h2>
                                <p className="footer__text_semi-op">
                                    в 14 странах, включая Китай, США и Великобританию
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_top_right">
                        <div className="footer_top_right_images">
                            <img src={google} alt="google play"/>
                            <img src={appStore} alt="app store"/>
                        </div>
                        <div className="footer__phone">
                            <Link to={'/'}>8 800 302-00-60</Link>
                        </div>
                        <p>Звонок бесплатный</p>
                        <a id="footer__email" href="mailto:feedback@dodopizza.com"
                        >feedback@dodopizza.com</a
                        >
                    </div>
                </div>
                <div className="footer_bot">
                    <div className="footer__logo">
                        <img src={footerLogo} alt="dodo pizza"/>
                    </div>
                    <div className="footer__links">
                        <ul>
                            <li><Link to={"/"}>Правовая информация</Link></li>
                            <li><Link to={"/"}>Калорийность и состав</Link></li>
                            <li><Link to={"/"}>Помощь</Link></li>
                        </ul>
                    </div>
                    <div className="footer__social-icons">
                        <img src={social} alt="social networks"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;