"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch, { fetchData, useGetProducts } from "../../../slice/productSlice";
import Product from '../components/Product/Product';

interface ProductData {
  _id: string;
  name: string;
  price: number;
  description: string;
  characteristics: string[];
  stock: number;
  images: string[];
  qualification: number;
  active: boolean;
  id_user: string;
  id_category: string;
  id_subcategory: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}



export default async function Products() {
  // const [product, setProducts] = useState([]);


  // useEffect(() => {
  //   const fetchProductData = async () => {
  //     try {
  //       const data = await fetchData();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchProductData();
  // }, []);

     const product= await fetchData()
    
    // const product= useFetch('http://localhost:3001/api/meliclon/v1/products')
    //  console.log("soy product",product)

    return (
      <div className=" max-w-[1200px] m-8 flex flex-wrap ">
       {product.map((productos) => (
        

        <Product key={productos._id} product={productos} />
      
      ))}
      </div>

    )
}




