import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IGoods} from "../../types";
import { axiosApi } from "../../axiosApi";
import Skeleton from "../../components/Skeleton/Skeleton";
import Dishes from "../../components/Dishes/Dishes";

const DishesPage = () => {
  const { category } = useParams();
  const [dishes, setDishes] = useState<IGoods[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (category:string) => {
    try {
      setLoading(true);
      const response = await axiosApi<IGoods[]>(`items?category=${category}`);
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

  useEffect(() => {
    if (category) void fetchData(category);
  }, [category, fetchData]);

  return (
    <div className="container">
      {loading ? (
        <div className="grid__container">
          {[...new Array(8)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <div>
          {dishes && category && <Dishes dishes={dishes} title={category.charAt(0).toUpperCase() + category.slice(1)}/>}
        </div>
      )}
    </div>
  );
};

export default DishesPage;
