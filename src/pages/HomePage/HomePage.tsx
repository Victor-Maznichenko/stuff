import { useEffect } from "react";

import BannerMain from "../../components/BannerMain/BannerMain";
import Catalog from "../../components/Catalog/Catalog";
import { RootState, useStoreDispatch } from "../../redux/store";
import { filterByPrice } from "../../redux/products";
import { useSelector } from "react-redux";
import Categories from "../../components/Categories/Categories";
import BannerNewYear from "../../components/BannerNewYear/BannerNewYear";

const HomePage = () => {
  const dispatch = useStoreDispatch();
  const {products, categories } = useSelector((state:RootState) => state);


  useEffect(() => {
    if(!products.list.length) return;
    dispatch(filterByPrice(100));
  }, [dispatch, products.list.length]);

  return (
    <>
      <BannerMain />
      <Catalog title={"Trending"} list={products.list} amount={5} />
      <Categories title={"Worth seeing"} list={categories.list} amount={5} />
      <BannerNewYear />
      <Catalog title={"Less than 100$"} list={products.filtered} amount={5} />
    </>
  );
};

export default HomePage;
