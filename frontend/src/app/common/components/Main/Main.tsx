"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
import clonImage from "../../../../../public/images/home/clon_mercadolibre.jpg";
import cupones from "../../../../../public/images/home/main_cupones.jpg";
import cocina from "../../../../../public/images/home/main_cocina.jpg";
import tecnologia from "../../../../../public/images/home/main_tecnologia.jpg";
import logistic from "../../../../../public/images/home/main_logistic.png";
import mercado from "../../../../../public/images/home/main_mercado.jpg";
import laptop from "../../../../../public/images/home/main_laptops.jpg";
import ropa from "../../../../../public/images/home/main_ropa.jpg";
import estetica from "../../../../../public/images/home/main_estetica.jpg";
import { AiOutlineCar } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { PiTShirtThin } from "react-icons/pi";
import { PiArmchair } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";
import { BiSolidFridge } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { BiFootball } from "react-icons/bi";
import { AiOutlineAudio } from "react-icons/ai";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { TbHorseToy } from "react-icons/tb";
import { AiOutlineTool } from "react-icons/ai";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { usePathname, useRouter } from "next/navigation";
// import "swiper";


  // const images: Array<string> = ["clon_mercadolibre.jpg", "otro.jpg", "main_cocina.jpg", "main_tecnologia.jpg"]

