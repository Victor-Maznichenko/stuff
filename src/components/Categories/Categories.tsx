import { FC } from "react";
import styles from "./Categories.module.scss";
import Category from "./Category/Category";
import { ICategory } from "./Category/ICategory";

interface ICategoriesProps {
  title: string;
  list: Array<ICategory>;
  amount: number;
}

const Categories: FC<ICategoriesProps> = ({ title, list, amount }) => {
  list = list.slice(0, amount);

  return (
    <section className={styles.categories}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.list}>
        {list.map((list, index) => (
          <Category {...list} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
