export default function Navbar() {
    return (
        <nav className="bg-yellow-300 h-[100px]">
            <div className="container h-full">
                <div className="grid px-2 py-3 grid-row-2 gap-x-2 h-full">
                    <div className="flex w-full justify-between items-center">
                        <div>
                            Logo
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            Publicidad
                        </div>
                    </div>

                    <div className="flex w-full justify-between items-center">
                        <div>
                            Ubicación
                        </div>
                        <div>
                            navegación /categorias
                        </div>
                        <div>
                            seccion usuario
                        </div>
                    </div>

                </div>


            </div>
        </nav>

    )
}