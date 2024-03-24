import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './assets/Layouts/MainLayout';
import Home from './Home/Home';
import Blogs from './Home/Blogs';
import BookMarks from './Home/BookMarks';
import BlogPage from './Components/BlogPage';
import Content from './Components/Content';
import Author from './Components/Author';

const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/blogs',
        element : <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path : '/blog/:id',
        element: <BlogPage></BlogPage>,
        loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children : [
          {
            index : true,
            element : <Content></Content>,
            loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
          },
          {
            path : 'author',
            element : <Author></Author>,
            loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
          }
        ]
      },
      {
        path : '/bookmarks',
        element : <BookMarks></BookMarks>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
