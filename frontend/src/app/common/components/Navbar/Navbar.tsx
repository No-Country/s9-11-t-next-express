
import UserSection from "./components/UserSection"
import AdvertisingSection from "./components/AdvertisingSection"
import CategoriesSection from "./components/CategoriesSection"
import LocationSection from "./components/LocationSection"
import LogoSection from "./components/LogoSection"
import InputSection from "./components/InputSection"

export default function Navbar() {
    return (
        <nav className="bg-[#EDF24B] h-[100px]">
            <div className="container h-full max-w-[1200px]">
                <div className="grid px-2 py-3 grid-row-2 grid-cols-[1fr_4fr_2fr] gap-x-6 gap-y-3 h-full">
                    <LogoSection />
                    <InputSection />
                    <AdvertisingSection />
                    <LocationSection />
                    <CategoriesSection />
                    <UserSection />
                </div>
            </div>
        </nav >

    )
}