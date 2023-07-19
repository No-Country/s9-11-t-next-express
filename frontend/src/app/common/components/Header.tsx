"use client"
import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import {usePathname} from 'next/navigation';



export default function Header() {

  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname])

    return (
        <header className="bg-amarillo-meli">
            {
                pathname === '/common/components/login'?
                <>
                </> :
            <Navbar />

            }
        </header>

    )
}