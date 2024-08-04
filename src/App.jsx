import React, { lazy, Suspense, useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ThemeContextProvider } from './contexts/ThemeContext.jsx';
import Loader from './components/Loader.jsx';
const Header = lazy(() => import('./components/header/Header.jsx'));
const MainSection = lazy(() => import('./components/main/MainSection.jsx'));
const Footer = lazy(() => import('./components/footer/Footer.jsx'));

library.add(fas, fab);

export default function App() {

  // Getting initialUserData from local storage. If it is not present then adding default data.
  const initialUserData = JSON.parse(localStorage.getItem('userData')) || ['dark', []];

  // Initializing a state which will help to update the local storage for userData.
  const [userData, setUserData] = useState(initialUserData);

  // Theme state.
  const [theme, setTheme] = useState('light');

  // Updates the localStorage when the theme or userData updates.
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify([theme, ...userData.slice(1)]));
  }, [userData, theme]);

  return (
    <>
      <div className="min-h-screen dark:bg-slate-900 m-0 p-0 overflow-hidden">
        <div
          id='body'
          className="flex flex-col w-[650px] max-w-[95vw] mx-auto my-2 text-slate-950 relative min-h-[80vh] dark:text-violet-200"
        >
          <Suspense fallback={<Loader />}>
            <ThemeContextProvider>
              <Header />
            </ThemeContextProvider>
            <MainSection setUserData={setUserData} userData={userData} />
            {/* <Footer theme={theme} /> */}
          </Suspense>
        </div>
      </div>
    </>
  );
};
