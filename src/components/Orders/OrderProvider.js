import React, { useState, createContext } from "react"

export const OrderContext = createContext()

export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])

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

    const getProtoOrderItms = () => {
        return fetch("http://localhost:8088/protoOrderItems")
        .then (res => res.json())
        .then (getProtoOrderItms)
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
        .then (getProtoOrderItms)
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
            orders, getOrders, getOrderItems, addOrder, getOrderById, addOrderItem, getProtoOrderItms, addProtoOrderItem
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}