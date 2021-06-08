import React, { useContext, useEffect, useState } from "react"
import { ProductTypeContext } from "../ProductTypes/ProductTypeProvider";
import { ProductContext } from "./ProductProvider"
import "./products.css";


export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        getProductTypes() 
    }, [])

    const getProductTypeName = (productId) => {

        for (let i = 0; i < productTypes.length; i++) {
            if (productTypes[i].id === productId) {
                return productTypes[i].class
            }
        }
       
    }


    return (
        <section className="products">
            {
                products.map(product => {
                    return (
                        <div className="product" key={product.id}>
                        <div className="productName">{product.name}</div>
                        <div className="ProductId">ID: {product.id}</div>
                        <div className="productPrice">${product.price}</div>
                        <div className="productType">Product Type: 
                            {getProductTypeName(parseInt(product.productType))}
                        </div>
                        </div>
                    )
                })
            }
        </section>
    )
}