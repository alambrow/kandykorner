// import React, { useState, createContext } from "react"

// export const OrderContext = createContext()

// export const OrderProvider = (props) => {
//     const [orders, setOrders] = useState([])

//     const getOrders = () => {
//         return fetch("http://localhost:8088/orders")
//         .then (res => res.json())
//         .then (setOrders)
//     }

//     const getOrderById = orderId => {
//         return fetch(`http://localhost:8088/orders/${orderId}`)
//         .then (res => res.json())
//     }

//     const addOrder = orderObj => {
//         return fetch("http://localhost:8088/orders", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(orderObj)
//         })
//         .then (res => res.json())
//         .then(getOrders)
//     }

//     return (
//         <OrderContext.Provider value={{
//              addOrder, getOrders, getOrderById
//         }}>
//             {props.children}
//         </OrderContext.Provider>
//     )
// }