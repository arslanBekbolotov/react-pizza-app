import React from 'react';
import {IGoods} from "../../types";

interface Props{
    sweet:IGoods;
}

const Sweet:React.FC<Props> = ({sweet}) => {
    return (
        <div className="grid__elem">
            <img src={sweet.imageUrl} alt={sweet.title}/>
            <h3>{sweet.title}</h3>
            <p>
                {sweet.description}
            </p>
            <div className="grid__elem_bottom">
                <p className="price">{sweet.price} &#8381;</p>
                <div className="button_gray js-modalButton">
                    <button>{sweet.buttonLabel}</button>
                </div>
            </div>
        </div>
    );
};

export default Sweet;