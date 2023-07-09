import React from 'react';
import {IGoods} from "../../types";
import Drink from "./Drink";

interface Props{
    drinks:IGoods[];
}

const Drinks:React.FC<Props> = ({drinks}) => {
    return (
        <section id="drink" className="drinking">
            <div className="container">
                <h2>Напитки</h2>
                <div className="grid__container">
                    {drinks.map(drink=>(
                        <Drink key={drink.id} drink={drink}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Drinks;