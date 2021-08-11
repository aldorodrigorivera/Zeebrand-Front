import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { validateLogin } from '../validators/login';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/users';

export default function NotFound() {

    const [form, changeForm] = useState({user:'',password:''});
    const nav = useHistory();
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.userReducer);
    const onChange = e => changeForm({ ...form, [e.target.name]:e.target.value });
    const goTo = (url) => nav.push(url);
    const onSubmit = () => {
        const valid = validateLogin(form);
        if(!valid){ return; }
        dispatch(login(form,nav));
        changeForm({user:'', password:''});
    }
    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-center">
                    <strong>Hey! 🤩</strong>
                    <p className="leading-relaxed mt-4">
                        La administracion del sitio es privada, 
                        Si no tienes cuenta te invitamos a registrarte y no te pierdas de la experiencia
                        <Link to='/singup' className="text-blue-500"> Aquí.</Link>
                    </p>
                </div>
                <div className="lg:w-3/6 md:w-1/2 bg-gray-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-4xl font-medium title-font mb-5 text-center">Inicia sesión con tu cuenta</h2>
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
                        !loading ? 
                            <button 
                                disabled={loading}
                                className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                                onClick={() => onSubmit()}
                            >Iniciar sesión 👀</button>
                        : <Loading/>
                    }
                    
                </div>
            </div>
            <button 
                className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                onClick={() => goTo('/')}
            > Regresar </button>
        </div>
    )
}