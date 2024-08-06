import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavLinks from './NavLinks.jsx';
import Loader from '../Loader.jsx';

export default function MainSection() {

    return (
        <main>
            <NavLinks />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </main>
    );
};
