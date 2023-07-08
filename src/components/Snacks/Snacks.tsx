import React from 'react';
import soup from "../../assets/snacks/soup.png";
import dodster from "../../assets/snacks/dodster.png";
import spiseDodster from "../../assets/snacks/spise-dodster.png";
import chipotleDodster from "../../assets/snacks/chipotle-dodster.png";

const Snacks = () => {
    return (
        <section id="snacks" className="snacks">
            <div className="container">
                <h2>Закуски</h2>
                <div className="grid__container">
                    <div className="grid__elem">
                        <img
                            src={soup}
                            alt="томатный суп с гренками"
                        />
                        <h3>Томатный суп с гренками</h3>
                        <p>
                            Горячий суп с пшеничными гренками на основе фирменного соуса
                            из итальянских томатов
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">99 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img
                            src={soup}
                            alt="томатный суп с митболами"
                        />
                        <h3>Томатный суп с митболами</h3>
                        <p>
                            Горячий суп c митболами из говядины и маслинами на основе
                            фирменного соуса из итальянских томатов
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">149 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={dodster} alt="додстер"/>
                        <h3>Додстер</h3>
                        <p>
                            Легендарная горячая закуска с цыпленком, томатами, моцареллой,
                            соусом ранч в тонкой пшеничной лепешке
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">159 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img
                            src={spiseDodster}
                            alt="острый додстер"
                        />
                        <h3>Острый додстер</h3>
                        <p>
                            Горячая закуска с острым цыпленком, перцем халапеньо, солеными
                            огурчиками, томатами, моцареллой и соусом барбекю в тонкой
                            пшеничной лепешке
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">159 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img
                            src={chipotleDodster}
                            alt="додстер Чипотле"
                        />
                        <h3>Додстер Чипотле</h3>
                        <p>
                            Горячая закуска с пикантным соусом чипотле из копченых
                            перчиков, цыпленком, томатами, моцареллой в тонкой пшеничной
                            лепешке
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">159 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Snacks;