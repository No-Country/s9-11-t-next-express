/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Slide } from "react-slideshow-image";
import Slideshow from "./Slides";

export default function FooterMobile() {
  return (
    <footer className="flex justify-center bg-white">
      <div className="h-auto flex flex-col max-w-[1200px] min-w-full">
        <section>
          <Slideshow />
        </section>
        <section>
          <div className="flex flex-col items-center justify-center pt-10 pb-10 ">
            <div className="border border-solid border-black border-opacity-10 rounded-md  h-[118px] w-[340px] flex pl- justify-center mb-5">
              <p className="flex flex-col items-center justify-center">
                Botón de arrepentimiento
                <a
                  className="text-blue-500"
                  target="_blank"
                  href="https://www.mercadolibre.com.ar/ayuda/como-cancelo-una-compra_15861#c_id=/home/regret&amp;c_uid=ce195d41-34b2-426a-b4ac-68d00c23b267"
                >
                  Cancelar una compra
                </a>
                <a
                  className="text-blue-500"
                  target="_blank"
                  href="https://www.mercadolibre.com.ar/suscripciones#c_id=/home/regret&amp;c_uid=256ba66c-bf89-49fc-9335-c8a010772f56"
                >
                  Cancelar una suscripción
                </a>
                <a
                  className="text-blue-500"
                  target="_blank"
                  href="http://www.mercadolibre.com.ar/ayuda/23440#c_id=/home/regret&amp;c_uid=3af3655c-bbcd-4597-b8dd-63b97aed4ca5"
                >
                  Cancelar un seguro o garantía
                </a>
              </p>
            </div>
            <div className="border border-solid border-black border-opacity-10 rounded-md  h-[118px] w-[340px] flex justify-center">
              <p className="flex flex-col items-center justify-center">
                Conocé las normas que aplican cuando comprás
                <a
                  className="text-blue-500 text-sm  w-[287px] flex "
                  target="_blank"
                  href="https://www.mercadolibre.com.ar/ayuda/18301#c_id=/home/regret&amp;c_uid=6c7b6103-ce85-46a9-ba88-92ebf909377e"
                >
                  Ver contratos de adhesión - Ley N.º 24.240 de Defensa del
                  Consumidor
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-evenly pb-[27px]">
          <div className="h-auto w-auto flex justify-end">
            <div className="flex flex-col items-center gap-3">
              <div className="h-[61px] w-[226px] flex items-center">
                <a
                  className="flex flex-row "
                  href="https://mercadolibre.com.ar/ayuda/27819"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/./help-email/icon_email.svg"
                    alt=""
                  />
                  <span className="text-text-grey2 ml-2">
                    ayuda@mercadolibre.com.ar
                  </span>
                </a>
              </div>
              <div className="h-[61px] w-[289px] flex items-center">
                <a
                  href="https://www.argentina.gob.ar/superintendencia-de-seguros"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="h-14"
                    decoding="async"
                    src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/insurance/ssnlogo.svg"
                    alt="Superintendencia de Seguros de la Nación"
                  ></img>
                  <span></span>
                </a>
              </div>
              <div className="h-[61px] w-[150px] flex items-center ">
                <a
                  href="http://www.usuariosfinancieros.gob.ar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="h-14"
                    decoding="async"
                    src="https://http2.mlstatic.com/resources/sell/banner_usuarios_financieros.svg"
                    alt="Usuarios Financieros"
                  ></img>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section >
          <div className="bg-amarillo-meli w-auto h-[72px] flex justify-center items-center">
            <div className="w-12 mr-3 shadow-2xl ">
              <img src="./icon_ml_mobile.png" alt="" />
            </div>
            <div>
              <span className="text-lg">¡Comprá y vendé con la app!</span>
            </div>
          </div>
        </section>
        <section >
          <div className=" flex flex-row pt-6 pb-6 pl-9 pr-9 h-auto w-auto">
            <div className="flex flex-col w-[140px]  mt-2 mb-2">
              <a className="mt-2 mb-2" href="https://myaccount.mercadolibre.com.ar">Mi cuenta</a>
              <a className="mt-2 mb-2" href="https://www.mercadolibre.com.ar/gz/home/navigation">
                Historial
              </a>
              <a className="mt-2 mb-2" href="https://myaccount.mercadolibre.com.ar/bookmarks/list">
                Favoritos
              </a>
              <a className="mt-2 mb-2" href="https://www.mercadolibre.com.ar/categorias">
                Categorías
              </a>
              <a className="mt-2 mb-2" href="https://www.mercadolibre.com.ar/ayuda">Ayuda</a>
            </div>
            <div className="flex flex-col w-[140px]  mt-2 mb-2">
              <a className="mt-2 mb-2" href="https://myaccount.mercadolibre.com.ar/purchases/list">
                Mis compras
              </a>
              <a className="mt-2 mb-2" href="https://www.mercadolibre.com.ar/ofertas">Ofertas</a>

              <a className="mt-2 mb-2" href="https://www.mercadolibre.com.ar/tiendas-oficiales">
                Tiendas oficiales
              </a>
              <a className="mt-2 mb-2" href="https://www.mercadolibre.com.ar/mercado-puntos">
                Mercado Puntos
              </a>
              <a className="mt-2 mb-2"  href="https://www.mercadolibre.com.ar/syi/core/list">Vender</a>
            </div>
          </div>
        </section>
        <section >
          <div className="h-auto  pt-4 pb-4 pl-3 pr-3 ">
            <div>
              <div >
                <nav>
                  <ul className="mr-4 text-xs flex flex-row flex-wrap">
                  
                    <li className="mr-4 text-text-grey3">
                      <a href="https://www.mercadolibre.com.ar/ayuda/terminos-y-condiciones-de-uso_991">
                        Términos y condiciones
                      </a>
                    </li>
                    <li className="mr-4 text-text-grey3">
                      <a href="https://www.mercadolibre.com.ar/privacidad">
                        Cómo cuidamos tu privacidad
                      </a>
                    </li>
                    <li className="mr-4 text-text-grey3">
                      <a href="https://www.mercadolibre.com.ar/accesibilidad">
                        Accesibilidad
                      </a>
                    </li>
                    <li className="mr-4 text-text-grey3">
                      <a href="https://www.mercadolibre.com.ar/ayuda/18697">
                        Información al usuario financiero
                      </a>
                    </li>
                   
                    <li className="mr-4 text-text-grey3">
                      <a href="https://www.mercadolibre.com.ar/ayuda/Defensa-del-Consumidor_s20014">
                        Defensa del Consumidor
                      </a>
                    </li>
                    <li className="mr-4 text-text-grey3">
                      <a href="https://www.mercadolibre.com.ar/ayuda/23303">
                        Información sobre seguros
                      </a>
                    </li>
                    <li className="mr-4 text-text-grey3">
                      <a href="https://www.mercadolibre.com.ar/blog">
                        Blolg
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col ">
                <small className=" text-text-grey4">
                   ©&nbsp;1999-2023 MercadoLibre S.R.L.
                </small>
                <small className=" text-text-grey4">
                  Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
                </small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
