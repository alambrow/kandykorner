import React from "react"
import { Route } from "react-router"
import { ApplicationViews } from "../ApplicationViews"
import { NavBar } from "./NavBar/NavBar"

export const KandyKorner = () => (
    <>
        <h1>KandyKorner</h1>
        <NavBar />
        <ApplicationViews />
    </>
)