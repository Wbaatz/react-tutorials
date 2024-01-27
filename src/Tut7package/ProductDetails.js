//we need to know now that which exact product this page was loaded.which product id was used.
//so that we could reach out to backend api and a databse to fetch the data for that specific product and display it on the screen
//react-router-dom gives us another tool for getting hold of the actual value used instead of that placeholder.
//using the useParams hook.
import { useParams } from 'react-router-dom'
import React from 'react'

const ProductDetails = () => {
const params=useParams();




  return (
    <div>
        
        <h1>ProductDetails</h1>
        <p1>{params.prodId}</p1>
    </div>
  )
}

export default ProductDetails