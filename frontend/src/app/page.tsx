"use client"
import { useEffect } from "react";
import Main from "./common/components/Main/Main"
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname])
  
  return (
    <main className="min-h-[78vh] max-w-[1200px] m-auto ">
      {
        pathname === '/common/components/login'?
        <>
        </> :
      <Main />

      }
    </main>
  )
}
