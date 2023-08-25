import { FC } from "react";
import styles from './Item.module.scss'
import { Link } from "react-router-dom";
import { IProduct } from "./IProduct";


const Item: FC<IProduct> = ({id, title, price, description, images}) => {
  return (
    <Link to={'/products/' + id} className={styles.product}>
      <div className={styles.img}>
        <img src={images[0]} alt={title} />
      </div>
      <div className={styles.info}>
        <div>
          <h4 className={styles.name}>{title}</h4>
          <p className={styles.type}>{description}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>
            <span className={styles.new}>{price}$</span>
            <span className={styles.old}>{Math.floor(price * 0.8)}$</span>
          </div>
          <div className={styles.counter}>
            <span>{Math.floor(Math.random() * 20 + 1)} </span>
            people purchased
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