export default function Main() {
  const userMenu: string[] = ['Salir']
  let [user, setUser ] = useState([])
  let [isLogged, setIsLogged ] = useState(false)
  let router = useRouter();
  let pahtname = usePathname();
  SwiperCore.use([Autoplay])



  const deleteToken = () => {
    setUser([]);
    setIsLogged(false)
    console.log(user);
    console.log(isLogged);
    localStorage.clear();
    // router.push('/')
    location.reload()
  }

  return (
    <main className="flex justify-center">
      <div className="h-custom-height flex flex-col max-w-[1200px] min-w-full">
        <section className="h-[282px] mb-40">
        {/* <div className="flex flex-col items-end">
            <div className=" z-10 bg-white px-[44px] mr-[150px] ">
              <ul>
                  {
                      userMenu.map(el => {
                          return (
                              <li>{el}</li>
                          )
                      })
                  }
              </ul>
            </div>
          </div> */}

          <div className="h-[10px] -mx-[200px]">
        
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              navigation={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="mySwiper z-0"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
            <div className="flex flex-col items-end">
              <div id="user-dropdown" className=" z-10 bg-white  mr-[352px] -mt-[250px] shadow-md hidden hover:bg-blue-500">
                <ul className="flex justify-start items-start text-left hover:bg-blue-500">
                    {
                      userMenu.map(el => {
                          return (
                              <li onClick={deleteToken} className="text-left pr-[73px] px-[6px] cursor-pointer hover:bg-blue-500 hover:text-white">
                                {el}
                              </li>
                          )
                      })
                    }
                </ul>
              </div>
            </div>
             
              <SwiperSlide>
                <div className="flex justify-center bg-black">
                  <Image
                    className="h-[250px] w-[1000px]"
                    src={clonImage}
                    alt="clon"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black flex justify-center">
                  <Image className="h-[250px] " src={cupones} alt="cupones" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image className="h-[250px] w-full" src={cocina} alt="cocina" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center bg-black">
                  <Image
                    className="h-[250px]"
                    src={tecnologia}
                    alt="tecnologia"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <br />
        <br />
        <section className="mt-12">
          <div className="flex flex-row items-center justify-center pt-5 pb-10 rounded-md ">
            <div className="h-[100px] w-[1200px] flex  justify-center bg-white  rounded-md ">
              <div className="flex justify-center items-center pr-10">
                <div className="mr-4">
                  <Image
                    width={50}
                    height={50}
                    src={`https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg`}
                    alt="credit"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Hata 48 cuotas</p>
                  <Link
                    className="text-blue-600"
                    href={`https://www.google.com/`}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center pr-10">
                <div className="mr-4">
                  <Image
                    width={50}
                    height={50}
                    src={`https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/transfer.svg`}
                    alt="credit"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Transferencia desde tu banco</p>
                  <Link
                    className="text-blue-600"
                    href={`https://www.google.com/`}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center pr-20 ">
                <div className="mr-4">
                  <Image
                    width={50}
                    height={50}
                    src={`https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg`}
                    alt="credit"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Paga en efectivo</p>
                  <Link
                    className="text-blue-600"
                    href={`https://www.google.com/`}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center  pr-20">
                <div className="mr-4">
                  <Image
                    width={50}
                    height={50}
                    src={`https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg`}
                    alt="credit"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Más medios de pago</p>
                  <Link
                    className="text-blue-600"
                    href={`https://www.google.com/`}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-[300]">
          <div className="flex flex-col bg-white rounded-lg ">
            <div className="flex flex-row justify-between bg-gradient-to-r from-[#a90f90] via-[#a90f90] to-[#0c1a51] ... h-[85px] rounded-t-lg">
              <h1 className="flex pl-12 text-2xl items-center text-white font-bold">
                Suscríbete al nivel 6
              </h1>
              <div className="flex flex-col justify-center items-start pr-12 font-sans">
                <p className="text-xs text-white line-through">$57.500</p>
                <p className="text-2xl text-white font-bold">$ 22.500 /mes</p>
              </div>
            </div>
            <h1 className="ml-10 text-lg mt-3">
              Consigue los mejores beneficios en Mercado Libre
            </h1>

            <div className="flex flex-row items-center justify-center pt-5 pb-10 rounded-md ">
              <div className="h-[100px] w-[1200px] flex  justify-center bg-white  rounded-md ">
                <div className="flex flex-row justify-center items-center mr-16">
                  <Image
                    width={110}
                    height={110}
                    src={`https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg`}
                    alt="credit"
                  />
                  <p className="text-sm ml-4">Disney+ sin cargo</p>
                </div>
                <div className="flex flex-row justify-center items-center mr-16">
                  <Image
                    width={110}
                    height={110}
                    src={`https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg`}
                    alt="credit"
                  />
                  <p className="text-sm ml-4">Star+ sin cargo</p>
                </div>
                <div className="flex flex-row justify-center items-center w-[320px]">
                  <Image width={110} height={110} src={logistic} alt="credit" />
                  <p className="text-sm ml-4">
                    Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos
                    de menos de $ 90.000
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-end items-end mr-5">
              <button className="bg-blue-500 px-4 py-2 text-xs text-white font-semibold my-4 border rounded-lg">
                Suscríbete
              </button>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h1 className="text-lg mt-3 font-medium">Descubre</h1>

          <div className="flex flex-row justify-center pt-5 pb-10 items-start ">
            <div className="h-[250px] w-[1200px] flex justify-center">
              <div className="flex flex-row bg-white ml-3 rounded-lg ">
                <div className="flex flex-col justify-center items-start pr-4 ">
                  <p className="text-xs flex px-[40px]">ARMA TU CARRITO</p>
                  <p className="text-2xl flex px-[40px]">
                    SUPERMERCADO HASTA 25% OFF
                  </p>
                  <button className="bg-blue-500 py-2 ml-5 text-xs text-white font-semibold my-4 border rounded-lg px-[50px] ">
                    Ver más
                  </button>
                </div>
                <Image
                  className="rounded-r-lg"
                  width={250}
                  height={205}
                  src={mercado}
                  alt="mercado"
                />
              </div>
              <div className="flex flex-row bg-white ml-9 rounded-lg ">
                <div className="flex flex-col justify-center items-start  ">
                  <p className="text-xs flex px-[10px]">ACTUALIZA TU EQUIPO</p>
                  <p className="text-2xl flex px-[10px]">
                    COMPUTADORES Y CELULARES HASTA 20% OFF
                  </p>
                  <button className="bg-blue-500 py-2 ml-5 text-xs text-white font-semibold my-4 border rounded-lg px-[50px]">
                    Ver más
                  </button>
                </div>
                <Image
                  className="rounded-r-lg"
                  width={250}
                  height={205}
                  src={laptop}
                  alt="mercado"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <h1 className="text-lg mt-3 font-medium">Te puede interesar</h1>

          <div className="flex flex-row justify-center pt-5 pb-10 items-start ">
            <div className="h-[250px] w-[1200px] flex justify-center">
              <div className="flex flex-row bg-white ml-3 rounded-lg ">
                <div className="flex flex-col justify-center items-start pr-4 ">
                  <p className="text-xs flex px-[40px]">TU OUTFIT IDEAL</p>
                  <p className="text-2xl flex px-[40px]">
                    ROPA Y MÁS HASTA 50% OFF
                  </p>
                  <button className="bg-blue-500 py-2 ml-5 text-xs text-white font-semibold my-4 border rounded-lg px-[50px] ">
                    Ver más
                  </button>
                </div>
                <Image
                  className="rounded-r-lg"
                  width={260}
                  height={205}
                  src={ropa}
                  alt="mercado"
                />
              </div>
              <div className="flex flex-row bg-white ml-9 rounded-lg ">
                <div className="flex flex-col justify-center items-start  ">
                  <p className="text-xs flex px-[10px]">
                    TUS MARCAS FAVORITAS EN
                  </p>
                  <p className="text-2xl flex px-[10px]">
                    BELLEZA Y CUIDADO HASTA 50% OFF
                  </p>
                  <button className="bg-blue-500 py-2 ml-5 text-xs text-white font-semibold my-4 border rounded-lg px-[50px]">
                    Ver más
                  </button>
                </div>
                <Image
                  className="rounded-r-lg"
                  width={250}
                  height={205}
                  src={estetica}
                  alt="mercado"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <h1 className="text-lg mt-3 font-medium mb-5">
            Categorías importantes
          </h1>

          <div className="grid grid-cols-7 mx-auto h-[340px] w-[1200px] bg-white rounded-lg ">

            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div >
                <AiOutlineCar className="w-[40px] h-[40px] mb-2 text-gray-500" />
              </div>
              <p className="text-gray-500">Carros, Motos y otros</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div className="hover:text-gray-500">
                <RiComputerLine className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Computación</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>
                <PiTShirtThin className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Ropa y Accesorios</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>
                <PiArmchair className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Hogar y Muebles</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>
                <GiCarWheel className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Accesorios para vehículos</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>
                <BiSolidFridge className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Electrodomésticos</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>
                <BsCamera className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Camaras y Accesorios</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <Link href={"/pages/products"}>
              <div>
                <GiSmartphone className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Celulares y Teléfonos</p>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>
                <GiLipstick className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Belleza y Cuidado </p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>
                <BiFootball className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Deportes y Fitness</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>

                <AiOutlineAudio className="w-[40px] h-[40px] mb-2 text-gray-500"/>

              </div>
              <p className="text-gray-500">Electrónica, Audio y Video</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>
                <MdOutlineVideogameAsset className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Consolas y Videojuegos</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>
                <TbHorseToy className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Juegos y Juguetes</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r border-b border-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">
              <div>
                <AiOutlineTool className="w-[40px] h-[40px] mb-2 text-gray-500"/>
              </div>
              <p className="text-gray-500">Herramientas</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
