"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch, { fetchData /* useGetProducts */ } from "../../../slice/productSlice";
import Product from '../components/Product/Product';
import Link from 'next/link';

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



export default function Products() {
  const [product, setProducts] = useState([]);
  const fetchProductData = async () => {
    try {
      const data = await fetchData();
      setProducts(data);
      console.table(data);
      
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {

    fetchProductData();
  }, []);

    //  const product= await fetchData()
    
    // const product= useFetch('http://localhost:3001/api/meliclon/v1/products')
    //  console.log("soy product",product)

    return (
      <div className=" max-w-[1200px] m-8 flex flex-wrap ">
       {product.map((productos: ProductData) => (
      //    <div key={productos?._id} className="max-w-[250px] rounded-3xl m-5">
      //    <Link href={`/pages/product/${productos?._id}`}>
      //      <div className="rounded-3xl">
      //        <img
      //          className="w-[300px] h-[282px] rounded-t-lg"
      //          src={`${productos?.images[0]}`}
      //          alt=""
      //        />
      //      </div>
      //      <div className="bg-white max-w-[250px] p-4 rounded-b-lg">
      //        <h1 className="h-14 text-sm">{productos?.name}</h1>
      //        <p className="h-6 text-2xl">${productos?.price}</p>
      //        <p className="text-verde-meli">
      //          Mismo precio en 9 cuotas de $ 
      //        </p>
      //        <p className="text-verde-meli">Envio Gratis</p>
      //      </div>
      //    </Link>
      //  </div>
        
        
        <Product key={productos._id} product={productos} />
      
      ))}
      </div>

    )
}




