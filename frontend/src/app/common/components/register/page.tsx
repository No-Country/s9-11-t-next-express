"use client"

import { usePathname } from "next/navigation";
import { ReactElement, SetStateAction, useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import {GiSmartphone} from "react-icons/gi";
import {IoIosArrowForward} from "react-icons/io";
import {AiOutlineUser} from "react-icons/ai";
import formImage from "../../../../../public/images/register/Form-Icon-SVG.png";


function Register(): ReactElement {

const pathname = usePathname()
const [email, setEmail ]= useState("")
const [errors, setErrors] = useState({
  name: '',
  password: '',
});
// useEffect(() => {
// console.log(pathname);
// })
const [input, setInput ] = useState({
  name: '',
  password: '',
})

interface Errors {
  name: string,
  password: string
}

function validate(input: Errors): SetStateAction<any> {
  // let errors: Errors;

  if(!input.name){
    errors.name = 'A name is required'
  } else if(!/[a-z]+$/.test(input.name)){
    errors.name = 'It must be only text in minuscules and only first name';
  } else if(input.name.length < 3){
    errors.name = "It's too short for a name, at least 3 letters";
  } else if(input.name.length > 18 ){
    errors.name = 'The name should not surpass 18 letters';
  }
  else {
    errors.name = '';
  }
  return errors;
}
function handleInput(e: any){
  setInput({
    ...input,
    [e.target.name] : e.target.value,
    
  })
  setErrors(validate({
    ...input,
    [e.target.name] : e.target.value
  }))
  e.preventDefault();
  
  console.log(input + ' llega');
  console.log(input.name + ' llega');

}

  return (
    <div className="w-full h-[780px]  ">
      <div className="bg-amarillo-meli h-[100px] z-0">
      </div>
      <div className="bg-gray-200 h-[500px] z-0">
        <br />
        <br />
        <br />

        <div className="flex justify-center flex-col items-center z-10 bg-white  mx-[410px] rounded-lg">
          <Image src={formImage} alt="form_image" width={140} height={100} className="pt-6"/>
          <h1 className="text-black text-2xl mt-3 font-bold text-center mx-[20px]">
            Para crear tu cuenta te pediremos algunos datos
          </h1>
          <p className="text-black text-sm mt-3 text-center">
            Solo te tomará unos minutos.
          </p>
          <div className="flex justify-center items-start mx-[70px] mt-12">
            <input type="checkbox" className="flex justify-start items-start "  />
            <p className="text-gray-500 text-sm justify-start items-start ml-4 -mt-1">
              Acepto los Términos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad.
            </p>
          </div>

            <button className=" bg-blue-500 py-4 rounded-md px-20 mt-4 text-white font-semibold"  >
              Crear cuenta personal
            </button>
            <button className=" bg-gray-200 py-4 rounded-md px-[69px] mt-4 text-blue-500 font-semibold mb-16"  >
              Crear cuenta de empresa
            </button>
        </div>
      </div>
    </div>
  )
}

export default Register;