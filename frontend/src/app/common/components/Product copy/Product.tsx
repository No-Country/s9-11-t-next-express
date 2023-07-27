import React from "react";
import { ProductData } from '../types';
import Link from "next/link";
import Image from "next/image";

interface ProductProps {
    product: ProductData;
  }

//   const Product: React.FC<ProductProps> = ({ product }) => {

export default function Product({ product  }) {

  const truncatedPrice = (parseFloat((product.price / 9).toFixed(2)) * 1000).toFixed(2);
// console.log(product.images[0])
  return (
    <div className="max-w-[250px] rounded-3xl m-5 bg-white">
      <Link href={`/pages/products/${product._id}`}>
        <div className="rounded-3xl">
          <Image
          width={300}
          height={282}
            className="w-[300px] h-[282px] rounded-t-lg"
            src={product.images ? product.images[0] : 'https://res.cloudinary.com/dgsrbbfma/image/upload/v1690159807/No-country-s9/Products/qyyrh813zsn6khwop43q.png'}
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
      </Link>
    </div>
    // <h1>HOla</h1>
  );
}
