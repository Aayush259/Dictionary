import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { WordDataContextProvider } from '../../contexts/WordDataContext.jsx';
import NavLinks from './NavLinks.jsx';
import Loader from '../Loader.jsx';

export default function MainSection() {

    return (
        <WordDataContextProvider>
            <main>
                <NavLinks />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </WordDataContextProvider>
    );
};
