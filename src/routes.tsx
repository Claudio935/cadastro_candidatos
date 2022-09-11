import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Resultado from "./views/resultado";
import Home from "./views/home";


const NewRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={< Home />} path="/" />
                <Route element={< Resultado />} path="resultado" />
            </Routes>
        </BrowserRouter>
    )
}

export default NewRoutes;