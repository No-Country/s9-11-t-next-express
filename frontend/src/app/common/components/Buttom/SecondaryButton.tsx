/* eslint-disable @next/next/no-img-element */

import React from "react";


export default function SecondaryButton(props) {
  
  return (
   <div>
      <button className="w-[260px] bg-greys-button rounded-md h-[46px] text-azul-meli text-base" > {props.name}</button>
   </div>
  );
}


