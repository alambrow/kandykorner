import React, { useState, createContext } from "react"

export const OrderItemContext = createContext()

export const OrderItemProvider = (props) => {
    const [orderItems, setorderItems] = useState([])

    const addOrderItem = itemObj => {
        return fetch("http://localhost:8088/orderItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemObj)
        })
        .then (res => res.json())
        .then (getOrderItems)
    }

    const getOrderItems = () => {
        return fetch("http://localhost:8088/orderItems")
        .then (res => res.json())
        .then (setorderItems)
    }

    return (
        <OrderItemContext.Provider value={{
            orderItems, getOrderItems, addOrderItem
        }}>
            {props.children}
        </OrderItemContext.Provider>
    )
}