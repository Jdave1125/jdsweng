import { Route, Routes, useLocation } from 'react-router-dom';
import Welcome from './welcome';
import HomePage from './homepage';
import Portfolio from './portfolio';
import { useEffect, useState, Suspense } from 'react';
import {AnimatePresence} from 'framer-motion'

const preloadComponents = async () => {
    // Perform any preloading logic here
    // For example, you could fetch data, initialize components, etc.
    // Simulate a delay if needed
    await new Promise(resolve => setTimeout(resolve, 1));
  };

const AnimatedRoutes = () =>{
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      preloadComponents().then(() => {
        setLoading(false);
      });
    }, []);

    return (
        <AnimatePresence >
          {loading ? (
            <div className='loader'>Loading...</div>
          ) : (
            <Suspense fallback={<div>Loading...</div>}>
              <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
              </Routes>
            </Suspense>
          )}
        </AnimatePresence>
      );

}

export default AnimatedRoutes;