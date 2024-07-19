import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Headder, Fotter } from '../../utils/components';
import Loader from '../assets/icons/loadder.svg';

const HomeMainPage = React.lazy(() => import('../pages/HomePage/HomeMainPage'));
const PageNotFound = React.lazy(() => import('../pages/404/PageNotFound'));

const AppRoutes = () => {
    const [showFallback, setShowFallback] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFallback(true);
        }, 6000); // 2 seconds delay

        // Clear timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Headder />
            <React.Suspense fallback={
                showFallback ? (
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        width: "100vw",
                        backgroundColor: "rgba(255, 255, 255, 0.5)"
                    }}>
                        <img src={Loader} alt="Loading..." height={100} width={100} />
                    </div>
                ) : null
            }>
                <Routes>
                    <Route path="/" element={<HomeMainPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </React.Suspense>
            <Fotter />
        </Router>
    );
};

export default AppRoutes;
