"use client"

import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, ReactElement } from 'react';


const LikesPerProduct = (): ReactElement => {

  const [likes, setLikes] = useState([]);
  const pathname = usePathname();
  const regex = /\/([\w-]+)$/;
  const match = pathname.match(regex);
  const id = match ? match[1] : null;
  const profileImg = 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png';
  console.log("soy el id", id);

const getLikesPerProduct = () => {
  const user= JSON.parse(localStorage.getItem('token') as string) ;
  const config = {
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + user['token'] 
    }
  }
  axios.get(`https://meliclon-social-api-nc.onrender.com/api/meliclon/v1/likes/product/${id}`, config)
  .then((res) => {
  setLikes(res.data.FollowingLikes); 
  console.log(res.data);
  
  })
  .catch((error) => {
    console.log(error);
  })
}

function* generateId(){
  let idUser = 1
  while(true){
    yield idUser;
    idUser++
  }
}

const newId = generateId();
  useEffect(() => {
    getLikesPerProduct();
  }, []);



  return (
    <>
    <div className="flex flex-col justify-center items-center mt-9">
      <h1 className="text-xl text-black font-semibold mb-7">
       Personas que les gustó el producto      
      </h1>
      {
            likes.filter(el => el['user_id']['name']).map((el) => {

              return (
                
              <div 
                key={el['_id']} 
                className="  flex justify-start items-start bg-white py-2 shadow-md w-[350px] "
              >
              <div className="ml-4 ">
              <Image 
                className="rounded-full" 
                // loader={() => src} 
                // src={`${user['avatar'] === undefined? src : user['avatar']}`} 
                src={el['user_id']['avatar']? el['user_id']['avatar']: profileImg}
                alt="profile-image" 
                height={50} 
                width={50} 
                />
              </div>
              <div className="flex justify-start items-start flex-col ml-2 content-center">
                <h1 
                  className=" text-black text-lg font-semibold">{
                    el['user_id']['name'] == undefined? 
                    `user ${newId.next().value}`:
                    `${el['user_id']['name'] }`}
                </h1>
                
              </div>
            </div>
              )
            })
  
      }
      {
            likes.filter(el => !el['user_id']['name']).map((el) => {

              return (
                
              <div 
                key={el['_id']} 
                className="  flex justify-start items-start bg-white py-2 shadow-md w-[350px]"
              >
              <div className="ml-4 ">
              <Image 
                className="rounded-full" 
                // loader={() => src} 
                // src={`${user['avatar'] === undefined? src : user['avatar']}`} 
                src={el['user_id']['avatar']? el['user_id']['avatar']: profileImg}
                alt="profile-image" 
                height={50} 
                width={50} 
                />
              </div>
              <div className="flex justify-start items-start flex-col ml-2 content-center">
                <h1 
                  className=" text-black text-lg font-semibold">{
                    el['user_id']['name'] == undefined? 
                    `user ${newId.next().value}`:
                    `${el['user_id']['name'] }`}
                </h1>
                
              </div>
            </div>
              )
            })

          }
          {/* {
            likes.map(el =>  {
              return (
              <div 
                key={el['_id']} 
                className="  flex justify-start items-start bg-white py-2 shadow-md w-[350px]"
              >
              <div className="ml-4 ">
              <Image 
                className="rounded-full" 
                // loader={() => src} 
                // src={`${user['avatar'] === undefined? src : user['avatar']}`} 
                src={el['user_id']['avatar']? el['user_id']['avatar']: profileImg}
                alt="profile-image" 
                height={50} 
                width={50} 
                />
              </div>
              <div className="flex justify-start items-start flex-col ml-2 content-center">
                <h1 
                  className=" text-black text-lg font-semibold">{
                    el['user_id']['name'] == undefined? 
                    `user ${newId.next().value}`:
                    `${el['user_id']['name'] }`}
                </h1>
                
              </div>
            </div>
              )
            })
  
        } */}
        {/* {
          likes.map(el => {
            return (
              <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-start mx-auto bg-white"></div>
               <div className="ml-3">
                <Image 
                  src={el['user_id']['name'] === null? profileImg : el['user_id']['avatar']} 
                  alt="profile-img" 
                  width={50} 
                  height={50} />
              </div>
              <div className="mr-[230px]">
                <h1>
                  {el['user_id']['name'] === null? `user ${newId.next().value}` : el['user_id']['name'] }
                </h1>

              </div>
              </div>
    
            )
          })
        } */}
    
    </div>
    </>
  )
}

export default LikesPerProduct;
