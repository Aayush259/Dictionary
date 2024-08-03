import React, { lazy, Suspense, useEffect, useState } from 'react';
import './style.css';
import Loader from './components/Loader.jsx';
const Header = lazy(() => import('./components/header/Header.jsx'));
const MainSection = lazy(() => import('./components/main/MainSection.jsx'));
const Footer = lazy(() => import('./components/footer/Footer.jsx'));
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

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

  // This function toggle the theme state between light and dark.
  const changeTheme = () => {
    // setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div id='body' className="flex">
        <Suspense fallback={<Loader />}>
          <Header theme={theme} changeTheme={changeTheme} />
          <MainSection theme={theme} setUserData={setUserData} userData={userData} />
          <Footer theme={theme} />
        </Suspense>
      </div>
    </>
  );
};
