import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Checkout from '../components/Checkout/Checkout';
import HomePage from '../components/HomePage/HomePage';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
]);
