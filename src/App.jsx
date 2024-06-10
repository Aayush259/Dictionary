import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

export default function App() {

  // Getting initialUserData from local storage. If it is not present then adding default data.
  const initialUserData = JSON.parse(localStorage.getItem('userData')) || ['dark', []];

  // Initializing a state which will help to update the local storage for userData.
  const [userData, setUserData] = useState(initialUserData);

  // Theme state.
  const [theme, setTheme] = useState(userData[0]);

  // Updates the localStorage when the theme or userData updates.
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify([theme, ...userData.slice(1)]));
  }, [userData, theme]);

  // This function toggle the theme state between light and dark.
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
    <div id='body' className={`${theme} flex`}>
      <Header theme={theme} changeTheme={changeTheme} />
      <MainSection theme={theme} setUserData={setUserData} userData={userData} />
      <Footer theme={theme} />
    </div>
    </>
  );
};