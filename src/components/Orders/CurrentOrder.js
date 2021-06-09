import React, { useContext, useEffect, useState } from "react"
import { OrderItemContext } from "./OrderItemProvider"

export const CurrentOrder = () => {
    const { getOrderItems} = useContext(OrderItemContext)
    const [ orderItems ] = useState({})
    debugger
    useEffect(() => {
        getOrderItems()
    }, [])

    const myCustomerId = parseInt(localStorage.getItem("kandy_customer"))
    let myOrderItems = []

    for (let i = 0; i < orderItems.length; i++) {
        if (orderItems[i].customerId === myCustomerId) {
            myOrderItems.push(orderItems[i])
        }
    }

    return (
        <>
        <h2>Your Order</h2>
        <section className="orderForm">
        {
            myOrderItems.map(orderItem => {
                return (
                    <div className="orderItem" key={orderItem.id}>
                        {orderItem.id}
                    </div>
                )
            })
        }
        </section>
        </>
    )
}