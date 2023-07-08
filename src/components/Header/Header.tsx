import React from 'react';
import logo from "../../assets/header/logo.svg";
import logoText from "../../assets/header/logo-text.svg";
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
            <header>
                <div className="container">
                    <div id="head" className="header">
                        <div className="header__elem">
                                <Link to={"/"}>
                                    <div className="header__logo">
                                        <img id="logo" src={logo} alt="logo"/>
                                        <img src={logoText} alt="logo-text"/>
                                        <p className="logo__text">Сеть пиццерий №1 в России</p>
                                     </div>
                                </Link>
                            <div className="header__item">
                                <div className="phone">
                                    <a href="tel:+78003020060">8 800 302-00-60</a>
                                    <p>Звонок бесплатный</p>
                                </div>
                                <div className="button_orange btn-sm">
                                    <button className="openModal">Корзина</button>
                                </div>
                            </div>
                        </div>
                        <div id="header_sticky" className="header__elem">
                            <div className="hamburger-menu">
                                <input id="menu__toggle" type="checkbox"/>
                                <label className="menu__btn" htmlFor="menu__toggle">
                                    <span></span>
                                </label>
                                    <ul className="menu__box">
                                        <Link className="menu__item"  to={"/pizza"}>Пицца</Link>
                                        <Link className="menu__item" to={"/combo"}>Комбо</Link>
                                        <Link className="menu__item" to={"/snacks"}>Закуски</Link>
                                        <Link className="menu__item" to={"/sweets"}>Десерты</Link>
                                        <Link className="menu__item" to={"/drink"}>Напитки</Link>
                                    </ul>
                            </div>
                            <div className="button_orange">
                                <button className="openModal">Корзина</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Header;