import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchDark from '../../images/search-dark.svg';
import searchLight from '../../images/search-light.svg';
import historyDark from '../../images/clock-rotate-left-dark.svg';
import historyLight from '../../images/clock-rotate-left-light.svg';
import houseDark from '../../images/house-dark.svg';
import houseLight from '../../images/house-light.svg';
import xMarkDark from '../../images/xmark-dark.svg';
import xMarkLight from '../../images/xmark-light.svg';
import { WordDataContextProvider } from '../../contexts/WordDataContext.jsx';
import NavLinks from './NavLinks.jsx';
import Loader from '../Loader.jsx';

export default function MainSection({ theme, userData, setUserData }) {

    // Object of objects for icons of light and dark themes respectively.
    const iconMap = {
        'light': { search: searchDark, history: historyDark, home: houseDark, xMark: xMarkDark },
        'dark': { search: searchLight, history: historyLight, home: houseLight, xMark: xMarkLight },
    };

    // Getting icons based on current theme.
    const searchIcon = iconMap[theme].search;
    const historyIcon = iconMap[theme].history;
    const homeIcon = iconMap[theme].home;
    const xMarkIcon = iconMap[theme].xMark;

    return (
        <WordDataContextProvider value={{ homeIcon, searchIcon, historyIcon, xMarkIcon, userData, setUserData }}>
            <main className={`main ${theme}`}>
                <NavLinks />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </WordDataContextProvider>
    );
};

MainSection.propTypes = {
    theme: PropTypes.string.isRequired,
    userData: PropTypes.array.isRequired,
    setUserData: PropTypes.func.isRequired,
};
