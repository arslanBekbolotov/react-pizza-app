import React from 'react';
import halfsPizza from "../../assets/pizza/halfs-pizza.png";
import heartPizza from "../../assets/pizza/heart-pizza.png";
import heartPie from "../../assets/pizza/heart-pie.png";
import chedder from "../../assets/pizza/chedder.png";
import blueChikken from "../../assets/pizza/blue-chikken.png";
import salmon from "../../assets/pizza/salmon.png";
import cheezzy from "../../assets/pizza/cheezzy.png";
import pepperoni from "../../assets/pizza/pepperoni.png";

const Pizza = () => {
    return (
        <section id="pizza" className="pizza">
            <div className="container">
                <h2>Пицца</h2>
                <div className="grid__container">
                    <div className="grid__elem">
                        <img
                            src={halfsPizza}
                            alt="пицца из половинок"
                        />
                        <h3>Пицца из половинок</h3>
                        <p>Соберите свою пиццу 35см с двумя разными вкусами</p>
                        <div className="grid__elem_bottom">
                            <p className="price">от 600 &#8381;</p>
                            <div className="button_orange js-modalButton">
                                <button>Собрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={heartPizza} alt="пепперони пицца"/>
                        <h3>Пепперони пицца</h3>
                        <p>Пикантная пепперони, моцарелла, томатный соус</p>
                        <div className="grid__elem_bottom">
                            <p className="price">от 625 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={heartPie} alt="пирог-сердце"/>
                        <h3>Пирог-сердце</h3>
                        <p>Ананасы, брусника, сгущенное молоко</p>
                        <div className="grid__elem_bottom">
                            <p className="price">от 625 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={chedder} alt="чиззи чеддер"/>
                        <h3>Чиззи чеддер</h3>
                        <p>
                            Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус,
                            чеснок, итальянские травы
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">от 625 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img
                            src={blueChikken}
                            alt="цыпленок блю чиз"
                        />
                        <h3>Цыпленок блю чиз</h3>
                        <p>Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо</p>
                        <div className="grid__elem_bottom">
                            <p className="price">от 445 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={salmon} alt="Нежный лосось"/>
                        <h3>Нежный лосось</h3>
                        <p>
                            Лосось, томаты черри, соус песто, моцарелла, соус альфредо
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">от 495 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={cheezzy} alt="сырная"/>
                        <h3>Сырная</h3>
                        <p>
                            Увеличенная порция моцареллы, сыры чеддер и пармезан, соус
                            альфредо
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">от 245 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={pepperoni} alt="пепперони"/>
                        <h3>Пепперони фреш</h3>
                        <p>
                            Пикантная пепперони, увеличенная порция моцареллы, томаты,
                            томатный соус
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">от 245 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>Выбрать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pizza;