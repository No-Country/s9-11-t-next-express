"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import meliLogo from "../../../../../../public/logo_meli.png";

export default function LogoSection() {
    const pathname = usePathname();

    return (
        <div className="flex items-center">
            <Link href="/">
                <Image className="h-[34px] w-auto" src={meliLogo} width={100} height={100} alt="logo" />
            </Link>
        </div>
    )
}