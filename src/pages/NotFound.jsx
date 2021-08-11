import React from 'react'
import { useHistory } from 'react-router-dom';

export default function NotFound(){
    const nav = useHistory()
    function goTo(url){
        nav.push(url);
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">UPS! :(</h1>
                <p className="mb-8 leading-relaxed">
                    Pagina no encontrada, por favor verifica que la direccion a la que tratas de acceder es la correcta.
                </p>
                <div className="flex justify-center">
                    <button 
                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        onClick={()=>goTo('/')}
                    >OK</button>
                </div>
                </div>
            </div>
        </section>
    )
}