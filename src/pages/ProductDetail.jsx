import React, { useEffect } from 'react'
import Header from '../components/Header';
import Loading from '../components/Loading';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, changeProductStatus, updateProductPrice} from '../actions/products';
import { showConfirm, showInputNumber } from '../herlpers/alert';

export default function ProductDetail () {
    const { id } = useParams();
    const nav = useHistory();
    const dispatch = useDispatch();
    const { loading, product } = useSelector(state => state.productReducer)
    const defaultURL = "https://dummyimage.com/720x600";
    const deleteProduct = async(id) => {
        const { isConfirmed } = await showConfirm("Hey!","¿Estás seguro de borrar este producto?");
        if(isConfirmed) {
            dispatch(changeProductStatus(id,nav))
        }
    }
    const updatePrice = async(product) => {
        const {value: price} = await showInputNumber("Introduce el nuevo precio del producto:");
        if(price) {
            dispatch(updateProductPrice(product,price,nav))
        }
    }
    useEffect(() => dispatch(getProduct(id,nav)), []);
    return (
        <div>
            <Header/>
            {
                !loading ? 
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={product?.url || defaultURL}/>
                            <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">{product?.name || ""}</h1>
                            <strong id="sku" className="mb-8">SKU: {id}</strong>
                            <p className="mb-8 leading-relaxed">El producto actualmente se encuentra disponible con un
                             precio de <strong>${product?.price} MXN</strong>,
                             aprovecha el super precio porque en cualquier momento podría 
                             cambiar o dejar de estar disponible</p>
                            <div className="flex justify-center">
                                <div className="lg:w-1/2 mx-auto md:w-full">
                                    <button 
                                        id="btnDelete"
                                        className="md:m-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                                        onClick={() => deleteProduct(id)}>
                                        Eliminar
                                    </button>
                                    <button 
                                        id="btnUpdate"
                                        className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                                        onClick={() => updatePrice(product)}>
                                        Modifica el precio del producto
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                : <Loading/>
            }
            
        </div>
        
    )
}
