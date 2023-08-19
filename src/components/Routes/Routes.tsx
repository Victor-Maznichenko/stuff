import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home />} path='/'/>
    </Routes>
  )
}

export default AppRoutes;