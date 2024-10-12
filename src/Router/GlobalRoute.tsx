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
        {/* header */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* fotter */}
        {/*<Footer />*/}
      </Suspense>
    </BrowserRouter>
  )
}

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full screen height to vertically center
    width: '100vw',  // Full screen width to horizontally center
  },
  loader: {
    width: '100px',  // Adjust size as needed
    height: '100px',
  },
}

export default GlobalRoute
