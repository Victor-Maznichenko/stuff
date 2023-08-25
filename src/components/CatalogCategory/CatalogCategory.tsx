import {useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetProductsQuery, useGetCategoryQuery} from "../../redux/apiSlice";
import Item from "../Catalog/Item/Item";
import styles from "./CatalogCategory.module.scss";
import Button from "../Button/Button";

const CatalogCategory = ({amount}) => {
    const {id} = useParams();

    const defaultValues = {
        title_like: "",
        price_gte: 0,
    };

    const defaultParams = {
        category__id: id,
        _limit: amount,
        ...defaultValues,
    };

    const [values, setValues] = useState(defaultValues);
    const [params, setParams] = useState(defaultParams);
    const {data: category, isLoading: isCategoryLoad} = useGetCategoryQuery(id);
    const {data: products, isLoading: isProductsLoad} = useGetProductsQuery(params);
    const isNotEnd = !isProductsLoad ? products.length >= params._limit : '';

    console.log(params)

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
        setParams({ ...params, [name]: value });
    };

    const onMore = () => {
        setParams({...params, _limit: params._limit + amount})
    }

    return (
        <section className={styles.catalog}>
            <h2 className={styles.title}>{!isCategoryLoad ? category.name : ''}</h2>
            <div>
                <div className={styles.top}>
                    <input className={styles.input} type="text" name={'title_like'} value={values.title_like} onChange={handleChange} placeholder={'Product name'}/>
                    <div className={styles['input-price']}>
                        <input className={`${styles.input}`} type="number" name={'price_gte'} value={values.price_gte}  onChange={handleChange}/>
                        <span>Price from</span>
                    </div>
                </div>
                <div className={styles.items}>
                    {!isProductsLoad ? products?.map((el, index) => <Item {...el} key={index} />) : ''}
                </div>
                {isNotEnd ? <Button className={styles.more} onClick={onMore}>See more</Button> : ''}
            </div>
        </section>
    );
};

export default CatalogCategory;