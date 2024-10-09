import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const Home = lazy(() => import('../Pages/Home/Home'))

const GlobalRoute = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <div>Loading...</div>
            }>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

            </Suspense>
        </BrowserRouter>
    )
}

export default GlobalRoute