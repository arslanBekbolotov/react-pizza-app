import React from 'react';
import cezar from "../../assets/popular/cezar.png";
import losos from "../../assets/popular/losos.png";
import twoPizza from "../../assets/popular/two-pizza.png";
import karbon from "../../assets/popular/karbon.png";

import './Popular.css'

const Popular = () => {
    return (
        <section className="new">
            <div className="container">
                <h2>Новое и популярное</h2>
                <div className="popular">
                    <div className="popular__item">
                        <img src={cezar} alt="цезарь"/>
                        <p className="popular__pizza">Цезарь</p>
                        <p className="popular__price price">от 445 &#8381;</p>
                    </div>
                    <div className="popular__item">
                        <img src={losos} alt="нежный лосось"/>
                        <p className="popular__pizza">Нежный лосось</p>
                        <p className="popular__price price">от 495 &#8381;</p>
                    </div>
                    <div className="popular__item">
                        <img src={twoPizza} alt="2 пиццы"/>
                        <p className="popular__pizza">2 пиццы</p>
                        <p className="popular__price price">899 &#8381;</p>
                    </div>
                    <div className="popular__item">
                        <img src={karbon} alt="карбонара"/>
                        <p className="popular__pizza">Карбонара</p>
                        <p className="popular__price price">от 395 &#8381;</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Popular;