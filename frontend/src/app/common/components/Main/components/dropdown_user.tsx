import React from 'react'

function DropdownUser({userMenu, deleteToken}) {
  return (
    <div className="flex flex-col items-end">
    <div id="user-dropdown" className=" z-10 bg-white  mr-[352px] -mt-[250px] shadow-md hidden hover:bg-blue-500">
      <ul className="flex justify-start items-start text-left hover:bg-blue-500">
          {
            userMenu.map((el: any) => {
                return (
                    <li key={el.id} onClick={deleteToken} className="text-left pr-[73px] px-[6px] cursor-pointer hover:bg-blue-500 hover:text-white">
                      {el.text}
                    </li>
                )
            })
          }
      </ul>
    </div>
  </div>
  )
}

export default DropdownUser
