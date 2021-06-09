import React, { useContext, useEffect, useState } from "react"
import { OrderItemContext } from "./OrderItemProvider"

export const CurrentOrder = () => {
    const { orderItems, getOrderItems } = useContext(OrderItemContext)
    
    useEffect(() => {
        getOrderItems()
    }, [])

    return (
        <>
        <h2>Your Order</h2>
        <section className="orderForm">
        {
            orderItems.map(orderItem => {
                return (
                    <div className="orderItem" key={orderItem.id}>
                        {orderItem.product.name}____
                        ${orderItem.product.price}____
                        {orderItem.quantity}
                        ${parseInt(orderItem.quantity)*orderItem.product.price}
                    </div>
                )
            })
        }
        </section>
        </>
    )
}