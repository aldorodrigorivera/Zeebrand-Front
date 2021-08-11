import Head from '../components/Header'
import ProductItem from '../components/ProductItem'

export default function Products () {
    return (
        <div>
           <Head/>
           <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Bienvenido</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Solo aquí encontraras las mejores ofertas.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <ProductItem title="Iphone" price={100} description="Celular mas vendido"/>
                </div>
            </div>
           </section>
        </div>
    )
}
