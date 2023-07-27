import React from 'react'

function DropdownUser({userMenu}) {
  return (
    <div className="flex flex-col items-end">
    <div id="user-dropdown" className=" z-10 bg-white  mr-[352px] -mt-[250px] shadow-md hidden">
      <ul className="flex flex-col items-start text-left flex-1 ">

          {
            userMenu.map((el: any) => {
                return (
                  <div key={el.id} className={el.text.length < 6? 'text-left pr-[115px] cursor-pointer hover:bg-blue-500 hover:text-white': el.text.length < 10? 'text-left pr-24 cursor-pointer hover:bg-blue-500 hover:text-white': 'text-left  cursor-pointer pr-1 hover:bg-blue-500 hover:text-white'}>

                    <li  onClick={el.do} className="">
                      {el.text}
                    </li>
                   </div>
                )
            })
          }

      </ul>
    </div>
  </div>
  )
}

export default DropdownUser
