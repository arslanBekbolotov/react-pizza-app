import React, { useCallback, useEffect, useState } from "react";
import { axiosApi } from "../../axiosApi";
import {IGoods, IPopular} from "../../types";
import Popular from "../../components/Popular/Popular";
import Dishes from "../../components/Dishes/Dishes";
import Skeleton from "../../components/Skeleton/Skeleton";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const Home = () => {
  const [dishes, setDishes] = useState<IGoods[]>([]);
  const [popularDishes, setPopularDishes] = useState<IPopular[]>([]);
  const [loading, setLoading] = useState(false);
  const searchValue = useSelector((state:RootState) => state.filter.searchValue);
  const search = searchValue ? `search=${searchValue}` : '';

  const fetchData = useCallback(async (search:string) => {
    try {
      setLoading(true);
      const response = await axiosApi<IGoods[]>(`items?${search}`);
      const dishes = response.data;

      if (!dishes) {
        setDishes([]);
        return;
      }

      setDishes(dishes);
    } finally {
      setLoading(false);
    }
  }, []);

  const getPopularDishes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi<IPopular[]>(`elements`);
      const dishes = response.data;

      if (!dishes) {
        setPopularDishes([]);
        return;
      }

      setPopularDishes(dishes);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData(search);
    void getPopularDishes();
  }, [fetchData, getPopularDishes,search]);

  return (
    <div className="container">
      {!loading && dishes ? (
        <>
          <Popular popularList={popularDishes} />
          <Dishes dishes={dishes} title={"All"}/>
        </>
      ) : (
        <div className="grid__container">
          {[...new Array(8)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
