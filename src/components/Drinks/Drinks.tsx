import React from 'react';
import twoColas from "../../assets/drinkin/two-colas.png";
import colaOrange from "../../assets/drinkin/cola-orange.png";
import colaZero from "../../assets/drinkin/cola-ziro.png";
import cola from "../../assets/drinkin/cola.png";
import colaVanilla from "../../assets/drinkin/cola-vanilla.png";

const Drinks = () => {
    return (
        <section id="drink" className="drinking">
            <div className="container">
                <h2>Напитки</h2>
                <div className="grid__container">
                    <div className="grid__elem">
                        <img src={twoColas} alt="2 колы"/>
                        <h3>2 Cola-cola по суперцене</h3>
                        <p>
                            Две классические Coca-Cola по 0,5 литров по выгодной цене, 0,5
                            л
                        </p>
                        <div className="grid__elem_bottom">
                            <p className="price">159 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={colaOrange}alt="кола оранж"/>
                        <h3>Coca-Cola Orange</h3>
                        <p>0,5 л</p>
                        <div className="grid__elem_bottom">
                            <p className="price">99 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={colaZero} alt="зиро"/>
                        <h3>Coca-Cola Zero</h3>
                        <p>0,5 л</p>
                        <div className="grid__elem_bottom">
                            <p className="price">99 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={cola} alt="cola"/>
                        <h3>Coca-Cola</h3>
                        <p>0,5 л</p>
                        <div className="grid__elem_bottom">
                            <p className="price">99 &#8381;</p>
                            <div className="button_gray js-modalButton">
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid__elem">
                        <img src={colaVanilla} alt="vanilla"/>
                        <h3>Coca-Cola Vanilla</h3>
                        <p>0,5 л</p>
                        <div className="grid__elem_bottom">
                            <p className="price">99 &#8381;</p>
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

export default Drinks;