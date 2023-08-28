import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './components/Nav';
import { Link } from 'react-router-dom';

const ShopDashboard = () => {
  const [products, setProducts] = useState()
  const[shop,setShop] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [productImage, setProductImage] = useState('')
  const [shopName,setShopName]=useState('')
  const [whatsappNumber,setWhatsappNumber]=useState('')
  const [bannerImage,setBannerImage] = useState('')




  useEffect(() => {
    const getshopproducts = async () => {
    const token = localStorage.getItem('token')

      try {
        const response = await axios.get('http://127.0.0.1:8000/dashboard/getshopproducts', {
          headers: {
            'content-type': 'application/json',
            'Authorization': token,
          },
        });
        setProducts(response.data.userproducts);
        setShop(response.data.shop)
      } catch (error) {
        console.log(error);
      }
    };
    getshopproducts(); // Call the function immediately after defining it
  }, []);


  const handelCreateProduct = async () => {
    try {
      const token = localStorage.getItem('token')
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('productImage', productImage);

      const response = await axios.post('http://127.0.0.1:8000/dashboard/createshopproduct', formData, {
        headers: {
          'content-type': 'multipart/form-data', // Important for file upload
          Authorization: token,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };


  const handelSetUpShop = async()=>{
    try {
      const token = localStorage.getItem('token')
      const formData = new FormData();
      formData.append('shopName', shopName);
      formData.append('whatsappNumber', whatsappNumber);
      formData.append('bannerImages', bannerImage);

      const response = await axios.post('http://127.0.0.1:8000/dashboard/setupshop', formData, {
        headers: {
          'content-type': 'multipart/form-data', // Important for file upload
          Authorization: token,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>
      <Nav />

      {!shop ? 
      <h1>Loading</h1>  
      :
      <div>
        <h1>{shop.shopName}</h1>
        <img src={shop.bannerImages.url}/>
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
      <form>

        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)} />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          type="file"
          placeholder="ProductImage"
          onChange={(event) => setProductImage(event.target.files[0])}
        />
        <Link onClick={handelCreateProduct}>CreateProduct</Link>
      </form> 


       <form>
      <input
          type="text"
          placeholder="shopName"
          value={shopName}
          onChange={(event) => setShopName(event.target.value)} />
        <input
          type="number"
          placeholder="Whatsapp"
          value={whatsappNumber}
          onChange={(event) => setWhatsappNumber(event.target.value)}
        />
        <input
          type="file"
          placeholder="bannerImage"
          onChange={(event) => setBannerImage(event.target.files[0])}
        />
        <Link onClick={handelSetUpShop}>
        Submit
        </Link>
      </form> 

    </div>
  )
}

export default ShopDashboard