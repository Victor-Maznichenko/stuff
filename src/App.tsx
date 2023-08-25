import { useEffect } from "react";
import { RootState, useStoreDispatch } from "./redux/store";
import {useCookies} from "react-cookie";

import { getCategories } from "./redux/categories";
import {getProducts, postProduct} from "./redux/products";
import { useSelector } from "react-redux";
import {loginUser, unLoginUser} from "./redux/user";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRoutes from "./components/Routes/Routes";
import Sidebar from "./components/Sidebar/Sidebar";
import UserSignUp from "./components/User/UserSignUp/UserSignUp";


function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const { isShowForm, isLogin } = useSelector((state: RootState) => state.user);
  const dispatch = useStoreDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (!Object.keys(cookies).length) return
    dispatch(loginUser({
      email: decodeURIComponent(cookies.email),
      password: decodeURIComponent(cookies.password)
    }));
  }, [cookies, dispatch]);


  function handleRemoveAllCookies() {
    dispatch(unLoginUser());
    for (const key in cookies) {
      removeCookie(key, { path: '/' });
    }
  }

  return (
    <div className={`app ${isShowForm ? 'disabled' : ''}`}>
      <div className="container">
        <div className="wrapper">
          <Header />
          <div className="flex-container">
            <Sidebar />
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </div>
      {isShowForm ? <UserSignUp /> : ""}
      {isLogin ? <button className="exit" onClick={handleRemoveAllCookies}>exit</button> : ''}
    </div>
  );
}

export default App;
