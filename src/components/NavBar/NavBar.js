import React from "react"
import { Link } from 'react-router-dom';
import "./navbar.css"


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/myOrder">My Order</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" onClick={(event) => {
                    localStorage.removeItem("kandy_customer")
                }
                } to="/">Logout</Link>
            </li>
        </ul>
    )
}