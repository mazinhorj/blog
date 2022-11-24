import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import Post from './routes/Post';
import Admin from './routes/Admin';
import EditPost from './routes/EditPost';

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/posts/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
