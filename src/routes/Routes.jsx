import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Services from '../pages/Services';
import AMC from '../pages/AMC';
import Contact from '../pages/Contact';
import Quote from '../pages/Quote';

/**
 * Router Configuration
 * Defines all application routes and their corresponding components
 * Uses React Router v6 createBrowserRouter API
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/amc',
        element: <AMC />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/quote',
        element: <Quote />,
      },
    ],
  },
]);
