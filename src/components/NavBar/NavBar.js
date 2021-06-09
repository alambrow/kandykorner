import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from "react"
import { OrderItemContext } from "../Orders/OrderItemProvider"

import "./navbar.css"


export const NavBar = (props) => {
    const { orderItems, getOrderItems } = useContext(OrderItemContext)
    
    useEffect(() => {
        getOrderItems()
    }, [])
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/myOrder">My Order ({orderItems.length})</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" onClick={() => {
                    localStorage.removeItem("kandy_customer")
                }
                } to="/">Logout</Link>
            </li>
        </ul>
    )
}