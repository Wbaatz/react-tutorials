import React from 'react'
//would be quite common to load a separate details page for the different products.
//to view the details of that products.
import { Link } from 'react-router-dom'

const products=[
    {id:'p1',title:'product 1'},
    {id:'p2',title:'product 2'},
    {id:'p3',title:'product 3'},
    {id:'p4',title:'product 4'},
]
//we might be getting the data from the database.
const Products = () => {
  return (
    <div>
        <h1>My Product Lists</h1>
        <ul >
           {products.map((prod) =>( <li key={prod.id}>
            <Link to={`/Products/${prod.id}`}>{prod.title}</Link></li>))}
        </ul>
       
     
        
        
       </div>
  )
}

export default Products