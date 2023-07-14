
import UserSection from "./components/UserSection"
import AdvertisingSection from "./components/AdvertisingSection"
import CategoriesSection from "./components/CategoriesSection"
import LocationSection from "./components/LocationSection"
import LogoSection from "./components/LogoSection"
import InputSection from "./components/InputSection"

export default function Navbar() {
    return (
        <nav className="bg-amarillo-meli h-[100px] max-w-[1200px] m-auto">
            <div className="grid p-[8px__10px_12px] grid-row-2 grid-cols-[1fr_4fr_3fr] grid-rows-[40px_28px] gap-x-6 gap-y-3 h-full">
                <LogoSection />
                <InputSection />
                <AdvertisingSection />
                <LocationSection />
                <CategoriesSection />
                <UserSection />
            </div>
        </nav >

    )
}