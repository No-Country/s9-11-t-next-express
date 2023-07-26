"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"


export default function LogoSection() {
    const pathname = usePathname();

    return (
        <div className="flex items-center">
            <Link href="/">
                <img className="h-[34px] w-auto" href={'/page'} src={'https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.13/mercadolibre/logo__large_plus.png'} width={100} height={100} alt="logo" />
            </Link>
        </div>
    )
}