import { useState, useEffect } from "react"
import { createBrowserRouter, RouterProvider, Outlet, useLoaderData } from "react-router-dom"
import './App.css'


// const Layout = () => {
//   return (
//     <>
//       <h1>Hello World!</h1>
//       {/* <HomePage /> */}
//       {/* <Outlet /> */}
//     </>
//   )
// };

// let getDog = async () => {
// return await fetch("/api")
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     // loader: getDog
//   }
// ]);

// function HomePage() {
//   let data = useLoaderData()
//   return <div>{data.name}</div>
// }

function App() {

  useEffect(() => {
    let getDog = async () => {
      let res = await fetch("/api");
      console.log("🚀 ~ getDog ~ res:", res)
      let resBody = await res.json();
      console.log("🚀 ~ getDog ~ resBody:", resBody)

      // console.log("RESPONSE!!!", resBody)
    }
    getDog();
  }, []);

  return <h1>Hello World!</h1>
  // return <RouterProvider router={router} />
}


export default App
