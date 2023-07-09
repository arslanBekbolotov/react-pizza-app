import React from 'react';
import {IGoods} from "../../types";
interface Props{
    pizza:IGoods;
}

const PizzaItem:React.FC<Props> = ({pizza}) => {
    return (
        <div className="grid__elem">
            <img
                src={pizza.imageUrl}
                alt={pizza.title}
            />
            <h3>{pizza.title}</h3>
            <p>{pizza.description}</p>
            <div className="grid__elem_bottom">
                <p className="price">{pizza.price}</p>
                <div className="button_orange js-modalButton">
                    <button>{pizza.buttonLabel}</button>
                </div>
            </div>
        </div>
    );
};

export default PizzaItem;