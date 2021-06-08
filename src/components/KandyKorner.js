import React from "react"
import { Route } from "react-router"
import { ApplicationViews } from "../ApplicationViews"
import { NavBar } from "./NavBar/NavBar"

export const KandyKorner = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)