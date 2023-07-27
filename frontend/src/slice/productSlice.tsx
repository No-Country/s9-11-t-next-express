"use client";

import axios from 'axios'
import { useEffect, useState } from 'react';
const baseUrl= 'http://localhost:3001/api/meliclon/v1'

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




  export const fetchData = async () => {
    try {
      const response = await axios.get('https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/products');
      const data = await response.data;
      console.log(data)
      return data
    } catch (error) {
      console.error(error);
    }
  };
  export const fetchProductData = async (productId) => {
    try {
      const apiUrl = `https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/products/${productId}`;
      const response = await axios.get(apiUrl);
      const data = await response.data;
      console.log('Espera');
      
     console.log(data);
     
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  export const fetchDataReview = async (accessToken,id) => {
    console.log(accessToken, "soy token")
    try {
      const url = `https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/reviews/${id}`;
  
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
  
      const data = response.data;
      return data;
    } catch (error) {
      throw error;
    }
  };

  

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(endpoint);
    const  data = await response.data
    console.log('soy response',response)
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
    try {
    } catch (error) {
      console.log(error);
    }
  }, []);
console.log('soydata',data)
  return data;
};



export default useFetch;

  

  