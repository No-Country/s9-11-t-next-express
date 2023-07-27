"use client"

import { usePathname } from "next/navigation";
import { ReactElement, SetStateAction, useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import {GiSmartphone} from "react-icons/gi";
import {IoIosArrowForward} from "react-icons/io";
import {AiOutlineUser} from "react-icons/ai";
import formImage from "../../../../../../public/images/register/Form-Icon-SVG.png";
import axios from "axios";
import { useRouter } from "next/navigation";


function RegisterForm(): ReactElement {

  const router = useRouter();
const pathname = usePathname()
// const [email, setEmail ]= useState("")
const [errors, setErrors] = useState({
  name: "",
  lastname: "",
  email: "",
  password: "",
  address: "",
  phone: "",
  rol: ""
});
// useEffect(() => {
// console.log(pathname);
// })
const [input, setInput ] = useState({
  name: "",
  lastname: "",
  email: "",
  password: "",
  address: "",
  phone: 0,
  rol: ""

})

interface Errors {
  name: string,
  lastname: string,
  email: string,
  password: string,
  address: string,
  phone: number,
}


function validate(input: Errors): SetStateAction<any> {
  // let errors: Errors;

  if(!input.name){
    errors.name = 'Se requiere un nombre'
  } else if(input.name.length < 3){
    errors.name = "El nombre debe contener al menos 3 letras";
  } else if(input.name.length > 18 ){
    errors.name = "El nombre no debe sobrepasar los 18 caracteres";
  }   else if(!/[A-Z]?[a-z]+\s?/.test(input.name)){
    errors.name = "Escribe solo el primer nombre";
  }
   else {
    errors.name = ""
  }

  if(!input.lastname){
    errors.lastname = "Se requiere un apellido"
  } else if(!/[A-Z]?[a-z]+\s?/.test(input.lastname)){
    errors.lastname = "Escribe un solo apellido";
  } else if(input.lastname.length < 3){
    errors.lastname = "El apellido debe contener al menos 3 letras";
  } else if(input.lastname.length > 18 ){
    errors.lastname = "El apellido no debe sobrepasar los 18 caracteres";
  }
  else {
    errors.lastname = ""
  }

  if(!/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/g.test(input.email)){
    errors.email = "Por ejemplo, example@test.com"
  } else {
    errors.email = ""
  }
  if(!input.address){
    errors.address = "Debe incluir una dirección de residencia."
  } else if(input.address.length < 6){
    errors.address = "Dirección debe tener más de 5 carácteres."
  }  else if(input.address.length > 31){
    errors.address = "Dirección no debe tener más de 30 carácteres."
  } else {
    errors.address = ""
  }
  if(!input.phone){
    errors.phone = "Debe incluir un teléfono."
  } else if(input.phone < 1000000000){
    errors.phone = "Telefono debe contener 10 números."
  }  else if(input.phone > 10000000000){
    errors.phone = "Telefono no debe pasar los 10 números."
  } else {
    errors.phone = ""
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

const register = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
  e.preventDefault();
  const inside = document.querySelector("#inside") as HTMLDivElement;
  const but = document.querySelector("#continue") as HTMLButtonElement;
  const form = document.querySelector("#form-section") as HTMLFormElement;

  if(errors.name === "" && errors.lastname === "" && errors.email === "" && errors.password === "" && errors.address === "" && errors.phone === ""){
  inside.innerHTML = ''
  but.setAttribute('class', 'bg-blue-300 py-4 rounded-md px-11 mt-4 text-white font-semibold disabled mb-5')
  inside.setAttribute('class', 'h-6 w-6 mt-[1px] border-4 border-gray-400 border-t-white animate-spin rounded-full mx-auto')
  const user =   {
    "name":input.name,
    "lastname": input.lastname,
    "email": input.email,
    "password": input.password,
    "address": input.address,
    "phone": input.phone.toString(),
    "username": "[autogenerate by name, lastname, Math.random()]",
    "avatar": `https://ui-avatars.com/api/?name=${input.name}+${input.lastname}`,
    "active": true,
    "rol": "buyer"
  }
  console.log(`${user.email}, ${user.password} si`);
  axios.post('https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/users/', user)
  .then(res => {   
    if (res.data.token) {
      localStorage.setItem('token', JSON.stringify(res.data));
      router.push('/')
      } 
      else {
        return
    }
    }).catch((err) => {
      const response = document.querySelector("#login") as HTMLParagraphElement;
      response.innerText = err.response.data.message;
      response.setAttribute('class', 'mx-[0px] text-xs text-red-500');
      but.setAttribute('class', 'bg-blue-500 py-4 rounded-md px-0 mt-4 text-white font-semibold mb-5 mr-[109px]');
      form.setAttribute('class', 'flex justify-center flex-col ml-[70px]');
      inside.setAttribute('class', 'mb-1 -pr-5');
      inside.innerHTML ='Registrarse'
      // setOk(true)
      console.log(err);
      
    })
  }
  else return

  }

  return (
    <div className="w-full h-[1000px]  ">
      <div className="bg-amarillo-meli h-[100px] z-0">
      </div>
      <div className="bg-gray-200 h-[900px] z-0 mb-6">
        <br />
        <br />
        <br />

        <div  className="flex justify-center flex-col items-center z-10 bg-white mx-[410px] rounded-lg -mt-10">
          <Image src={formImage} alt="form_image" width={140} height={100} className="pt-6"/>
          <form id="form-section" action="" className="flex justify-center flex-col ">
          <label id="label" htmlFor="name" className="flex justify-start items-start mt-2">
            Nombre:
          </label>
              <input 
                type="text"
                id="name" 
                name="name" 
                value={input?.name}
                onChange={handleInput}
                // onClick={(e)=> e.preventDefault()}
                className='border rounded border-gray-200 w-[300px] h-10 py-6 ' 
                placeholder="ej. John"
              />
            
            {
              errors.name? (<p className='text-red-400'>{errors.name}</p>) : false
            
            }
          <label id="label" htmlFor="lastname" className="flex justify-start items-start mt-2">
            Apellido:
          </label>
          <input 
                type="text"
                id="lastname" 
                name="lastname" 
                value={input?.lastname}
                onChange={handleInput}
                // onClick={(e)=> e.preventDefault()}
                className='border rounded border-gray-200 w-[300px] h-10 py-6' 
                placeholder="ej. Doe"
              />
            {
              errors.lastname? (<p className='text-red-400'>{errors.lastname}</p>) : false
            
            }
          <label id="label" htmlFor="email" className="flex justify-start items-start mt-2">
            Email:
          </label>
          <input 
                type="email"
                id="email" 
                name="email" 
                value={input?.email}
                onChange={handleInput}
                // onClick={(e)=> e.preventDefault()}
                className='border rounded border-gray-200 w-[300px] h-10 py-6 ' 
                placeholder="ej. example@gmail.com"
              />
            {
              errors.email? (<p className='text-red-400'>{errors.email}</p>) : false
            
            }
          <label id="label" htmlFor="password" className="flex justify-start items-start mt-2">
            Contraseña:
          </label>
              <input 
                type="password"
                id="password" 
                name="password" 
                value={input?.password}
                onChange={handleInput}
                className='border rounded border-gray-200 w-[300px] h-10 py-6' 
                placeholder="Escribe la contraseña"
              />


            {
              errors.password? (<p className='text-red-400'>{errors.password}</p>) : false
            }
          <label id="label" htmlFor="address" className="flex justify-start items-start mt-2">
            Dirección:
          </label>
          <input 
                type="text"
                id="address" 
                name="address" 
                value={input?.address}
                onChange={handleInput}
                // onClick={(e)=> e.preventDefault()}
                className='border rounded border-gray-200 w-[300px] h-10 py-6 ' 
                placeholder="ej. 4473 Boone Crockett Lane"
              />
            {
              errors.address? (<p className='text-red-400'>{errors.address}</p>) : false
            
            }
          <label id="label" htmlFor="phone" className="flex justify-start items-start mt-2">
            Teléfono o móvil:
          </label>
          <input 
                type="number"
                id="phone" 
                name="phone" 
                value={input?.phone}
                onChange={handleInput}
                // onClick={(e)=> e.preventDefault()}
                className='border rounded border-gray-200 w-[300px] h-10 py-6 ' 
                placeholder="ej. 9197106601"
              />
            {
              errors.phone? (<p className='text-red-400'>{errors.phone}</p>) : false
            }
          <label id="label" htmlFor="email" className="flex justify-start items-start mt-2">
            Rol:
          </label>
          <select 
            name="rol" 
            id="rol" 
            onChange={handleInput}
            className='border rounded  w-[300px] py-4 bg-white text-black'
            value={input.rol}
            // defaultValue={`buyer`}
            >
            <option className="text-black" value="buyer">Comprador</option>
            <option className="text-black" value="seller">Vendedor</option>
          </select>
          <p id="login" className="text-red-500 text-xs"></p>

              {/* <p id="login" className="text-red-500 text-xs"></p>
            {
              errors.name? (<p className='text-red-400'>{errors.name }</p>) : false
            } */}

          <button 
            id="continue" 
            onClick={ (e) => register(e)} 
            className="bg-blue-500 py-4 rounded-md px-11 mt-4 text-white font-semibold mb-5">
            <div id="inside" className="mb-1">Registrarse</div>
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm;