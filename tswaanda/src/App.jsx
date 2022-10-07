import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from "./style";
import DashboardApp from './components/dashboard/DashboardApp';

import {
  Navbar,
  Hero,
  Stats,
  About,
  Services,
  AppFeatures,
  Testimonials,
  CTA,
  Footer,
} from "./components/homepage";

const App = () => (
  <div>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <About />
            <Services />
            <AppFeatures />
            <Testimonials />
            <CTA />
            <Footer />
          </div>
        </div>
    </div>
    
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashboardApp />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;


