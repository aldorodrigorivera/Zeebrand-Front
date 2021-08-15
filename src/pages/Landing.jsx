import React from 'react'
import { ReactComponent as CheckLogo } from '../assets/checkSVG.svg';
import { useHistory } from 'react-router-dom';

export default function Langing() {
    const nav = useHistory();
    const goTo = URL => nav.push(URL);
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Zeebrands</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Este proyecto es exclusivamente para la prueba técnica. Este proyecto fué elaborado por  <strong>Aldo Rodrigo Rivera Carrillo </strong>
                        en el cual tiene las siguientes características
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <CheckLogo></CheckLogo>
                            <span className="title-font font-medium">Axios</span>
                        </div>
                    </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <CheckLogo></CheckLogo>
                        <span className="title-font font-medium">React</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <CheckLogo></CheckLogo>
                        <span className="title-font font-medium">Redux</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <CheckLogo></CheckLogo>
                        <span className="title-font font-medium">Netlify</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <CheckLogo></CheckLogo>
                        <span className="title-font font-medium">Tailwind css</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <CheckLogo></CheckLogo>
                        <span className="title-font font-medium">Parse server</span>
                    </div>
                </div>
            </div>
                    <button 
                    data-cy="btnGoLogin"
                    className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                    onClick={() => goTo('/login')}
                    >OK</button>
            </div>
        </section>
    )
}