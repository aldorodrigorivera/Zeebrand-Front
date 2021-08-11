import React from 'react'
import { useHistory } from 'react-router-dom';

export default function NotFound(){
    const nav = useHistory();
    const goTo = url => nav.push(url);
    return (
            <div className="text-gray-600 body-font">
                <div className="container px-0 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/6 md:w-1/2 bg-gray-50 rounded-lg p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-4xl font-medium title-font mb-5 text-center">Regístrate</h2>
                        <div className="relative mb-4">
                            <label 
                                htmlFor="user" 
                                className="leading-7 text-sm text-gray-600">
                                 Correo electronico
                            </label>
                            <input 
                                type="text" 
                                id="user"
                                placeholder="admin@mail.com"
                                name="user" 
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="name" 
                            className="leading-7 text-sm text-gray-600">
                                Contraseña
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Nombre de usuario"
                                name="name" 
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="phone" 
                            className="leading-7 text-sm text-gray-600">
                                Celular
                            </label>
                            <input 
                                type="phone" 
                                id="phone" 
                                placeholder="442#######"
                                name="phone" 
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" 
                            className="leading-7 text-sm text-gray-600">
                                Contraseña
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Admin123"
                                name="password" 
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        {
                            true ? 
                                <button 
                                    disabled={false}
                                    className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                                    
                                >Registra tu cuenta 😎 </button>
                            : null
                        }
                    </div>
                    <div className="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pl-10 text-center">
                        <strong>Hey! 🤩 </strong>
                        <p className="leading-relaxed mt-4">
                            No te pierdas la oportunidad.
                            Si no tienes cuenta te invitamos a registrarte y no te pierdas de la experiencia
                        </p>
                        <button 
                            className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                            onClick={() => goTo('/')}
                        > Regresar </button>
                    </div>
                </div>
                
            </div>
    )
}