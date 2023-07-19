import Link from "next/link"
import { useEffect, useState, ReactNode } from 'react';
import {BiSolidDownArrow} from "react-icons/bi";


export default function UserSection() {
    let [email, setEmail ] = useState("")
    let [user, setUser ] = useState([])
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
      setUser([]);
      setIsLogged(false)
      const val: void = localStorage.removeItem(user);
    }

    function existeUsuario(): any {
        if(JSON.parse(localStorage.getItem('token') as string) !== null){
        setIsLogged(true)
        setEmail(localStorage.getItem('email') as string)
        user = JSON.parse(localStorage.getItem('token') as string);
        console.log(user);

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
      setUser([]);
      localStorage.clear();
    }
    return (
        <div className="flex justify-end items-center gap-[22px] text-[#333]">
            <div className="flex gap-[22px]">
                {
                    isLogged === true?
                    <>
                    {/* <Dropdown isOpen={dropdown} toggle={toggleDropDown}>
                        <DropdownToggle caret>
                            Santiago Rueda 
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={cerrarSesion}>
                              Salir
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown> */}
                    <div onClick={toggleDropDown} className="flex flex-row justify-evenly items-center cursor-pointer">
                        <p>Santiago Rueda</p>
                        <BiSolidDownArrow className="ml-1" size={10}/>
                    </div>
                    {/* <div className="flex flex-col">
                    <div className=" z-10 bg-white">
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