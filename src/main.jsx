import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
const History = lazy(() => import('./components/History.jsx'));
const WelcomeScreen = lazy(() => import('./components/WelcomeScreen.jsx'));
const Search = lazy(() => import('./components/Search.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Dictionary/' element={<App />} >
      <Route index element={<WelcomeScreen />} />
      <Route path='/Dictionary/search' element={<Search />} />
      <Route path='/Dictionary/search/:searchWordParam' element={<Search />} />
      <Route path='/Dictionary/history' element={<History />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
