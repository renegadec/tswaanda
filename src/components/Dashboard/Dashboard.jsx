import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';;
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { useStateContext } from './contexts/ContextProvider';
import './Dashboard.css';
const Dashboard = () => {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-mainDarkBg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-lightGray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondaryDarkBg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondaryDarkBg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-mainDarkBg  bg-mainBg min-h-screen md:ml-72 w-full  '
                : 'bg-mainBg dark:bg-mainDarkBg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-mainBg dark:bg-mainDarkBg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Outlet></Outlet>
            </div>
            <Footer />
          </div>
        </div>
    </div>
    );
};

export default Dashboard;