import React from "react";
import { IGoods } from "../../types";
interface Props {
  dish: IGoods;
}

const Dish: React.FC<Props> = ({ dish }) => {
  return (
    <div className="grid__elem">
      <img src={dish.imageUrl} alt={dish.title} />
      <h3>{dish.title}</h3>
      <p>{dish.description}</p>
      <div className="grid__elem_bottom">
        <p className="price">{dish.price}</p>
        <div className="button_orange js-modalButton">
          <button>{dish.buttonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default Dish;
