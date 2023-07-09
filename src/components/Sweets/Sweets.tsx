import React from 'react';
import Sweet from "./Sweet";
import {IGoods} from "../../types";

interface Props{
    sweets:IGoods[];
}

const Sweets:React.FC<Props> = ({sweets}) => {


    return (
        <section id="sweets" className="sweets">
            <div className="container">
                <h2>Десерты</h2>
                <div className="grid__container">
                    <>
                        {sweets.map(sweet=>(
                            <Sweet key={sweet.id} sweet={sweet}/>))}
                    </>
                </div>
            </div>
        </section>
    );
};

export default Sweets;