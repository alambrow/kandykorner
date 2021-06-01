import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import "./products.css";

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <section className="products">
            {
                products.map(product => {
                    return (
                        <div>
                        <div className="product">{product.name}</div>
                        <div className="productID">ID: {product.id}</div>
                        <div className="productPrice">${product.price}</div>
                        <div className="productType">Product Type:{product.productType}</div>
                        </div>
                    )
                })
            }
        </section>
    )
}