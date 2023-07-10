/* eslint-disable @next/next/no-img-element */
"use client";
import React, { Component } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

};

export default function Slideshow() {
  return (
    <div className="">
      <Slider {...settings}>
        <div className="each-slide ">
          <div className="pb-5 pl-6 pr-6 pt-7 ">
            <div className="flex justify-center text-center">
              <img
                className=""
                src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg"
                alt=""
              />
            </div>
            <h2 className="m-4 flex justify-center font-medium text-xl text-text-grey">
              Elegí como pagar
            </h2>
            <p className="h-[36px] w-[352px]flex flex-col text-center mt-1 mb-2.5  text-text-grey2">
              <span className=" h-auto w-auto">
                Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin
                tarjeta con Mercado Crédito.
              </span>
              <a
                className="flex flex-col text-center text-blue-500 "
                href="https://www.mercadolibre.com.ar/pagar-online-con-mercadopago"
              >
                Cómo pagar tus compras
              </a>
            </p>
          </div>
        </div>
        <div className="each-slide">
          <div className="w-auto pb-5 pl-6 pr-6 pt-7">
            <div className="flex justify-center text-center">
              <img
                src="	https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg"
                alt=""
              />
            </div>
            <h2 className="m-4 flex justify-center font-medium text-xl text-text-grey">
              Envío gratis desde $ 8.000
            </h2>
            <p className="h-[36px] w-[352px]flex flex-col text-center mt-1 mb-2.5  text-text-grey2">
              <span className=" h-auto w-auto">
                Solo por estar registrado en Mercado Libre tenés envíos gratis
                en miles de productos. Es un beneficio de Mercado Puntos.
              </span>
              <a
                className="flex flex-col text-center text-blue-500"
                href="https://www.mercadolibre.com.ar/mercado-puntos/envio-gratis"
              >
                Conocé más sobre este beneficio
              </a>
            </p>
          </div>
        </div>
        <div className="each-slide">
          <div className="w-auto pb-5 pl-6 pr-6 pt-7">
            <div className="flex justify-center text-center">
              <img
                src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg"
                alt=""
              />
            </div>
            <h2 className="m-3 flex justify-center font-medium text-xl text-text-grey">
              Seguridad, de principio a fin
            </h2>
            <p className="h-[36px] w-[352px]flex flex-col text-center mt-1 mb-2.5  text-text-grey2">
              <span className=" h-auto w-auto">
                ¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no
                puedas hacer, porque estás siempre protegido.
              </span>
              <a
                className="flex flex-col text-center text-blue-500  "
                href="https://www.mercadolibre.com.ar/seguridad"
              >
                Cómo te protegemos
              </a>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
