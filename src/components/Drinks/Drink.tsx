import React from 'react';
import {IGoods} from "../../types";

interface Props{
    drink:IGoods;
}

const Drink:React.FC<Props> = ({drink}) => {
    return (
        <div className="grid__elem">
            <img src={drink.imageUrl} alt="2 колы"/>
            <h3>{drink.title}</h3>
            <p>
                {drink.description}
            </p>
            <div className="grid__elem_bottom">
                <p className="price">{drink.price} &#8381;</p>
                <div className="button_gray js-modalButton">
                    <button>{drink.buttonLabel}</button>
                </div>
            </div>
        </div>
    );
};

export default Drink;