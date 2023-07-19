/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Slide } from "react-slideshow-image";
import Slideshow from "./Slides";
import PrimaryButton from "../Buttom/PrimaryButton";
import SecondaryButton from "../Buttom/SecondaryButton";
import BasicRating from "./Rating";
import { useRouter } from "next/router";


export default function PageProduct() {

  const router = useRouter();
  const { id } = router.query;
  console.log(id)

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
    name: "SOY EL VENDEDOR",
    category: "MercadoLíder",
  };
  return (
    <div className="w-[1200px] h-auto">
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
      <div className=" flex  bg-white rounded-md pr-4">
        {/* columna izquierda */}
        <div className="flex flex-col">
          {/* soy el producto */}
          <div className=" flex flex-row h-auto">
            <section className="w-[486px] pl-4 mt-10">slider</section>
            <section className="w-[341px] mr-8  mt-10">
              <div>
                <p className="text-vendidos">Nuevo | +1000 vendidos</p>
                <h2 className="w-[340px] text-2xl">{propsProduc.title}</h2>
                <div className="">
                  <BasicRating stars={propsProduc.stars} />
                </div>
              </div>
              <div className="h-auto w-auto mt-4 }">
                <del className="text-base">$ {propsProduc.price2}</del>
                <p className="text-4xl">$ {propsProduc.price1}</p>
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
                {propsProduc.description.map((item, index) => (
                  <ol className="list-disc" key={"prueba"}>
                    <li className="pl-3 mt-4 w-[341px]" key={index}>
                      {item}
                    </li>
                  </ol>
                ))}
              </div>
            </section>
          </div>
          <div>Soy la linea separadora</div>
          <div className="pl-12 pr-12 text-xl mt-12">
            <div>
              <p>Descripción</p>
            </div>
            <div
              className="mt-12 text-description
            "
            >
              {propsProduc.description2}
            </div>
          </div>
        </div>
        {/* columna derecha */}
        <div className="mt-4 pl-4 w-[310px]">
          <div className="rounded-[6px] border-[1px] border-border-color pt-3 pl-3 pr-3">
            <div>
              <span>
                <span className="text-[30px]">$ {propsProduc.price1}</span>
              </span>
            </div>
            <div className="mt-5 ml-2 mr-2 mb-4">
              <p className="text-verde-meli " href="">
                {" "}
                Llega gratis el Sabado
              </p>
              <a href="">Enviar a {propsUser.addres}</a>
            </div>
            <div className="mb-5">
              <div className=" flex gap-2">
                <span>Vendido por </span>
                <p className="text-hipervinculos">{propsSeller.name}</p>
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
              <div>icono</div>
              <div>
                <p>{propsSeller.category}</p>
                <p>¡Es uno de los mejores del sitio!</p>
              </div>
            </div>
            <div>
              <img src="./reputacion.png" alt="dsadas" />
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

      <div>
        <div className="pl-11 pr-11 flex flex-col bg-white rounded-md pr-4 h-auto">
          {/* soy preguntas */}

          <h2>Preguntas y respuestas</h2>
          <div className="mt-10 h-auto w-auto">
            <h3 className="pb-2"> ¿Qué quéres saber?</h3>
            <div>
              <ul className="flex gap-6 " >
                <li>
                  <a className="text-azul-meli bg-greys-button pl-3 pr-3 p-3" href="https://www.mercadolibre.com.ar/gz/shipping-calculator?item_id=MLA1436493614&amp;new_version=true&amp;modal=false&amp;informative=true&amp;pdp_filters=deal%3AMLA779357-1&amp;quick_access=true">
                    Costo y tiempo de envío
                  </a>
                </li>
                <li>
                  <a href="https://articulo.mercadolibre.com.ar/noindex/freeReturn/fashion?itemId=MLA1436493614&amp;quantity=1&amp;new_version=true&amp;modal=false">
                    Devoluciones gratis
                  </a>
                </li>
                <li>
                  <a href="https://articulo.mercadolibre.com.ar/noindex/services/MLA1436493614/payments?new_version=true&amp;modal=false">
                    Medios de pago y promociones
                  </a>
                </li>
                <li>
                  <a href="https://articulo.mercadolibre.com.ar/noindex/warranty/MLA1436493614?new_version=true&amp;modal=false">
                    Garantía
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>hola</div>
        </div>
        <div>soy recomendaciones</div>
      </div>
    </div>
  );
}
