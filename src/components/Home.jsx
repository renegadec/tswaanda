import React from 'react';
import styles from '../style';
import About from './About';
import AppFeatures from './AppFeatures';
import CTA from './CTA';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Services from './Services';
import Stats from './Stats';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
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
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
        </div>
    );
};

export default Home;