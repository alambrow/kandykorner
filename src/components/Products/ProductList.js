import React, { useContext, useEffect, useState } from "react"
import { ProductTypeContext } from "../ProductTypes/ProductTypeProvider";
import { ProductContext } from "./ProductProvider"
import "./products.css";
import { OrderItemContext } from "../Orders/OrderItemProvider";


export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)
    const { orderItems, getOrderItems, addOrderItem, editOrderItem } = useContext(OrderItemContext)


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

    useEffect(() => {
        getOrderItems()
    }, [])

    const handleClickAddOrderItem = (event) => {

        for (let i = 0; i < orderItems.length; i++) {
            if (orderItems[i].productId === parseInt(event.target.id)) {
                editOrderItem({
                    id: parseInt(orderItems[i].id),
                    quantity: parseInt(orderItems[i].quantity + 1),
                    productId: parseInt(event.target.id),
                    customerId: parseInt(localStorage.getItem("kandy_customer"))
                })
                return
            }
        }

        addOrderItem({
        productId: parseInt(event.target.id),
        quantity: 1,
        customerId: parseInt(localStorage.getItem("kandy_customer"))
        })

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
                        <button id={product.id} onClick={handleClickAddOrderItem}>Add to order</button>
                        </div>
                    )
                })
            }
        </section>
    )
}