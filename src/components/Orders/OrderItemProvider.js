import React, { useState, createContext } from "react"

export const OrderItemContext = createContext()

export const OrderItemProvider = (props) => {
    const [orderItems, setOrderItems] = useState([])

    const getOrderItems = () => {
        return fetch(`http://localhost:8088/orderItems?customerId=${parseInt(localStorage.getItem("kandy_customer"))}`)
        .then(res => res.json())
        .then(setOrderItems)
    }

    const addOrderItem = itemObj => {
        return fetch("http://localhost:8088/orderItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemObj)
        })
        .then(res => res.json())
        .then(getOrderItems)
    }

    return (
        <OrderItemContext.Provider value={{
            orderItems, getOrderItems, addOrderItem
        }}>
            {props.children}
        </OrderItemContext.Provider>
    )
}