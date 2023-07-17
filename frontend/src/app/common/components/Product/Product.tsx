import React from "react";
import { ProductData } from "../types";

// interface ProductProps {
//     product: ProductData;
//   }

//   const Product: React.FC<ProductProps> = ({ product }) => {

export default function Product({ product }) {
  const truncatedPrice = (product.price / 9).toFixed(2);
  return (
    <div className="max-w-[250px] rounded-3xl m-5">
      <div className="rounded-3xl">
        <img
          className="w-[300px] h-[282px] rounded-t-lg"
          src={`${product.images[0]}`}
          alt=""
        />
      </div> 
      <div className="bg-white max-w-[250px] p-4 rounded-b-lg">
        <h1 className="h-14 text-sm">{product.name}</h1>
        <p className="h-6 text-2xl">${product.price}</p>
        <p className="text-verde-meli">
          Mismo precio en 9 cuotas de $ {truncatedPrice}
        </p>
        <p className="text-verde-meli">Envio Gratis</p>
      </div>
    </div>
  );
}
