import React, { lazy, Suspense, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Provider } from 'react-redux';
import store from './app/store/store.js';
import Loader from './components/Loader.jsx';
const Header = lazy(() => import('./components/header/Header.jsx'));
const MainSection = lazy(() => import('./components/main/MainSection.jsx'));
import Footer from './components/footer/Footer.jsx';

library.add(fas, fab);

export default function App() {

  // Update theme on first render according to local storage.
  useEffect(() => {
    document.querySelector('html').classList.add(localStorage.getItem('theme'));
  }, []);

  return (
    <>
      <div className="min-h-screen dark:bg-slate-900 m-0 p-0 overflow-hidden relative pb-5">
        <div
          id='body'
          className="flex flex-col w-[650px] max-w-[95vw] mx-auto my-2 text-slate-950 relative min-h-[80vh] dark:text-violet-200"
        >
          <Suspense fallback={<Loader />}>
            <Provider store={store}>
              <Header />
              <MainSection />
            </Provider>
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
};
