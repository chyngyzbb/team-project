import React, { useEffect } from 'react';
import './Shop.scss'
import axios from 'axios';
import ProductCard from '../../ProductCard';

const Shop = () => {
// https://680dcc8ec47cb8074d913800.mockapi.io/products
    
const [product,setProduct]=React.useState([])

 async function getProduct(){
 const res=await axios.get('https://680dcc8ec47cb8074d913800.mockapi.io/products')
setProduct(res.data)

}
console.log(product);

useEffect(()=>{
getProduct()
},[])

    return (
        <div id='shop'>
            <div className="container">
                {/* {
                    product.map((el,idx)=>(
                       <ProductCard el={el} key={idx}/>
                    ))
                } */}
            </div>
            
        </div>
    );
};

export default Shop;