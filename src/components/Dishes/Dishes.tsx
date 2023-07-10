import React from "react";
import Dish from "./Dish";
import { IGoods } from "../../types";

interface Props {
    title?:string;
    dishes: IGoods[];
}

const Dishes: React.FC<Props> = ({ dishes,title }) => {
    return (
    <section id="pizza" className="pizza">
      <div className="container">
        <h2>{title}</h2>
        <div className={"grid__container"}>
          {dishes.map((dish) => (
            <Dish key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
