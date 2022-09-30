import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import styles from "./style";

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
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
          <TooltipComponent content="Settings" position='Top'>

          </TooltipComponent>
        </div>
      </div>
    </BrowserRouter>
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
  </div>
);

export default App;
