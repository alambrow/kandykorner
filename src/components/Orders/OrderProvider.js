import React, { useState, createContext } from "react"

export const OrderContext = createContext()

export const OrderProvider = (props) => {
    const [orders, setOrders, setProtoOrderItems] = useState([])

    const getOrders = () => {
        return fetch("http://localhost:8088/orders")
        .then (res => res.json())
        .then (setOrders)
    }

    const getOrderById = orderId => {
        return fetch(`http://localhost:8088/orders/${orderId}`)
        .then (res => res.json())
    }

    const getOrderItems = () => {
        return fetch("http://localhost:8088/orderItems")
        .then (res => res.json())
        .then (setOrders)
    }

    const getProtoOrderItems = () => {
        return fetch("http://localhost:8088/protoOrderItems")
        .then (res => res.json())
        .then (setProtoOrderItems)
    }

    const addProtoOrderItem = itemObj => {
        return fetch("http://localhost:8088/protoOrderItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemObj)
        })
        .then (res => res.json())
        .then (getProtoOrderItems)
    }

    const addOrder = orderObj => {
        return fetch("http://localhost:8088/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderObj)
        })
        .then (res => res.json())
        .then(getOrders)
    }

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

    return (
        <OrderContext.Provider value={{
            orders, addProtoOrderItem, getProtoOrderItems, addOrderItem, addOrder, getOrders, getOrderById
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}