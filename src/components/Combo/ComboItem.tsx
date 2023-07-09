import React from 'react';
import {IGoods} from "../../types";
interface Props{
    comboItem:IGoods;
}

const ComboItem:React.FC<Props> = ({comboItem}) => {
    return (
        <div className="grid__elem">
            <img src={comboItem.imageUrl} alt="комбо за 599"/>
            <h3>{comboItem.title} &#8381;</h3>
            <p>
                {comboItem.description}
            </p>
            <div className="grid__elem_bottom">
                <p className="price">{comboItem.price} &#8381;</p>
                <div className="button_orange">
                    <button>{comboItem.buttonLabel}</button>
                </div>
            </div>
        </div>
    );
};

export default ComboItem;





