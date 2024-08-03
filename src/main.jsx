import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
const History = lazy(() => import('./components/history/History.jsx'));
const WelcomeScreen = lazy(() => import('./components/welcomeScreen/WelcomeScreen.jsx'));
const Search = lazy(() => import('./components/search/Search.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Dictionary/' element={<App />} >
      <Route index element={<WelcomeScreen />} />
      <Route path='search' element={<Search />} />
      <Route path='search/:searchWordParam' element={<Search />} />
      <Route path='history' element={<History />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
