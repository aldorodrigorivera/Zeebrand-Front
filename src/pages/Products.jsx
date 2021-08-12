import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Head from '../components/Header'
import ProductItem from '../components/ProductItem'
import { getProducts } from '../actions/products';
import Loading from '../components/Loading';

export default function Products () {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.productReducer);
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <div>
           <Head/>
           <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Bienvenido</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Solo aquí encontraras las mejores ofertas.
                    </p> 
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Ven y conóce lo que tenemos para ti.
                    </p> 
                </div>
                {
                    !loading ? 
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map((item) => <ProductItem 
                                key={item.objectId} 
                                product={item} 
                            /> )
                        }
                    </div> : <Loading/>
                }
                
            </div>
           </section>
        </div>
    )
}
