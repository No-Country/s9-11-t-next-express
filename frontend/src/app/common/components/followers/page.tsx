"use client"

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import fondo from "../../../../../public/images/home/login_background.png";
import { usePathname } from "next/navigation";


// declare global {
//   interface Window {
//       FB:any;
//   }
// }

function Followers() {

  const [user, setUser] = useState({});
  const [ followers, setFollowers ] = useState([]);
  const [ following, setFollowing ] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const profileImg = 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png';
  const path = usePathname();
  

  const getUser = () => {
    const user= JSON.parse(localStorage.getItem('token') as string) ;
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + user['token'] 
      }
    }
    axios.get('https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/users/current', config)
    .then((res) => {
    setUser(res.data); 
    console.log(res.data);
    
    })
    .catch((error) => {
      console.log(error);
    })
            
  }

  const getFollowers = () => {
    const user= JSON.parse(localStorage.getItem('token') as string) ;
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + user['token'] 
      }
    }
    axios.get('https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/followers/current', config)
    .then((res) => {
    console.log(res.data.myFollowers);
    setFollowers(res.data.myFollowers); 
    
    })
    .catch((error) => {
      console.log(error);
    })
            
  }

  const getFollowing = () => {
    const user= JSON.parse(localStorage.getItem('token') as string) ;
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + user['token'] 
      }
    }

    axios.get('https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/followers/following/current', config)
    .then((res) => {
    console.log(res.data.following);
    setFollowing(res.data.following); 
    
    })
    .catch((error) => {
      console.log(error);
    })
            
  }

  const toggleTab = (index: number) =>{
    setToggleState(index)
    if(index === 1){
      const divOne = document.getElementById("div-uno") as HTMLDivElement;
      const divDos = document.getElementById("div-dos") as HTMLDivElement;
      divOne.className = "bg-white cursor-pointer text-blue-600 text-md px-[93px] py-5 border-[2px] border-b-blue-500 border-r-white"
      divDos.className = "bg-white cursor-pointer text-gray-400 text-md px-[93px] py-5 border-2 border-l-gray-300"
    } else if(index === 2){
      const divOne = document.getElementById("div-uno") as HTMLDivElement;
      const divDos = document.getElementById("div-dos") as HTMLDivElement;
      divOne.className = "bg-white cursor-pointer text-gray-400 text-md px-[93px] py-5 border-2 border-r-gray-300"
      divDos.className = "bg-white cursor-pointer text-blue-600 text-md px-[93px] py-5 border-[2px] border-b-blue-500 border-l-white"

    }
  }

  const deleteFollowing = (id: string) => {
    const follower= JSON.parse(localStorage.getItem('token') as string);
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + follower['token'] 
      }
    }
    axios.delete(`https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/followers/${id}`, config)
    .then(res => {   
      console.log(res);

      window.location.reload()
      }).catch((err) => {
        console.log(err);
        alert('Error, no se pudo dejar de seguir a este usuario.');
        
    })
  }

  useEffect(() => {
    getUser();
    getFollowers();
    getFollowing();
  }, [])



  return (
    <div>
      {
        user !== null? 
        <>
          <div className="flex justify-start items-start bg-white mt-6 mx-[400px] py-2 shadow-md">
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
          <div className="flex flex-col justify-center mt-5 ">
            <div className="flex justify-center items-center mx-auto bg-white">
              <div 
                id="div-uno"
                onClick={() => toggleTab(1)} 
                className="bg-white cursor-pointer text-gray-400 text-md px-[93px] py-5" >
                  Seguidores
              </div>
              <div 
                id="div-dos"
                onClick={() => toggleTab(2)} 
                className="bg-white cursor-pointer text-gray-400 text-md px-[93px] py-5  " >
                  Seguidos
              </div>
             
            </div>

            {
                toggleState === 1?
                <>
                <div className="flex flex-col justify-start bg-white mx-auto items-start">
                  <h1 className="text-left mr-[346px] ml-[10px] mt-2 mb-5 font-semibold">
                    Todos los seguidores.
                  </h1>
                </div>
                {
                  followers.map(el =>  {
                    return (
                    <div key={el['follower_id']['_id']} 
                        className="flex items-start bg-white py-2 shadow-md w-[503px] mx-auto"
                    >
                      <div className="ml-4 ">
                        <Image 
                          className="rounded-full" 
                          // loader={() => src} 
                          // src={`${user['avatar'] === undefined? src : user['avatar']}`} 
                          src={el['follower_id']['avatar']? el['follower_id']['avatar']: profileImg}
                          alt="profile-image" 
                          height={50} 
                          width={50} 
                          />
                      </div>
                      <div className="flex justify-start items-start flex-col ml-2 content-center">
                        <h1 className=" text-black text-lg font-semibold">{el['follower_id']['name'] == undefined || el['follower_id']['lastname'] == undefined? 'loading...' :`${el['follower_id']['name']} ${el['follower_id']['lastname']}`}</h1>
                      </div>
                    </div>
                    )
                  })
  
                }

                </>
                : 
                <>
                <div className="flex flex-col justify-start bg-white mx-auto items-start">
                  <h1 className="text-left mr-[301px] ml-[10px] mt-2 mb-5 font-semibold">
                    Todos los usuarios que sigo.
                  </h1>
                </div>
                 {
                  following.map(el => {
                    return (
                    <div key={el['following_id']['_id']} className="  flex justify-between items-center bg-white py-2 shadow-md mx-auto w-[504px]">
                    <div className="ml-4 ">
                      {/* <h1>{el['following_id']['_id']}</h1> */}
                      <Image 
                        className="rounded-full" 
                        // loader={() => src} 
                        // src={`${user['avatar'] === undefined? src : user['avatar']}`} 
                        src={el['following_id']['avatar']? el['following_id']['avatar'] : profileImg}
                        alt="profile-image" 
                        height={50} 
                        width={50} 
                        />
                    </div>
                    <div className="flex justify-start items-start flex-col ml-2 content-center">
                      <h1 className=" text-black text-lg font-semibold -ml-[150px]">{el['following_id']['name'] == undefined || el['following_id']['lastname'] == undefined? 'loading...' :`${el['following_id']['name']} ${el['following_id']['lastname']}`}</h1>
                      
                    </div>
                    <div className="flex justify-end items-end content-end">
                      <button 
                        onClick={() => deleteFollowing(el['following_id']['_id'])}
                        className="bg-gray-200 px-4 rounded-sm mr-[15px]">Eliminar</button>
                    </div>
                  </div>
                    )
                  })
                }
                </>
              }

          </div>
        </>
        :
        <h1>Loading</h1>

      }
    </div>
  )
}

export default Followers;
