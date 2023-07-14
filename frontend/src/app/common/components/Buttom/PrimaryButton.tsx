/* eslint-disable @next/next/no-img-element */

import React from "react";


export default function PrimaryButton(props) {
  
  return (
   <div>
      <button className="w-[260px] bg-azul-meli rounded-md h-[46px] text-white text-base" > {props.name}</button>
   </div>
  );
}






