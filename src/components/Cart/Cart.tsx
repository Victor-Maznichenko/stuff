import Button from "../Button/Button";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from "react";

const Cart = () => {
    const { cart } = useSelector((state: RootState) => state.user);
    const [price, setPrice] = useState(0);
    
    useEffect(() => {
      let totalPrice = 0;

      cart.forEach((product) => {
        totalPrice += product.quantity * product.price;
      });

      setPrice(totalPrice);
    }, [cart]);
    
    return (
        <section className={styles.cart}>
            <h2 className={styles.title}>Your cart</h2>
            <div>
                {cart.map((product, index) => (
                    <CartItem {...product} key={index} />
                ))}
            </div>
            <div className={styles.footer}>
                <div className={styles.price}>TOTAL PRICE: <span>{price}</span>$</div>
                <Button>Proceed to checkout</Button>
            </div>
        </section>
    );
};

export default Cart;