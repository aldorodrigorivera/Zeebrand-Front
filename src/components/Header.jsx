import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { deleteSession } from '../herlpers/session';
export default function Header (){
    const nav = useHistory();
    const logout = () => {
        deleteSession();
        nav.push('/');
    }
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Zeebrands</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/products" className="mr-5 hover:text-gray-900">Productos</Link>
                    <Link to="/create-product" className="mr-5 hover:text-gray-900">Registrar Producto</Link>
                    <Link to="#" className="mr-5 hover:text-gray-900">Sorpréndete</Link>
                    <Link to="#" onClick={() => logout()} className="mr-5 hover:text-gray-900">Cerrar sesión</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}
