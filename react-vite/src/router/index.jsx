import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../components/HomePage/HomePage';
import AlbumListings from '../components/AlbumListings/AlbumListings';
import AlbumDetails from '../components/Album/AlbumDetails';
import UserProfile from '../components/UserProfile/UserProfile';
import Checkout from '../components/Checkout/Checkout';
import About from '../components/Footer/About';
import { albumLoader } from './album';
import ManageSupportedBys from '../components/SupportedBy/ManageSupportedBys';
import { getSupportedBys } from './supportedbys';
import { getShoppingCart } from './shoppingcart';
import ManageAlbum from '../components/ManageAlbum/ManageAlbum';
import AddSongModal from '../components/HomePage/AddSongModal';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: async () => {
          try {
            const response = await fetch("/api/albums");
            if (response.ok) {
              return await response.json();
            } else {
              throw new Error("Failed to fetch albums");
            }
          } catch (error) {
            console.error(error);
            return [];
          }
        }
      },
      {
        path: "/albums",
        element: <AlbumListings />,
        loader: async () => {
          try {
            const response = await fetch("/api/albums");
            if (response.ok) {
              return await response.json();
            } else {
              throw new Error("Failed to fetch albums");
            }
          } catch (error) {
            console.error(error);
            return [];
          }
        }
      },
      {
        path: "/albums/:albumId",
        element: <AlbumDetails />,
        loader: albumLoader // Ensure albumLoader handles errors as well
      },
      {
        path: "/manage-albums",
        element: <ManageAlbum />,
        loader: async () => {
          try {
            const response = await fetch("/api/albums");
            if (response.ok) {
              return await response.json();
            } else {
              throw new Error("Failed to fetch albums");
            }
          } catch (error) {
            console.error(error);
            return []; // Return an empty array in case of an error
          }
        }
      },
      {
        path: "/user",
        element: <UserProfile />,
        loader: async () => {
          try {
            const response = await fetch("/api/albums");
            if (response.ok) {
              return await response.json();
            } else {
              throw new Error("Failed to fetch albums");
            }
          } catch (error) {
            console.error(error);
            return []; // Return an empty array in case of an error
          }
        }
      },
      {
        path: "/user/reviews",
        element: <ManageSupportedBys />,
        loader: getSupportedBys
      },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: getShoppingCart
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/song",
        element: <AddSongModal />
      }
    ]
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
]);
