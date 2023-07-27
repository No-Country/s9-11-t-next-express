"use client"

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import fondo from "../../../../../public/images/home/login_background.png";

function Profiles() {
  const [user, setUser] = useState({});
  const profileImg = 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png';
  const getUser = () => {
    const user= JSON.parse(localStorage.getItem('token') as string);
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + user['token'] 
      }
    }

    axios.get('https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/users/current', config)
    .then((res) => {
    setUser(res.data); 
    // console.log(res.data);
    
    })
    .catch((error) => {
      console.log(error);
    })
            
  }

  useEffect(() => {
    getUser();
  }, [])
  return (
    <div>
      {/* <h1>Mi perfil</h1> */}
      {
        user !== null? 
        <>
          <div className="flex justify-start items-start bg-white mt-6 mx-[400px]  py-2">
            <div className="ml-4">
              <Image 
                className="rounded-full" 
                // loader={() => src} 
                // src={`${user['avatar'] === undefined? src : user['avatar']}`} 
                src={user['avatar']? user['avatar'] : profileImg}
                alt="profile-image" 
                height={50} 
                width={50} 
                />
            </div>
            <div className="flex justify-start items-start flex-col ml-2 content-center">
              <h1 className=" text-black text-lg font-semibold">{user['name'] == undefined || user['lastname'] == undefined? 'loading...' :`${user['name']} ${user['lastname']}`}</h1>
              <p className="text-black text-base">Estás en nivel 3 - Mercado Puntos</p>
            </div>


          </div>
        </>
        :
        <h1>Loading</h1>

      }
    </div>
  )
}

export default Profiles;
