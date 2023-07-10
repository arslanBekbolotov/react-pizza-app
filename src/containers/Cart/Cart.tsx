import React from "react";
import "./Cart.css";
import {Link} from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <main>
        <section className="order">
          <div className="container">
            <h1 className="order__title">Заказ на доставку</h1>
            <div className="order__wrapper">
              <div className="order__data">
                <form action="#" className="order__form">
                  <div className="order__name">
                    <span className="order__text">Имя</span>
                    <input
                      type="text"
                      name="name"
                      className="order__input order__input--name"
                      id="orderName"
                    />
                  </div>
                  <div className="order__number">
                    <span className="order__text">Номер телефона</span>
                    <input
                      type="tel"
                      name="tel"
                      className="order__input order__input--tel"
                      id="orderTel"
                      value="+7"
                    />
                  </div>
                  <div className="order__address">
                    <span className="order__text">Куда доставить</span>
                    <input
                      type="text"
                      name="address"
                      className="order__input order__input--address"
                      id="orderAddress"
                    />
                  </div>
                  <div className="order__nav">
                    <Link to={'/'} className="btn--tocart order__tocart tocart">
                      <div className="tocart__picture">
                      </div>
                      <span className="tocart__text order__textbtn">
                        Назад в корзину
                      </span>
                    </Link>
                    <button className="btn--confirm order__confirm confirm">
                      <span className="confirm__text order__textbtn">
                        Оформить заказ на 675 ₽
                      </span>
                      <div className="confirm__picture">
                      </div>
                    </button>
                  </div>
                </form>
              </div>
              <div className="order__list">
                <div className="list__wrapper">
                  <span className="list__title">Состав заказа</span>
                  <div className="list__items">
                    <div className="item-wrap">
                      <div className="item-str">
                        <div className="item__id">Coca-Cola</div>
                        <div className="item__price">75 ₽</div>
                      </div>
                      <div className="item__count">0,5 л</div>
                    </div>
                    <div className="item-wrap">
                      <div className="item-str">
                        <div className="item__id">Coca-Cola</div>
                        <div className="item__price">75 ₽</div>
                      </div>
                      <div className="item__count">0,5 л</div>
                    </div>
                    <div className="item-wrap">
                      <div className="item-str">
                        <div className="item__id">Coca-Cola</div>
                        <div className="item__price">75 ₽</div>
                      </div>
                      <div className="item__count">0,5 л</div>
                    </div>
                    <div className="item-wrap">
                      <div className="item-str">
                        <div className="item__id">Coca-Cola</div>
                        <div className="item__price">75 ₽</div>
                      </div>
                      <div className="item__count">0,5 л</div>
                    </div>
                    <div className="item-wrap">
                      <div className="item-str">
                        <div className="item__id">Coca-Cola</div>
                        <div className="item__price">75 ₽</div>
                      </div>
                      <div className="item__count">0,5 л</div>
                    </div>
                    <div className="item-wrap">
                      <div className="item-str">
                        <div className="item__id">Coca-Cola</div>
                        <div className="item__price">75 ₽</div>
                      </div>
                      <div className="item__count">0,5 л</div>
                    </div>
                    <div className="item-wrap">
                      <div className="item-str">
                        <div className="item__id">Coca-Cola</div>
                        <div className="item__price">75 ₽</div>
                      </div>
                      <div className="item__count">0,5 л</div>
                    </div>
                    <div className="item-wrap">
                      <div className="item-str">
                        <div className="item__id">Coca-Cola</div>
                        <div className="item__price">75 ₽</div>
                      </div>
                      <div className="item__count">0,5 л</div>
                    </div>
                    <div className="item-wrap">
                      <div className="item-str">
                        <div className="item__id">Coca-Cola</div>
                        <div className="item__price">75 ₽</div>
                      </div>
                      <div className="item__count">0,5 л</div>
                    </div>
                    <div className="item-wrap">
                      <div className="item-str">
                        <div className="item__id">Coca-Cola</div>
                        <div className="item__price">75 ₽</div>
                      </div>
                      <div className="item__count">0,5 л</div>
                    </div>
                  </div>
                  <div className="list__price">
                    <span className="list__pricetext">Стоимость заказа</span>
                    <div className="list__sum">675 ₽</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
