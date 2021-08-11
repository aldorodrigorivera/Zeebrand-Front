import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import { validate } from '../validators/singup';
import { useDispatch, useSelector } from 'react-redux';
import { singup } from '../actions/singup';

export default function NotFound(){
    const nav = useHistory();
    const [form, changeForm] = useState({user:'',password:'',name:'',phone:''});
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.singUpReducer);
    const onChange = e => changeForm({ ...form, [e.target.name]:e.target.value });
    const goTo = url => nav.push(url);
    const onSubmit = () => {
        const valid = validate(form);
        if(!valid){ return; }
        dispatch(singup(form,nav));
        changeForm({user:'',password:'',name:'',phone:''});
    }
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
                                onChange={onChange}
                                value={form.user} 
                                placeholder="admin@mail.com"
                                name="user" 
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="name" 
                            className="leading-7 text-sm text-gray-600">
                                Nombre de usuario
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                onChange={onChange}
                                value={form.name}
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
                                onChange={onChange}
                                value={form.phone}
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
                                onChange={onChange}
                                value={form.password} 
                                placeholder="Admin123"
                                name="password" 
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        {
                            loading ? 
                                <button 
                                    disabled={loading}
                                    className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                                    onClick={() => onSubmit()}
                                >Registra tu cuenta 😎 </button>
                            : <Loading/>
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