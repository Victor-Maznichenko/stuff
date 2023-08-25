import {FC, useState} from 'react';
import CLOSE from '../../../assets/images/close.svg'
import MINUS from '../../../assets/images/minus.svg'
import PLUS from '../../../assets/images/plus.svg'
import Button from "../../Button/Button";
import styles from "./CartItem.module.scss";
import { IProduct } from '../../Catalog/Item/IProduct';
import { useStoreDispatch } from '../../../redux/store';
import { addToCart, removeFromCart, reduceFromCart } from '../../../redux/user';

const CartItem:FC<IProduct> = (product) => {
    const dispatch = useStoreDispatch();

    return (
        <div className={styles.item}>
            <div className={styles.start}>
                <img className={styles.img} src={product.images[0]} alt=""/>
                <div>
                    <h4 className={styles.title}>{product.title}</h4>
                    <p className={styles.category}>{product.category.name}</p>
                </div>
            </div>
            <div className={styles.price}>{product.price}$</div>
            <div className={styles["count-wrapper"]}>
                <Button onClick={() => dispatch(reduceFromCart(product))} className={styles['count-btn']} variant={'gray'}>
                    <img src={MINUS} alt=""/>
                </Button>
                <span>{product.quantity}</span>
                <Button onClick={() => dispatch(addToCart(product))} className={styles['count-btn']}>
                    <img src={PLUS} alt=""/>
                </Button>
            </div>
            <div className={styles["total-price"]}>{product.price * product.quantity}$</div>
            <button onClick={() => dispatch(removeFromCart(product))} className={styles.close}><img src={CLOSE} alt=""/></button>
        </div>
    );
};

export default CartItem;