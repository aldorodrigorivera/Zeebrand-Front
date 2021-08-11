import React from 'react'
export default function Header (){
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Zeebrands</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="#" className="mr-5 hover:text-gray-900">Ofertas</a>
                    <a href="#" className="mr-5 hover:text-gray-900">Pedidos</a>
                    <a href="#" className="mr-5 hover:text-gray-900">Sorprendete</a>
                    <a href="#" className="mr-5 hover:text-gray-900">Salir</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}
