import React from 'react';
import ComboItem from "./ComboItem";
import {IGoods} from "../../types";

interface Props{
    comboList:IGoods[];
}

const Combo:React.FC<Props> = ({comboList}) => {
    return (
        <section id="combo" className="combo">
            <div className="container">
                <h2>Комбо</h2>
                <div className="grid__container">
                    {comboList.map(combo=>(
                        <ComboItem key={combo.id} comboItem={combo}/>))}
                </div>
            </div>
        </section>
    );
};

export default Combo;