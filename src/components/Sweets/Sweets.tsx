import React from 'react';
import applePie from "../../assets/sweets/apple-pie.png";
import newYork from "../../assets/sweets/new-york.png";
import muale from "../../assets/sweets/muale.png";
import oreo from "../../assets/sweets/oreo.png";
import milk from "../../assets/sweets/milk.png";

const Sweets = () => {
    return (
        <section id="sweets" className="sweets">
            <div className="container">
                <h2>Десерты</h2>
                <div className="grid__container">
                    <div className="grid__elem">
                        <img src={applePie} alt="яблочный пирог"/>
                        <h3>Яблочный пирог</h3>
                        <p>
                            Десерт из песочного теста с яблочной начинкой. Может содержать
                            изюм
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">99 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={newYork} alt="чизкейк Нью-Йорк"/>
                        <h3>Чизкейк Нью-Йорк</h3>
                        <p>Классический американский творожный десерт</p>
                        <div className="grid__elem_bottom">
                            <p className="price">149 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={muale} alt="фонданы"/>
                        <h3>Фонданы, 2 шт</h3>
                        <p>
                            Два десерта с хрустящей корочкой и топлёной шоколадной
                            начинкой
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">159 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={oreo} alt="орео"/>
                        <h3>Молочный коктейль с печеньем Орео</h3>
                        <p>
                            Напиток из молока и мороженого с добавлением дробленого
                            печенья «Орео»
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">159 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={milk} alt="милкшейк"/>
                        <h3>Классический молочный коктейль</h3>
                        <p>Напиток из молока и мороженого</p>
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

export default Sweets;