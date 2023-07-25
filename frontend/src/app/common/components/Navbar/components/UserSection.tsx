import Link from "next/link"
import { useEffect, useState, ReactNode } from 'react';
import {BiSolidDownArrow} from "react-icons/bi";
import {AiOutlineUser} from "react-icons/ai";


export default function UserSection(): ReactNode {
    let [email, setEmail ] = useState("")
    let [user, setUser ] = useState({})
    let [isLogged, setIsLogged ] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const toggleDropDown = () => {
        setDropdown(!dropdown)
        const userDropdown = document.getElementById("user-dropdown")
        if(dropdown === false){
            userDropdown?.setAttribute("class", "hidden")
        } else {
            userDropdown?.setAttribute("class","z-10 bg-white px-[6px] mr-[352px] -mt-[250px] shadow-md") 
        }
    }
  
    const getToken = (): any =>  {
      if(JSON.parse(localStorage.getItem("token") as string) !== null){
      return JSON.parse(localStorage.getItem("token") as string);
      } else {
        null;
      }
    }
  
    const deleteToken = (user?: any)  => {
      setUser({});
      setIsLogged(false)
      const val: void = localStorage.removeItem(user);
    }

    function existeUsuario(): any {
        if(JSON.parse(localStorage.getItem('token') as string) !== null){
        setIsLogged(true)
        user = JSON.parse(localStorage.getItem('token') as string);
        console.log(user);
        setUser(user)

        }
    }
  
    useEffect(() => {
      try {
        existeUsuario()
  
      } catch (error) {
        console.log(error);
      }
    }, [])
  
  
    const cerrarSesion = () => {
      // e.preventDefault();
      setUser({});
      localStorage.clear();
    }
    
    return (
        <div className="flex justify-end items-center gap-[22px] text-[#333]">
            <div className="flex gap-[22px]">
                {
                    isLogged === true?
                    <>
                    <div onClick={toggleDropDown} className="flex flex-row justify-evenly items-center cursor-pointer">
                        <AiOutlineUser className="mr-1 border border-gray-500 rounded-full" size={15}/>
                        <p>{user["email"]? user["email"].slice(0,10) + "..." : "loading..."}</p>
                        <BiSolidDownArrow className="ml-1" size={10}/>
                    </div>
                    <Link href={'/common/components/login'}>Mis compras</Link>
                    </>
                    :
                    <>
                    <Link href={'/common/components/register'}>Crea tu cuenta</Link>
                    <Link href={'/common/components/login'}>Ingresa</Link>
                    <Link href={'/common/components/login'}>Mis compras</Link>

                    </>
                }
            </div>
            <div className="w-[20px] h-[20px] bg-black">

            </div>


        </div>
    )
}