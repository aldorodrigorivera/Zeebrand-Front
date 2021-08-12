import React from 'react'
import { useHistory } from 'react-router-dom';
export default function ProductItem ({product}) {
    const nav = useHistory();
    const goTo = id => nav.push('/products/'+id)
    const defaultURL = "https://dummyimage.com/600x360"
    return (
        <div className="lg:w-1/3 sm:w-1/2 p-4" onClick={() => goTo(product.objectId)}>
            <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={product.url || defaultURL} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{product.name.toUpperCase()}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">${product.price} MXN</h1>
                    <p className="leading-relaxed">SKU: {product.objectId}</p>
                </div>
            </div>
        </div>
    )
}
