import { useEffect } from 'react'
import {
  useLoaderData,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./App.css"


// function App() {

//   useEffect(() => {
//     let getDog = async () => {
//       let res = await fetch("/api");
//       let resBody = await res.json();
//       console.log(resBody)
//     }
//     getDog();
//   }, []);

//   return <h1>Hello</h1>
// }

const Layout = () => {
  return (
    <>
      <HomePage />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: async () => {
      return await fetch("/api")
    }
  }
]);

const HomePage = () => {
  let data = useLoaderData();

  return (
    <>
      <h1>Hello World!</h1>
      <h2>My Home {data.name}</h2>
      <h2>My Home {data.age}</h2>
    </>
  )
}

function App() {
  return <RouterProvider router={router} />;
}


export default App
