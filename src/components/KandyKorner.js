import React from "react"
import { Route, Redirect } from "react-router"
import { ApplicationViews } from "../ApplicationViews"
import { NavBar } from "./NavBar/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { OrderItemProvider } from "./Orders/OrderItemProvider"

export const KandyKorner = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("kandy_customer")) {
                    return (
                        <>
                        <h1>KandyKorner</h1>
                        <OrderItemProvider>
                            <NavBar />
                        </OrderItemProvider>
                        <ApplicationViews />
                        </>
                    )
                } else {
                    return <Redirect to="/login" />;
                }
            }}
            />

            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
    </>
)

