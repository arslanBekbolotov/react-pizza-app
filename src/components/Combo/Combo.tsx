import React from 'react';
import  twoPizza from "../../assets/combo/two-pizza.png";
import combo from "../../assets/combo/combo.png";

const Combo = () => {
    return (
        <section id="combo" className="combo">
            <div className="container">
                <h2>Комбо</h2>
                <div className="grid__container">
                    <div className="grid__elem">
                        <img src={twoPizza} alt="комбо за 599"/>
                        <h3>Комбо за 599 &#8381;</h3>
                        <p>
                            Наш хит "Аррива!" или другая пицца 25см, Додстер, напиток и
                            соус.
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">599 &#8381;</p>
                            <div className="button_orange">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={twoPizza} alt="2 пиццы"/>
                        <h3>2 пиццы</h3>
                        <p>Самое популярное комбо из 2 пицц 30 см. Большой выбор</p>
                        <div className="grid__elem_bottom">
                            <p className="price">899 &#8381;</p>
                            <div className="button_orange">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={twoPizza} alt="2 пиццы и закуска"/>
                        <h3>2 пиццы и закуска</h3>
                        <p>
                            2 пиццы 25 см и закуска на выбор. Для компании из 2–4 человек
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">799 &#8381;</p>
                            <div className="button_orange">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={twoPizza} alt="пицца и 2 закуски"/>
                        <h3>Пицца и 2 закуски</h3>
                        <p>
                            Пицца 30 см и 2 закуски на выбор. Для компании из 2–4 человек
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">799 &#8381;</p>
                            <div className="button_orange">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={combo} alt="комбо за 999"/>
                        <h3>Комбо за 999 &#8381;</h3>
                        <p>
                            3 пиццы 30 см на тонком тесте по суперцене. Выбор пицц
                            ограничен
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">999 &#8381;</p>
                            <div className="button_orange">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Combo;