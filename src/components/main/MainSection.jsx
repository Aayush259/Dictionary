import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WordDataContextProvider } from '../../contexts/WordDataContext.jsx';
import NavLinks from './NavLinks.jsx';
import Loader from '../Loader.jsx';

export default function MainSection({ userData, setUserData }) {

    return (
        <WordDataContextProvider value={{ userData, setUserData }}>
            <main>
                <NavLinks />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </WordDataContextProvider>
    );
};

MainSection.propTypes = {
    userData: PropTypes.array.isRequired,
    setUserData: PropTypes.func.isRequired,
};
