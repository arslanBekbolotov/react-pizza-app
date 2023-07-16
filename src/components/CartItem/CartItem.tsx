import React from "react";
import { IGoodsMutation } from "../../types";
import "./CartItem.css";
import { addProducts, minusProducts } from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";

interface Props {
  cartItem: IGoodsMutation;
  onClickRemove: React.MouseEventHandler;
}
const CartItem: React.FC<Props> = ({ cartItem, onClickRemove }) => {
  const dispatch = useAppDispatch();

  const oncClickPlus = () => {
    dispatch(addProducts(cartItem));
  };

  const onClickMinus = () => {
    dispatch(minusProducts(cartItem.id));
  };

  return (
    <div className="cart__element">
      <img src={cartItem.imageUrl} alt={cartItem.title} />
      <div className="cart__element_info">
        <p className="cart__element_title">{cartItem.title}</p>
        <p>Тонкое тесто 30см</p>
      </div>
      <div className="cart__element_block">
        <button className="btn--cart btn__minus" onClick={onClickMinus}>
          -
        </button>
        <p className="cart__element_count">{cartItem.count}</p>
        <button className="btn--cart btn__plus" onClick={oncClickPlus}>
          +
        </button>
      </div>
      <p className="cart__element_price">{cartItem.price} &#8381;</p>
      <button
        className="btn--cart cart__element_closeBtn"
        onClick={onClickRemove}
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
