import React, { useEffect,useState } from 'react'
import axios from 'axios';
const Shop = () => {
    const [products, setProducts] = useState()
    const[shop,setShop] = useState()
    const [error,setError]=useState('')

  
useEffect(()=>{
    const getShop=async()=>{
    try {
        const subdomain = window.location.hostname.split('.')[0];

        const response = await axios.get(`http://${subdomain}.localhost:8000`, {
          headers: {
            'content-type': 'application/json',
          },
        });
        setProducts(response.data.products);
        setShop(response.data.shop)
      } catch (error) {
        console.log(error.response.data);
        setError(error.response.data.error)
      }
    };
    getShop(); 

    },[])

    if(error === 'Shop not found'){
        return(
            <h1>shopnotfound</h1>
        )
    }


  return (
    <div>

    {!shop ? 
        <h1>Loading</h1>  
        :
        <div>
          <h1>{shop.shopName}</h1>
          <img src={shop.bannerImages.url} alt={shop.shopName}/>
          <h3>{shop.whatsappNumber}</h3>
  
        </div>
      }
  
  
        {/* Map through products and render them */}
         {!products ? <h1>loading</h1> : products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>Title: {product.title}</h3>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <img src={product.productImage.url} alt={product.title} />
          </div>))}
    </div>

  )
}

export default Shop