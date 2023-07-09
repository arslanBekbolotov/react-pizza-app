import React from 'react';
import Snack from "./Snack";
import {IGoods} from "../../types";

interface Props{
    snacks:IGoods[];
}

const Snacks:React.FC<Props> = ({snacks}) => {
    return (
        <section id="snacks" className="snacks">
            <div className="container">
                <h2>Закуски</h2>
                <div className="grid__container">
                    {snacks.map(snacks=>(
                        <Snack key={snacks.id} snack={snacks}/>))}
                </div>
            </div>
        </section>
    );
};

export default Snacks;