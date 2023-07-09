/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <footer className="flex justify-center">
      <div className="h-custom-height flex flex-col max-w-[1200px] min-w-full">
        <section className="pt-5 h-[282px]">
          <div className="flex justify-center pt-11">
            <div className="w-[352px] pb-5 pl-6 pr-6 pt-7">
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
                  Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas
                  sin tarjeta con Mercado Crédito.
                </span>
                <a
                  className="flex flex-col text-center text-blue-500 "
                  href="https://www.mercadolibre.com.ar/pagar-online-con-mercadopago"
                >
                  Cómo pagar tus compras
                </a>
              </p>
            </div>
            <div className="w-[352px] pb-5 pl-6 pr-6 pt-7">
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
            <div className="w-[352px] pb-5 pl-6 pr-6 pt-7">
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
        </section>
        <section>
          <div className="flex flex-row items-center justify-center pt-10 pb-10 ">
            <div className="border border-solid border-black border-opacity-10 rounded-md  h-[118px] w-[562px] flex pl- justify-center ">
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
            <div className="border border-solid border-black border-opacity-10 rounded-md  h-[118px] w-[562px] flex  justify-center ">
              <p className="flex flex-col items-center justify-center">
                Conocé las normas que aplican cuando comprás
                <a
                  className="flex items-center justify-center text-blue-500"
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
        <section className="flex justify-evenly ">
          <div className="h-[81px] w-[1160px] flex justify-end">
            <div className="flex flex-row items-center gap-3">
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
                  <span>ayuda@mercadolibre.com.ar</span>
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
              <div className="h-[61px] w-[43px] flex items-center">
                <a
                  href="http://qr.afip.gob.ar/?qr=eqSGL6HcpJM1lYHWSGfj-Q,,"
                  target="_F960AFIPInfo"
                >
                  <img
                    className="h-14"
                    src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/data_fiscal.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-20">

          </div>
        </section>
        <section className="flex justify-center">
          <div className="h-[54px] w-[1140px] pt-4 pb-4 pl-3 pr-3 ">
            <div>
              <div className=" flex items-center">
                <nav >
                  <ul className="  mr-4 text-xs flex flex-row">
                    <li className="mr-4 text-text-grey3">
                      <a href="https://careers-meli.mercadolibre.com/?utm_campaign=site-mla&amp;utm_source=mercadolibre&amp;utm_medium=mercadolibre">
                        Trabajá con nosotros
                      </a>
                    </li>
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
                      <a href="https://www.mercadolibre.com.ar/ayuda">Ayuda</a>
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
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col ">

              <small className=" text-text-grey4">Copyright ©&nbsp;1999-2023 MercadoLibre S.R.L.</small>
              <small className=" text-text-grey4">Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
