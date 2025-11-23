
import { children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IKContext } from 'imagekitio-react'
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";

import HomePage from "./Routes/HomePage.jsx";
import PostListPage from './Routes/PostListPage.jsx'
import Writes from './Routes/Writes.jsx'
import LoginPage from './Routes/LoginPage.jsx'
import RegisterPage from './Routes/RegisterPage.jsx'
import SinglePostPage from './Routes/SinglePostPage.jsx';
import MainLayOut from './Layouts/MainLayOut.jsx';




// Load env variables
const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT
const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY

const router = createBrowserRouter([
  {
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Writes />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <IKContext urlEndpoint={urlEndpoint} publicKey={publicKey}>
    </IKContext>
  </StrictMode>
)

