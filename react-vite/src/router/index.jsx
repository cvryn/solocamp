import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Checkout from '../components/Checkout/Checkout';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: ""
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
