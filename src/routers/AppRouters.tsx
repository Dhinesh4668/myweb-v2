
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Headder, Fotter } from '../../utils/components'

const HomeMainPage = React.lazy(() => import('../pages/HomePage/HomeMainPage'));
const PageNotFound = React.lazy(() => import('../pages/404/PageNotFound'));
const AppRoutes = () => {
    return (
        <Router>
            <Headder />
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomeMainPage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </React.Suspense>
            <Fotter />
        </Router>
    );
};

export default AppRoutes;
