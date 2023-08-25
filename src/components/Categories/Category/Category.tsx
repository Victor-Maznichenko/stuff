import { FC } from "react";
import styles from './Category.module.scss'
import { Link } from "react-router-dom";
import { ICategory } from "./ICategory";

const Category: FC<ICategory> = ({id, name, image}) => {
  return (
    <Link to={'/category/' + id} className={styles.category}>
      <div className={styles.img}>
        <img src={image} alt={''} />
      </div>
      <h4 className={styles.name}>{name}</h4>
    </Link>
  );
};

export default Category;
