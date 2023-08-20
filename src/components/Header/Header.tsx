import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes.ts'

import styles from "./Header.module.scss";

import LOGO from '../../assets/images/logo.svg';
import AVATAR from '../../assets/images/guest.svg';
import SEARCH from '../../assets/images/search.svg';
import HEART from '../../assets/images/heart.svg';
import CART from '../../assets/images/cart.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.start}>
                <Link className={styles.logo} to={ROUTES.HOME}><img src={LOGO} alt="" /></Link>
            </div>
            <div className={styles.main}>
                <Link className={styles.user} to={ROUTES.USER}>
                    <div className={styles.logo}>
                        <img src={AVATAR} alt="" />
                    </div>
                    <div className={styles.username}>Guest</div>
                </Link>
                <form action='#' className={styles.search}>
                    <img src={SEARCH} alt="" />
                    <input type="text" placeholder='Search for anything...' autoComplete='off' className="search__input" />
                </form>
                <div className={styles.btns}>
                    <Link className={styles.favorite} to={ROUTES.FAVORITE}>
                        <img src={HEART} alt="" />
                        {/* <span className={styles.count}>2</span> */}
                    </Link>
                    <Link className={styles.cart} to={ROUTES.CART}>
                        <img src={CART} alt="" />
                        {/* <span className={styles.count}>1</span> */}
                    </Link>
                </div>
            </div>
        </header>
    )
}
// Сделать через svg компоненты или прото вставить svg чтобы менять цвет картинки при наведении

export default Header