import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../components/HomePage/HomePage';
import AlbumListings from '../components/AlbumListings/AlbumListings';
import AlbumDetails from '../components/Album/AlbumDetails';
import Checkout from '../components/Checkout/Checkout';
import { albumLoader } from './album';
import ManageSupportedBys from '../components/SupportedBy/ManageSupportedBys';
import { getSupportedBys } from './supportedbys';
import ManageAlbum from '../components/ManageAlbum/ManageAlbum';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: async () => {
          const response = await fetch("/api/albums");
          if (response.ok) {
              return await response.json();  // This ensures you get the parsed JSON data
          } else {
              throw new Error("Failed to fetch albums");
          }
      }
      //   loader: async ()=> {
      //     return await fetch('/api/albums')
      // }
      },
      {
        path: "/albums",
        element: <AlbumListings />,
        loader: async () => {
          return await fetch("/api/albums")
        }
      },
      {
        path: "/albums/:albumId",
        element: <AlbumDetails />,
        loader: albumLoader,
      },
      {
        path: "/manage-albums",
        element: <ManageAlbum/>
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/supported-by/all",
        element: <ManageSupportedBys />,
        loader: getSupportedBys
      }
    ]
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
]);
