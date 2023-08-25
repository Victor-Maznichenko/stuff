import {useSelector} from "react-redux";
import DetailsProduct from "./../../components/DetailsProduct/DetailsProduct";
import {RootState, useStoreDispatch} from "../../redux/store";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {addToCart, addToFavorite} from "../../redux/user";
import {getProduct} from "../../redux/product";
import Catalog from "../../components/Catalog/Catalog";
import {filterByRelated} from "../../redux/products";

const ProductPage = () => {
    const {id} = useParams();
    const dispatch = useStoreDispatch();
    const {product} = useSelector((state: RootState) => state.product);
    const {list, related} = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (!list.length) return
        dispatch(getProduct(id));
        dispatch(filterByRelated(product.category.id));
    }, [dispatch, id, list, product.category.id]);

    return (
        <>
            <DetailsProduct
                {...product}
                addToCart={() => dispatch(addToCart(product))}
                addToFavorite={() => dispatch(addToFavorite(product))}
            />
            <Catalog title="Related products" list={related} amount={5}/>
        </>
    );
};

export default ProductPage;
