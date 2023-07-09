import React, {useCallback, useEffect, useState} from 'react';
import {axiosApi} from "../../axiosApi";
import {IGoodsCategory, IGoodsData, IPopular} from "../../types";
import Popular from "../../components/Popular/Popular";
import Pizza from "../../components/Pizza/Pizza";
import Combo from "../../components/Combo/Combo";
import Snacks from "../../components/Snacks/Snacks";
import Sweets from "../../components/Sweets/Sweets";
import Drinks from "../../components/Drinks/Drinks";
import Skeleton from "../../components/Skeleton/Skeleton";

const Home = () => {
    const [goods,setGoods] = useState<IGoodsCategory | null>(null);
    const[popularDishes,setPopularDishes] = useState<IPopular[]>([]);
    const[loading,setLoading] = useState(false);

    const fetchData = useCallback(async ()=>{
        try{
            setLoading(true)
            const response = await axiosApi<IGoodsData>(`items`);
            const goods = response.data
            const listOfPizza = goods[0];

            if(!listOfPizza){
                setGoods(null);
                return;
            }

            setGoods(listOfPizza);
        }finally {
            setLoading(false);
        }
    },[]);

    const getPopularDishes = useCallback(async ()=>{
        try{
            setLoading(true)
            const response = await axiosApi<IPopular[]>(`elements`);
            const dishes = response.data;

            if(!dishes){
                setPopularDishes([]);
                return;
            }

            setPopularDishes(dishes);
        }finally {
            setLoading(false);
        }
    },[]);

    useEffect(()=>{
        void fetchData();
        void getPopularDishes();
    },[fetchData,getPopularDishes]);

    return (
        <div className="container">
            {!loading && goods ?
                <>
                    <Popular popularList={popularDishes}/>
                    {goods["Пицца"] && <Pizza pizzaList={goods["Пицца"]}/>}
                    {goods["Комбо"] && <Combo comboList={goods["Комбо"]}/>}
                    {goods["Закуски"] && <Snacks snacks={goods["Закуски"]}/>}
                    {goods["Десерты"] && <Sweets sweets={goods["Десерты"]}/>}
                    {goods["Напитки"] && <Drinks drinks={goods["Напитки"]}/>}
                </> : <div className="grid__container" >
                    {[...new Array(8)].map((_,index) =>(
                        <Skeleton key={index}/>
                    ))}
                </div>
            }
        </div>
    );
};

export default Home;