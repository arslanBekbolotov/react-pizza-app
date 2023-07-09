import React from 'react';
import PizzaItem from "./PizzaItem";
import {IGoods} from "../../types";
import Skeleton from "../Skeleton/Skeleton";

interface Props{
    pizzaList:IGoods[];
}

const Pizza:React.FC<Props>= ({pizzaList}) => {
    return (
        <section id="pizza" className="pizza">
            <div className="container">
                <h2>Пицца</h2>
                <div className="grid__container">
                    {pizzaList.map(pizza=>(
                        <PizzaItem key={pizza.id} pizza={pizza}/>))}
                </div>
            </div>
        </section>
    );
};

export default Pizza;