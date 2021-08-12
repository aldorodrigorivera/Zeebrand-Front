import React from 'react'
import Header from '../components/Header';
import { useParams } from "react-router-dom";

export default function ProductDetail () {
    const { id } = useParams();

    return (
        <div>
            <Header/>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                    <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">Producto</h1>
                    <strong className="mb-8">SKU: {id}</strong>
                    <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                    <div className="flex justify-center">
                        <button 
                            className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                            Eliminar
                        </button>
                        <button 
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Aplicar promoción
                        </button>
                    </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}
