"use client"

import { usePathname, useRouter } from "next/navigation";
import { EventHandler, MouseEventHandler, ReactElement, ReactHTMLElement, ReactNode, SetStateAction, useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import {GiSmartphone} from "react-icons/gi";
import {IoIosArrowForward} from "react-icons/io";
import {AiOutlineUser} from "react-icons/ai";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import axios from "axios";
import mercado from "../../../../../public/icon_ml_mobile.png";

function Login(): ReactElement {

const pathname = usePathname();
// const [email, setEmail ]= useState("");
const [password, setPassword ]= useState("");
const router = useRouter();
const [errors, setErrors] = useState({
  name: '',
  password: '',
});
const [ok, setOk] = useState(false)
const [input, setInput ] = useState({
  name: '',
  password: '',
})


interface Errors {
  name: string,
  password: string
}

// interface SelectProtected {
//   readonly wrapperElement: HTMLDivElement;
//   readonly inputElement: HTMLInputElement;
//   readonly buttonElement: HTMLButtonElement;

// }


function validate(input: Errors): SetStateAction<any> {
  // let errors: Errors;

  if(input.name.length === 0 || !input.name){
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

const handleDelete = ()=> {
  setOk(false);
  const chip = document.querySelector("#chip") as HTMLDivElement;
  const email = document.querySelector("#email") as HTMLInputElement;
  const label = document.querySelector("#label") as HTMLLabelElement;
  // const but = document.querySelector("#continue") as HTMLButtonElement;
  const response = document.querySelector("#login") as HTMLParagraphElement;
  const password = document.querySelector("#password") as HTMLInputElement;
  const inside = document.querySelector("#inside") as HTMLDivElement;
  inside.innerText = 'Continuar';
  chip.setAttribute('class', 'hidden ');
  password.setAttribute('class', 'hidden');
  email.setAttribute('class', 'border rounded border-gray-200 w-[300px] h-10 py-6');
  label.innerText = 'Teléfono, e-mail o usuario';
  response.innerText = "";

};

const continueProcess = (e: any) => {
  e.preventDefault();
  if(errors.name === '' && errors.password === ''){
    setOk(true);
    const chip = document.querySelector("#chip") as HTMLDivElement;
    const email = document.querySelector("#email") as HTMLInputElement;
    const inside = document.querySelector("#inside") as HTMLDivElement;
    const password = document.querySelector("#password") as HTMLInputElement;
    // const but = document.querySelector("#continue") as HTMLButtonElement;
    const label = document.querySelector("#label") as HTMLLabelElement;
    inside.setAttribute('class', '')
    inside.innerHTML = 'Ingresar';
    label.innerText = 'Contraseña';
    chip.setAttribute('class', 'mt-3');
    email.setAttribute('class', 'hidden')
    password.setAttribute('class', 'border rounded border-gray-200 w-[300px] h-10 py-6 ')

  } 

}

function handleInput(e?: any): boolean {
  setInput({
    ...input,
    [e.target.name] : e.target.value,
    
  })
  setErrors(validate({
    ...input,
    [e.target.name] : e.target.value
  }))
  e.preventDefault();
  
  // console.log(input + ' llega');
  console.log(input.name + ' llega');
  console.log(input.password + ' pass');

  return true
}

// MouseEventHandler<HTMLInputElement> 

// const logi = (props: {e: any, email: string, password: string}): ReactElement => {
//   props.e.preventDefault();
//   // let image = document.createElement('img');
//   const invalidEmail = document.getElementById('no_valid_email')
//   const rememberText = document.getElementById('remember')
//   const rememberCheck = document.getElementById('checkboxDefault')

//   axios.post('http://localhost:3001/api/meliclon/v1/users/login', 
//   {
//     "email":props.email,
//     "password": props.password
//   }).then(res => {   
//     console.log(res);
    
//     if (res.data.token) {
//       localStorage.setItem('token', JSON.stringify(res.data.token));
//       localStorage.setItem('email', email);
//       location.replace('/')
//       } 
//       else {
//         return
//         console.log('si');
//     }
//     }).catch((err) => {
//       const response = document.querySelector("#login") as HTMLParagraphElement;
//       response.innerText = err.message;
//       console.log(err);
      
//     })
//   }


const login = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
  e.preventDefault();
  const inside = document.querySelector("#inside") as HTMLDivElement;
  const but = document.querySelector("#continue") as HTMLButtonElement;
  but.setAttribute('class', 'bg-blue-300 py-4 rounded-md px-11 mt-4 text-white font-semibold disabled')
  inside.innerHTML = ''
  inside.setAttribute('class', 'h-6 w-6 mt-[1px] border-4 border-gray-400 border-t-white animate-spin rounded-full mx-auto')
  const user =   {
    "email":input.name,
    "password": input.password
  }
  console.log(`${user.email}, ${user.password} si`);
  axios.post('https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/users/login', user)
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
      but.setAttribute('class', 'bg-blue-500 py-4 rounded-md px-11 mt-4 text-white font-semibold')
      inside.setAttribute('class', 'mb-1')
      inside.innerHTML = 'Ingresar'
      setOk(true)
      console.log(err);
      
    })
  }


  return (
    <div className="w-full h-[660px]  ">
      <div className="bg-amarillo-meli h-[235px] z-0">

      </div>
      <div className="bg-gray-200 h-[500px] z-0"></div>
      <div className="flex justify-center flex-col items-center z-10 -mt-[645px] bg-white mx-[440px] rounded-lg">
        <h1 className="text-black text-2xl font-semibold px-[60px] text-left mt-8">¡Hola! Para seguir, ingresa tu teléfono, e‑mail o usuario</h1>
        <form action="" className="flex justify-center flex-col ">
        <div id="chip" className="hidden">
                  <Stack direction="row" spacing={1}>
                    <Chip label={input.name} onDelete={handleDelete} />
                  </Stack>
                </div>
          <label id="label" htmlFor="email" className="flex justify-start items-start mt-4">
            Teléfono, e-mail o usuario
          </label>

              <input 
                type="email"
                id="email" 
                name="name" 
                value={input?.name}
                onChange={handleInput}
                // onClick={(e)=> e.preventDefault()}
                className='border rounded border-gray-200 w-[300px] h-10 py-6 ' 
                placeholder="ej. example@gmail.com"
              />

              <input 
                type="password"
                id="password" 
                name="password" 
                value={input?.password}
                onChange={handleInput}
                // className='border rounded border-gray-200 w-[300px] h-10 py-6 ' 
                className="hidden"
                placeholder="Escribe la contraseña"
              />
              <p id="login" className="text-red-500 text-xs"></p>


            {
              errors.name? (<p className='text-red-400'>{errors.name }</p>) : false
            
            }

          <button 
            id="continue" 
            onClick={ok === false? continueProcess: (e) => login(e)} 
            className="bg-blue-500 py-4 rounded-md px-11 mt-4 text-white font-semibold">
            <div id="inside" className="mb-1">Continuar</div>
          </button>
          <Link href={'/common/components/register'} className="text-blue-500 font-bold text-center mt-4 text-mg pb-12">Crear cuenta</Link>

        </form>

      </div>
      <div className="flex justify-center items-start flex-col z-10 h-[150px] mt-2 bg-white mx-[440px] rounded-lg pb-4">
        <p className="text-xs text-black font-semibold flex justify-start items-start mx-10 pt-6">Reportar un problema</p>
        <div className="flex ">
          <GiSmartphone className="h-4 w-4 ml-10 mt-5" />
          <p className="text-gray-500 text-xs ml-2 mt-5">Robo o pérdida de teléfono</p>
          <IoIosArrowForward className="h-4 w-4 ml-36 mt-5" />
        </div>
        <hr className="w-[350px] mt-2 mx-auto" />
        <div className="flex pb-3">
          <AiOutlineUser className="h-4 w-4 ml-10 mt-2" />
          <p className="text-gray-500 text-xs ml-2 mt-2">Robo de cuenta</p>
          <IoIosArrowForward className="h-4 w-4 ml-[205px] mt-2" />
        </div>
      </div>
    </div>
  )


}export default Login;
