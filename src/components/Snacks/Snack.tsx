import React from 'react';
import {IGoods} from "../../types";

interface Props{
    snack:IGoods;
}

const Snack:React.FC<Props> = ({snack}) => {
    return (
        <div className="grid__elem">
            <img
                src={snack.imageUrl}
                alt={snack.title}
            />
            <h3>{snack.title}</h3>
            <p>
                {snack.description}
            </p>
            <div className="grid__elem_bottom">
                <p className="price">{snack.price} &#8381;</p>
                <div className="button_gray js-modalButton">
                    <button>{snack.buttonLabel}</button>
                </div>
            </div>
        </div>
    );
};

export default Snack;