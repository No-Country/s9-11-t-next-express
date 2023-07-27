/* eslint-disable @next/next/no-img-element */
"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
// import Slideshow from "./Slides";
import PrimaryButton from "../../../common/components/Buttom/PrimaryButton";
import SecondaryButton from "../../../common/components/Buttom/SecondaryButton";
import BasicRating from "../../../common/components/PageProduct/Rating";
// import { useRouter } from "next/router";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Phone from "../../../../../public/phone.png";
import { MdFavorite } from "react-icons/md";
import Link from "next/link";
import { NextRouter } from "next/router";
import { fetchDataReview, fetchProductData } from "@/slice/productSlice";
import { Button, Rating } from "@mui/material";
import PrimaryButton2 from "@/app/common/components/Buttom/PrimaryButton2";
declare global {
  interface Window {
      FB:any;
  }
}

export default function PageProduct(): ReactElement {

  // let FB = window.FB; 
  const router = useRouter();

  const pathname = usePathname()
  const regex = /\/([\w-]+)$/;
  const match = pathname.match(regex);
  const number = match ? match[1] : null;

  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    characteristics: [],
    qualification: 0,
    description: "",

    images: [],
    id_user: {
      name: "",
      address: "",
    },
  });
  const [productDataReview, setProductDataReview] = useState(null);



  useEffect(() => {
    // Obtenemos el objeto completo almacenado en Local Storage
    const storedData = localStorage.getItem("token");
    const accessToken = storedData ? JSON.parse(storedData).token : null;
    // Si tienes un valor válido de token, realizar la solicitud con él
    if (accessToken) {
      fetchDataReview(accessToken, number)
        .then((data) => {
          setProductDataReview(data);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    } else {
      console.error("Token no encontrado en Local Storage");
    }
  }, [number]);


  useEffect(() => {
    fetchProductData(number)
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [number]);
const [selectedImage, setSelectedImage] = useState(productData.images[0]); 

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  console.log(selectedImage)
  const truncatedPrice = (productData?.price * 1.1).toFixed(3);
  const propsProduc = {
    title:
      'Notebook dell inspiron 3525 plateada 15.5", AMD Ryzen 5 5625U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 7 120 Hz 1920x1080px Windows 11 Home',

    qualification: "2",
    price1: "475.699",
    price2: "495.99",
    description: [
      "Procesador AMD Ryzen 5",
      "Memoria RAM de 8GB",
      "Pantalla LCD de 15.5''",
      "Resolución de 1920x1080 px",
      "Es antirreflejo",
      "Placa de video AMD Radeon RX Vega 7",
      "Conexión wifi y bluetooth",
      "Cuenta con 3 puertos USB y puerto HDMI",
      "Incluye lector de tarjeta de memoria",
      "Posee pad numérico",
      "Modo de sonido Stereo, Realtek ALC3204, HD Audio",
      "La duración de la batería depende del uso que se le dé al producto",
    ],
    available: 999,
    description2:
      'Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.Pantalla con gran impacto visual Su pantalla LCD de 15.5" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. Eficiencia a tu alcance Su procesador AMD Ryzen 5 de 6 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.Potente disco sólido El disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.Un procesador exclusivo para los gráficos Su placa de video AMD Radeon RX Vega 7 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.',
    stars: 4,
  };
  const propsUser = {
    addres: "San martin 1355",
  };
  const propsSeller = {
    category: "MercadoLíder",
  };
  return (
    <div className="w-[1200px] h-auto mx-auto">
      {/* tambien te puede interesar */}
      <div className="flex  justify-between h-auto- w-auto">
        <div className=" flex flex-col ">
          <div className=" flex flex-row mb-4 mt-4">
            <ul className="flex flex-row gap-4">
              <li>También puede interesarte </li>
              <li>
                <a href="https://listado.mercadolibre.com.ar/notebook-mac#topkeyword">
                  notebook mac
                </a>
              </li>
              <li>
                <a href="https://listado.mercadolibre.com.ar/hp-victus#topkeyword">
                  hp victus
                </a>
              </li>
              <li>
                <a href="https://listado.mercadolibre.com.ar/notebook-acer-aspire-5#topkeyword">
                  notebook acer aspire 5
                </a>
              </li>
              <li>
                <a href="https://listado.mercadolibre.com.ar/notebook#topkeyword">
                  notebook
                </a>
              </li>
              <li>
                <a href="https://listado.mercadolibre.com.ar/laptop-apple#topkeyword">
                  laptop apple
                </a>
              </li>
              <li>
                <a href="https://listado.mercadolibre.com.ar/legion-5-pro#topkeyword">
                  legion 5 pro
                </a>
              </li>
              <li>
                <a href="https://listado.mercadolibre.com.ar/macbook-pro-2012#topkeyword">
                  macbook pro 2012
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 mt-4">
            <div className="flex flex-row gap-3">
              <a href="/">Volver al listado</a>
              <nav>
                <ol className="flex flex-row gap-3 text-hipervinculos">
                  <li className="flex flex-row items-center justify-center gap-3">
                    <a href="/" title="Computación">
                      Computación
                    </a>
                    <div aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="8"
                      >
                        <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
                      </svg>
                    </div>
                  </li>
                  <li className="flex flex-row items-center justify-center gap-3">
                    <a
                      href="https://listado.mercadolibre.com.ar/computacion/laptops-accesorios/"
                      title="Laptops y Accesorios"
                    >
                      Laptops y Accesorios
                    </a>
                    <div aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="8"
                      >
                        <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
                      </svg>
                    </div>
                  </li>
                  <li className="flex flex-row items-center justify-center gap-3">
                    <a
                      href="https://listado.mercadolibre.com.ar/computacion/laptops-accesorios/notebooks/"
                      title="Notebooks"
                      aria-current="page"
                    >
                      Notebooks
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className=" flex  flex-row items-end justify-end gap-3 mb-3 text-hipervinculos">
          <div>
            <div>
              <button
                type="button"
                id="link__label"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>Compartir</span>
              </button>
            </div>
          </div>
          <div>
            <a href="https://www.mercadolibre.com.ar/syi/core/list/equals?itemId=MLA1393724834&amp;productId=MLA22305968">
              Vender uno igual
            </a>
          </div>
        </div>
      </div>
      {/* Productos// precios */}
      <div className=" flex  bg-white rounded-md pr-4 h-auto">
        {/* columna izquierda */}
        <div className="flex flex-col h-auto">
          {/* soy el producto */}
          <div className=" flex flex-row h-auto">
            <section className="w-[530px] pl-4 mt-10 flex flex-col ">
              <div className="flex flex-col sticky top-0">
                <div className="flex flex-row  ">
                  <div className="w-[120px]">
                    <ul>
                      {productData.images.map((element, index) => (
                        <li
                          key={index}
                          className="border border-gray-300 hover:border-black cursor-pointer"
                          onClick={() => handleImageClick(element)}
                        >
                          <Image
                            src={element}
                            alt={`detail-image-${index}`}
                            width={400}
                            height={250}
                          />
                        </li>
                      ))}
                 
                    </ul>
                  </div>
                  <div className="w-[980px] h-[400px] mb-[100px]">
                    <Image
                      src={selectedImage}
                      alt="detail-image"
                      width={5000}
                      height={1000}
                    />
                  </div>
                </div>
                <div className="text-sm flex flex-row  justify-center items-center mb-24 -mt-5 ">
                  <MdFavorite className="text-red-500 h-6 w-6" />
                  &nbsp;&nbsp;
                  <span> Le gusta a </span>&nbsp;
                  <Link href={``} className="text-blue-400">
                    juliarodriguez, pedrotheret y 300 personas más
                  </Link>
                </div>
              </div>
            </section>
            <section className="w-[297px] mt-10">
              <div>
                <p className="text-vendidos">Nuevo | +1000 vendidos</p>
                <h2 className="w-[340px] text-2xl">{productData?.name}</h2>
                <div className="">
                  <BasicRating
                    stars={
                      productData?.qualification
                        ? productData?.qualification
                        : 4
                    }
                  />
                </div>
              </div>
              <div className="h-auto w-auto mt-4 }">
                <del className="text-base">$ {truncatedPrice}</del>
                <p className="text-4xl">$ {productData?.price}</p>
                <p>Pagá en cuotas </p>
                <div className="flex gap-1">
                  <p className="text-verde-meli ">Duplica puntos: </p>
                  <p>
                    sumás <del>1585</del> 3170 Mercado Puntos
                  </p>
                </div>
              </div>
              <a
                className="text-hipervinculos "
                href="https://articulo.mercadolibre.com.ar/noindex/services/MLA1393724834/payments?new_version=true&amp;modal=false&amp;newIndex=true%3Fcontrolled%3Dtrue"
              >
                Ver los medios de pago
              </a>

              <div className="mt-8">
                <p>Lo que tenes que saber de este producto</p>
                {productData?.characteristics.map((item, index) => (
                  <ol className="list-disc" key={"prueba"}>
                    <li className="pl-3 mt-4 w-[341px]" key={index}>
                      {item}
                    </li>
                  </ol>
                ))}
              </div>
            </section>
          </div>
          {/* <div>Soy la linea separadora</div> */}
          <br />
          <hr />
          <div className="pl-12 pr-12 text-xl mt-12">
            <div>
              <p>Descripción</p>
            </div>
            <div
              className="mt-12 text-description
            "
            >
              {productData?.description}
            </div>
          </div>
        </div>
        {/* columna derecha */}
        <div className="mt-4 pl-4 w-[310px]">
          <div className="rounded-[6px] border-[1px] border-border-color pt-3 pl-3 pr-3">
            <div>
              <span>
                <span className="text-[30px]">$ {productData?.price}</span>
              </span>
            </div>
            <div className="mt-5 ml-2 mr-2 mb-4">
              <p className="text-verde-meli "> Llega gratis el Sabado</p>
              <a href="">Enviar a {productData?.id_user.address}</a>
            </div>
            <div className="mb-5">
              <div className=" flex gap-2">
                <span>Vendido por </span>
                <p className="text-hipervinculos">
                  {productData?.id_user.name}
                </p>
              </div>
              <div>
                <p> {propsSeller.category} | +1000 vendidos</p>
              </div>
            </div>
            <div className="mb-2">
              <p>Stock disponible</p>
            </div>
            <div className="w-auto flex h-12  items-center gap-1">
              <span className="">Cantidad: </span>
              <select name="amount" id="amount" className="w-[80px]">
                <option value="onoUnit" selected>
                  1 Unidad
                </option>
                <option value="twoUnit">2 Unidad</option>
                <option value="threeUnit">3 Unidad</option>
                <option value="fourUnit">4 Unidad</option>
                <option value="fiveUnit">5 Unidad</option>
                <option value="sixUnit">6 Unidad</option>
                <option value="moreSix">Más de 6 unidades</option>
              </select>
              <p className="text-vendidos">
                {" "}
                ({propsProduc.available}) disponibles
              </p>
            </div>
            <div>
              <div className="mt-2 ">
                <PrimaryButton name={"Comprar Ahora"} />
              </div>
              <div className="mt-2 mb-4">
                <SecondaryButton name={"Agregar al carrito"} />
              </div>
            </div>
          </div>
          <div>
            <ul className="mt-6">
              <li className="mb-4 text-vendidos">
                <div className="w-[290px]">
                  <a
                    className="text-hipervinculos"
                    data-testid="action-modal-link"
                    href="https://articulo.mercadolibre.com.ar/noindex/freeReturn/fashion?itemId=MLA1365597305&amp;quantity=1&amp;new_version=true&amp;modal=false&amp;controlled=true"
                  >
                    Devolución gratis.
                  </a>
                  Tenés 30 días desde que lo recibís.
                </div>
              </li>
              <li className="mb-4 text-vendidos">
                <div className="flex flex-col w-[290px]">
                  <p>
                    <a
                      className="text-hipervinculos"
                      target="_blank"
                      href="https://www.mercadolibre.com.ar/compra-protegida"
                    >
                      Compra Protegida
                    </a>
                    , recibí el producto que esperabas o te devolvemos tu
                    dinero.
                  </p>
                </div>
              </li>
              <li className="mb-4 text-vendidos">
                <div>
                  <a
                    className="text-hipervinculos"
                    data-testid="action"
                    target="_blank"
                    href="https://www.mercadolibre.com.ar/mercado-puntos"
                  >
                    Mercado Puntos
                  </a>
                  . Sumás 1179 puntos.
                </div>
              </li>
              <li className="mb-4 text-vendidos">
                <div>
                  <p>12 meses de garantía de fábrica.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-[6px] border-[1px] border-border-color pt-8 pb-6 pl-4 pr-4">
            <div className="mb-7">
              <p>Información sobre el vendedor</p>
            </div>
            <div className="flex gap-3 mb-5">
              <div>
                <img src="/medalla.svg" alt="" />
              </div>
              <div>
                <p>{propsSeller.category}</p>
                <p>¡Es uno de los mejores del sitio!</p>
              </div>
            </div>
            <div>
              <img src="/reputacion.png" alt="dsadas" />
            </div>
            <div className="m-1 mt-4">
              <ul className=" w-auto flex gap-2">
                <li className=" w-[200px] flex flex-col items-center text-center ">
                  <strong className="text-2xl">+1000</strong>
                  <p>Ventas en los últimos 60 días</p>
                </li>
                <li className=" w-[150px] flex flex-col justify-center items-center text-center">
                  <div>
                    <img
                      className="w-10 "
                      decoding="async"
                      src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg"
                      alt=""
                    />
                  </div>

                  <p className="flex">Brinda buena atención</p>
                </li>
                <li className=" w-[200px] flex flex-col items-center text-center">
                  <div>
                    <img
                      className="w-10 "
                      decoding="async"
                      src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg"
                      alt=""
                    />
                  </div>

                  <p>Despacha sus productos a tiempo</p>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-hipervinculos">
                Ver más datos de este vendedor
              </p>
            </div>
          </div>
          <div className="rounded-[6px] border-[1px] border-border-color mb-6 mt-6 pt-8 pb-6 pl-4 pr-4">
            <div>
              <h2 className="mb-7">Medios de pago</h2>
              <div>
                <div>
                  <p>Hasta 12 cuotas sin tarjeta</p>
                  <div className="h-[47px] flex">
                    <img
                      className="w-[73px]"
                      decoding="async"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg"
                      alt="Mercado Crédito"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-7">
                  <p>Tarjetas de crédito</p>
                  <div className="flex gap mt-2">
                    <img
                      className="mr-6"
                      decoding="async"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
                      alt="Visa"
                    />
                    <div>
                      <img
                        className="mr-6"
                        decoding="async"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/fbf867c0-9108-11ed-87b1-fd4dd99fac51-m.svg"
                        alt="American Express"
                      />
                    </div>

                    <div>
                      <img
                        className="mr-6"
                        decoding="async"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg"
                        alt="Naranja"
                      />
                    </div>

                    <div>
                      <img
                        className="mr-6"
                        decoding="async"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
                        alt="Mastercard"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col mt-7">
                  <p>Tarjetas de débito</p>
                  <div className="flex mt-2">
                    <img
                      className="mr-6"
                      decoding="async"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"
                      alt="Visa Débito"
                    />

                    <div>
                      <img
                        className="mr-6"
                        decoding="async"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg"
                        alt="Maestro"
                      />
                    </div>
                    <div>
                      <img
                        className="mr-6"
                        decoding="async"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"
                        alt="Mastercard Débito"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-6">
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg"
                        alt="Cabal Débito"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-7">
                  <p>Efectivo</p>
                  <div className="flex mt-2">
                    <img
                      decoding="async"
                      className="mr-6"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg"
                      alt="PagoFacil"
                    />

                    <div>
                      <img
                        decoding="async"
                        className="mr-6"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg"
                        alt="Rapipago"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  className="text-hipervinculos"
                  href="https://articulo.mercadolibre.com.ar/noindex/services/MLA1365597305/payments?new_version=true&amp;modal=false&amp;newIndex=true"
                >
                  Conocé otros medios de pago
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto">
        {/* <div className="pl-11 pr-11 flex flex-col bg-white rounded-md pr-4 h-auto"> */}
        <div className="pl-11  flex flex-col bg-white rounded-md pr-4 ">
          {/* soy preguntas */}
          {/* <div>Soy la linea separadora</div> */}
          <br />
          <hr />

          <h2 className="text-3xl mt-5">Preguntas y respuestas</h2>
          <div className="mt-10  w-auto h-[100px]">
            <h3 className="pb-2 text-xl"> ¿Qué quéres saber?</h3>
            <div className="h-[100p]">
              <ul className="flex gap-6 mt-3">
                <li>
                  <a
                    className="text-azul-meli bg-greys-button pl-3 pr-3 p-3"
                    href="https://www.mercadolibre.com.ar/gz/shipping-calculator?item_id=MLA1436493614&amp;new_version=true&amp;modal=false&amp;informative=true&amp;pdp_filters=deal%3AMLA779357-1&amp;quick_access=true"
                  >
                    Costo y tiempo de envío
                  </a>
                </li>
                <li>
                  <a
                    className="text-azul-meli bg-greys-button pl-3 pr-3 p-3"
                    href="https://articulo.mercadolibre.com.ar/noindex/freeReturn/fashion?itemId=MLA1436493614&amp;quantity=1&amp;new_version=true&amp;modal=false"
                  >
                    Devoluciones gratis
                  </a>
                </li>
                <li>
                  <a
                    className="text-azul-meli bg-greys-button pl-3 pr-3 p-3"
                    href="https://articulo.mercadolibre.com.ar/noindex/services/MLA1436493614/payments?new_version=true&amp;modal=false"
                  >
                    Medios de pago y promociones
                  </a>
                </li>
                <li>
                  <a
                    className="text-azul-meli bg-greys-button pl-3 pr-3 p-3"
                    href="https://articulo.mercadolibre.com.ar/noindex/warranty/MLA1436493614?new_version=true&amp;modal=false"
                  >
                    Garantía
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-xl mb-6">Preguntale al vendedor</p>
            <div className="flex ">
              <input
                type="Escribi tu pregunta aqui"
                placeholder="Escribí tu pregunta"
                className=" h-[65px] w-[772px] rounded mr-8 border border-greys-button"
              />
              <PrimaryButton2 name={"Preguntar"} />
            </div>
            <div className="mt-12 ">
              <p className="mb-12 text-lg">Últimas realizadas</p>
              <div>
                <p className="text-base">Hola esta liberado?</p>

                <div className="flex gap-3 text-base">
                  <p className="text-vendidos">L</p>

                  <p className="text-vendidos h-10 mt-1">
                    Hola. Si, te confirmamos que este equipo es liberado para
                    cualquier compañía telefónica, aguardamos tu compra,
                    saludos.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-base">Hola tiene NFC?</p>

                <div className="flex gap-3 text-base">
                  <p className="text-vendidos">L</p>

                  <p className="text-vendidos h-10 mt-1">
                    Hola. Te informamos que sí tiene NFC. Aguardamos tu compra
                  </p>
                </div>
              </div>
              <div>
                <p className="text-base">Buenas noches, trae cargador? </p>

                <div className="flex gap-3 text-base">
                  <p className="text-vendidos">L</p>

                  <p className="text-vendidos h-10 mt-1 font-normal">
                    Hola, te comentamos que este producto incluye cargador.
                    Aguardamos tu compra. Saludos.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-base">
                  Hola. El reconocimiento de huella es en logo Motorola o en el
                  lateral?
                </p>

                <div className="flex gap-3 text-base">
                  <p className="text-vendidos">L</p>

                  <p className="text-vendidos h-10 mt-1">
                    Hola buen día es en el lateral. Saludos
                  </p>
                </div>
              </div>
              <div>
                <p className="text-base">Es nuevo ?!</p>

                <div className="flex gap-3 text-base">
                  <p className="text-vendidos">L</p>

                  <p className="text-vendidos h-10 mt-1">
                    Así es! Se trata de un producto nuevo. Gracias por
                    preguntar, cualquier consulta estamos a tu disposición!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div>Soy la linea separadora</div> */}
          <br />
          <hr />
          <div className="mb-10">
            <div>
              <h2 className="mb-12 text-2xl mt-[50px]">
                {" "}
                Opiniones de tus contactos
              </h2>
            </div>
            <div>
              {productDataReview?.FollowingReviews?.filter(
                (review) => review.user_id.name
              ).map((review) => {
                const date = new Date(review.updatedAt);

                const months = [
                  "Ene.",
                  "Feb.",
                  "Mar.",
                  "Abr.",
                  "May.",
                  "Jun.",
                  "Jul.",
                  "Ago.",
                  "Sep.",
                  "Oct.",
                  "Nov.",
                  "Dic.",
                ];

                const day = date.getDate();
                const month = months[date.getMonth()];
                const year = date.getFullYear();

                const formattedDate = `${day} ${month} ${year}`;

                return (
                  <div key={review.id}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BasicRating stars={review.stars} />
                        <img
                          className="rounded-full mr-5 ml-5  content-center "
                          src={review.user_id.avatar}
                          alt=""
                        />
                        <p className="mt-3 mr-5">{review.user_id.name}</p>
                      </div>
                      <div>
                        <p className="mt-3 mr-10">{formattedDate}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p>{review.comment}</p>
                    </div>
                  </div>
                );
              })}

              {/* Mapear sobre las revisiones que no tienen el campo 'name' */}
              {productDataReview?.FollowingReviews?.filter(
                (review) => !review.user_id.name
              ).map((review) => {
                // Mover la declaración de constantes aquí
                const date = new Date(review.updatedAt);

                const months = [
                  "Ene.",
                  "Feb.",
                  "Mar.",
                  "Abr.",
                  "May.",
                  "Jun.",
                  "Jul.",
                  "Ago.",
                  "Sep.",
                  "Oct.",
                  "Nov.",
                  "Dic.",
                ];

                const day = date.getDate();
                const month = months[date.getMonth()];
                const year = date.getFullYear();

                const formattedDate = `${day} ${month} ${year}`;

                return (
                  <div key={review.id}>
                    <div className="flex items-center justify-between">
                      <BasicRating stars={review.stars} />
                      <p className="mt-3 mr-10">{formattedDate}</p>
                    </div>
                    <div>
                      <p className="mt-6 ">{review.comment}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
