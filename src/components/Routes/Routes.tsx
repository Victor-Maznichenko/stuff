import {Route, Routes} from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import {ROUTES} from '../../utils/routes';
import ProductPage from "../../pages/ProductPage/ProductPage";
import CategoryPage from "../../pages/CategoryPage/CategoryPage";
import Cart from "../Cart/Cart";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path={ROUTES.PRODUCTS} element={<ProductPage/>}/>
            <Route path={ROUTES.CATEGORIES} element={<CategoryPage/>}/>
            <Route path={ROUTES.CART} element={<Cart/>}/>
        </Routes>
    )
}

export default AppRoutes;