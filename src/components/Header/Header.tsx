import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes.ts";
import { useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "../../redux/store";

import styles from "./Header.module.scss";

import LOGO from "../../assets/images/logo.svg";
import AVATAR from "../../assets/images/guest.svg";
import SEARCH from "../../assets/images/search.svg";
import HEART from "../../assets/images/heart.svg";
import CART from "../../assets/images/cart.svg";
import { toggleShowForm } from "../../redux/user.ts";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/apiSlice";

const Header = () => {
    const dispatch = useStoreDispatch();
    const { info, isLogin, isShowForm, favorite, cart } = useSelector((state: RootState) => state.user);
    const [userInfo, setUserInfo] = useState({ name: "Guest", avatar: AVATAR });
    const [searchValue, setSearchValue] = useState('');
    const handleChange = ({ target }) => setSearchValue(target.value);
    const { data: products, isLoading } = useGetProductsQuery({ title_like: searchValue, _limit: 5 });


    useEffect(() => {
        if (!isLogin) {
            setUserInfo({ name: 'Guest', avatar: AVATAR });
        } else {
            setUserInfo({ name: info.name, avatar: info.avatar });
        }

    }, [info]);

    const handleClick = () => {
        if (!info) {
            dispatch(toggleShowForm());
        }
    };

    return (
        <header className={styles.header}>
            <div>
                <Link className={styles.logo} to={ROUTES.HOME}>
                    <img src={LOGO} alt="" />
                </Link>
            </div>
            <div className={styles.main}>
                <button
                    className={styles.user}
                    disabled={isShowForm}
                    onClick={handleClick}
                >
                    <div className={styles.logo}>
                        <img src={userInfo.avatar} alt="" />
                    </div>
                    <div className={styles.username}>{userInfo.name}</div>
                </button>
                <form action="#" className={styles.search}>
                    <img src={SEARCH} alt="" />
                    <input
                        type="text"
                        placeholder="Search for anything..."
                        autoComplete="off"
                        className="search__input"
                        value={searchValue}
                        onChange={handleChange}
                    />
                    {
                        searchValue.length == 0 ? '' :
                            <div className={styles.dropdown}>
                                {isLoading ? 'Loading...' : !products.length ? 'No results' :
                                    products.map((el, index) => (
                                        <Link to={'/products/' + el.id} className={styles.product} key={index}>
                                            <img className={styles['product-img']} src={`${el.images[0]}`} alt="" />
                                            <span className={styles['product-name']}>{el.title}</span>
                                        </Link>
                                    ))}
                            </div>
                    }

                </form>
                <div className={styles.btns}>
                    <Link className={styles.favorite} to={ROUTES.FAVORITE}>
                        <img src={HEART} alt="" />
                        <span className={styles.count}>{favorite.length}</span>
                    </Link>
                    <Link className={styles.cart} to={ROUTES.CART}>
                        <img src={CART} alt="" />
                        <span className={styles.count}>{cart.length}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};
// Сделать через svg компоненты или прото вставить svg чтобы менять цвет картинки при наведении

export default Header;
