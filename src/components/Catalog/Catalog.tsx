import { FC, useState } from "react";
import styles from "./Catalog.module.scss";
import Item from "./Item/Item";
import Button from "../Button/Button";
import { IProduct } from "./Item/IProduct";

interface IProductsProps {
  title: string;
  list: Array<IProduct>;
  amount: number;
}

const Catalog: FC<IProductsProps> = ({ title, list, amount }) => {
  const [count, setCount] = useState(amount);
  const more: boolean = list.length > count;

  // Функция увеличивающая число отображаваемых товаров
  const increaseAmount = () => {
    setCount(count + 15);
  };

  list = list.slice(0, count);


  return (
    <section className={styles.products}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.list}>
        {list.map(
          (product, index) => (
            <Item
              {...product}
              key={index}
            />
          )
        )}
      </div>
      {more ? <Button onClick={increaseAmount} >See more</Button> : ""}
    </section>
  );
};

export default Catalog;
