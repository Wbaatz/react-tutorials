
//React router
//fetching and sending data.
//Routing->
//with out react --> page change=new request+response -->html is requested and loaded
//-->when building complex user interfaces, we typically build single page application (SPAs)
//-->only one initial html request &response.
//--> page (URL) changes are then handled by client-side React code.
//-->visible content is changed without fetching a new html file.
//-->watches the url and simply loaded a different react componenet when the url changes.
//-->npm install react-router-dom

//the react-router-dom also supports dynamic paths segments or path parameters.
//you add a paramter to the path. so such a dynamic path segment like
//--->'/products/:productId'
import Home from './Home';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import React from 'react'
import About from './About';
import Error from './Error';
import Root7 from './Root7';
import Products from './Products';
import ProductDetails from './ProductDetails';
const router=createBrowserRouter([
  {
  path:'/',
  element:<Root7/>,
  errorElement:<Error/>,
  children:[
    {path:'/',element:<Home/>},
    {path:'/About',element:<About/>},
    {path:'/Products',element:<Products/>},
    {path:'/Products/:prodId',element:<ProductDetails/>},
  ],
  },
]);
const Tut7 = () => {
  return <RouterProvider router={router}/>
   
  
}

export default Tut7