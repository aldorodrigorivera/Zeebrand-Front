import React,{ useState } from 'react'
import Header from '../components/Header'
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from '../validators/products';
import { createNewProduct } from '../actions/products';

export default function CreateProduct() {
    const nav = useHistory();
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.productReducer);
    const [form, changeForm] = useState({name:'', brand:'', price:0, url:''});
    const onChange = e => changeForm({ ...form, [e.target.name]:e.target.value });
    const onSubmit = () => {
        const valid = validate(form);
        if(valid) {
            dispatch(createNewProduct(form,nav));
        }
    }
    return (
        <div>
            <Header/>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Registra nuevos productos</h1>
                        <p className="mb-8 leading-relaxed">
                            Los products registrados en este portal son ideales para nuestros clientes, si tu lo comparias,
                            tienes la mitad del camino recorrido. Recuerda registrar cosas geniales. 😄
                        </p>
                        <div className="mx-auto w-full">
                            <div className="lg:w-3/5 mx-auto md:w-full">
                                <label 
                                    htmlFor="hero-field" 
                                    className="leading-7 text-sm text-gray-600">
                                        Nombre del producto
                                </label>
                                <input 
                                    type="text" 
                                    id="hero-field" 
                                    name="name"
                                    onChange={onChange}
                                    value={form.name} 
                                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="lg:w-3/5 mx-auto md:w-full">
                                <label 
                                    htmlFor="hero-field" 
                                    className="leading-7 text-sm text-gray-600">
                                        Marca del producto
                                </label>
                                <input 
                                    type="text" 
                                    id="hero-field" 
                                    name="brand" 
                                    onChange={onChange}
                                    value={form.brand}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="lg:w-3/5 mx-auto md:w-full">
                                <label 
                                    htmlFor="hero-field" 
                                    className="leading-7 text-sm text-gray-600">
                                        Precio del producto
                                </label>
                                <input 
                                    type="number" 
                                    id="hero-field" 
                                    name="price" 
                                    onChange={onChange}
                                    value={form.price} 
                                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="lg:w-3/5 mx-auto md:w-full">
                                <label 
                                    htmlFor="hero-field" 
                                    className="leading-7 text-sm text-gray-600">
                                        Imagen URL del producto
                                </label>
                                <input 
                                    type="url" 
                                    id="hero-field" 
                                    name="url"
                                    onChange={onChange}
                                    value={form.url} 
                                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="flex">
                            {
                                !loading ?
                                <button 
                                    className="flex mx-auto mt-8 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                                    onClick={() => onSubmit()}
                                >Guardar producto 💈</button>
                                : <Loading />

                            }
                        
                        </div>
                    </div>
                </div>
                </section>
        </div>
    )
}
