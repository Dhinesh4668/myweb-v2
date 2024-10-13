import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingAnimation from '../assets/icons/loadder.svg'
import Header from '../components/Header'

const Home = lazy(() => import('../Pages/Home/Home'))

const GlobalRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div style={styles.loaderContainer}>
          <img src={LoadingAnimation} alt="Loading..." style={styles.loader} />
        </div>
      }>
        {/* Header with sticky behavior */}
        <header style={styles.stickyHeader}>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* fotter */}
        {/* <Footer /> */}
      </Suspense>
    </BrowserRouter>
  )
}

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  },
  loader: {
    width: '100px',
    height: '100px',
  },
  stickyHeader: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
   
  },
}

export default GlobalRoute
