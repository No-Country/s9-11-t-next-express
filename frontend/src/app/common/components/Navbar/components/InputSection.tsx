"use client"

import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";


interface KeyboardEvent {
    enterKey: boolean;
}

export default function InputExport() {
    const router = useRouter();

    const goProducts = () => {
        console.log('se va');
        
            router.push("/pages/products")
        
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
       e.preventDefault();
        
    }
    return (
        <div className="">
            <input 
                onChange={changeHandler}
                onClick={goProducts}
                className="w-full rounded-sm p-[10px] shadow-md" 
                placeholder="Buscar productos, marcas y más..." 
                type="text" />
        </div>

    )
}